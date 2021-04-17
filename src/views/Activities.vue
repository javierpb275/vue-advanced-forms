<template>
    <b-form @submit.prevent="submitActivity" class="mb-5">
        <activity-personal-data :personal_data="activity.personal_data" ></activity-personal-data>
        <activity-type-selection :activity_type_selection="activity.activity_type_selection"></activity-type-selection>
        <component :is="activityComponent"
        :activity_selected_data="activity.activity_selected_data">
        </component>
        <b-row>
            <b-col>
                <!--this runs submitActivity() since it is type submit-->
                <b-btn variant="primary" type="submit">
                    Submit
                </b-btn>
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
           const validate = await this.$validator.validateAll();
       }
   }
}
</script>
