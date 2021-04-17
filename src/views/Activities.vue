<template>
    <b-form @submit.prevent="submitActivity" class="mb-5">
        <activity-personal-data :personal_data="activity.personal_data" ></activity-personal-data>
        <activity-type-selection :activity_type_selection="activity.activity_type_selection"></activity-type-selection>
        <component :is="activityComponent"
        :activity_selected_data="activity.activity_selected_data">
        </component>
        <b-row class="mt-3">
            <b-col>
                <b-form-checkbox
                    name="terms"
                    v-model="activity.terms"
                    v-validate="'required'"
                    :state="activity.terms ? 'valid' : (reset ? null : 'invalid')"
                    :unchecked-value="false"
                >
                    Accept terms
                </b-form-checkbox>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-button
                    class="mt-3"
                    type="submit"
                    variant="primary"
                    block
                >
                    Send
                </b-button>
            </b-col>
            <b-col>
                <b-button
                    class="mt-3 text-white"
                    variant="warning"
                    block
                    @click="clearErrors"
                >
                    Clear Errors
                </b-button>
            </b-col>
            <b-col>
                <b-button
                    class="mt-3 text-white"
                    block
                    variant="info"
                    @click="clearForm"
                >
                    Clear Form
                </b-button>
            </b-col>
            <b-col>
                <b-button
                    class="mt-3 text-white"
                    block
                    @click="clearFormAndErrors"
                >
                    Clear Form And Errors
                </b-button>
            </b-col>
        </b-row>

    </b-form>
</template>

<script>
import ActivityTypeSelection from '../components/ActivityForm/ActivityTypeSelection';
import ActivityPersonalData from '../components/ActivityForm/ActivityPersonalData';
import Basket from '../components/ActivityForm/Types/Basket';
import Football from '../components/ActivityForm/Types/Football';
import Tennis from '../components/ActivityForm/Types/Tennis';
import validationMixin from '../mixins/validation';

export default {
    components: {
        ActivityPersonalData, ActivityTypeSelection,
        Basket, Football, Tennis
    },
    mixins: [validationMixin],
   data() {
       return {
           //This does not belong to the form data:
           reset: true,
           activity_types_components: [
               'basket', 'football', 'tennis'
           ],
           //activity: This belongs to the form data that we are gonna interact with
           activity: {
               terms: false,
               personal_data: {
                   name: '',
                   surname: ''
               },
               activity_type_selection: {
                   type: 1,
                   date: ''
               },
               activity_selected_data: {
                   team: '',
                   information: ''
               }
           }
       }
   },
   async mounted() {
       const {data} = await this.axios({
           method:'GET',
           url:'activities_subscriptions/1'//when we submit and is remounted we see the data that we sent in the fields
       });
       this.activity = data;
   },
   computed: {
       activityComponent() {
           switch(this.activity.activity_type_selection.type) {
               case 1: 
                return 'football';
               case 2:
                return 'basket';
               case 3:
                return 'tennis';
               default:
                return 'football';
           }
       }
   },
   methods: {
       async submitActivity() {
           this.reset = false;
           if(!this.activity.terms) {
               return false;
           }
           const validate = await this.$validator.validateAll();
           if(!validate) {
               return false;
           }
           
           try {
            await this.axios({
              method: 'POST',
              url: '/activities_subscriptions',//this endpoint comes from our json-server
              data: this.activity
            })
            this.clearFormAndErrors()
          } catch (e) {
            console.log(e)
          }

       },
        clearForm () {
          Object.assign(this.$data, this.$options.data.apply(this)) // this way we can clear a form completely
        },
        clearErrors () {
          this.reset = true
          this.$validator.reset()// this way we can clear the errors
        },
        clearFormAndErrors () {
          this.clearForm()
          this.clearErrors()
        }
   }
}
</script>
