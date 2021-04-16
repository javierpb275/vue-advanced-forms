<template>
    <b-form @submit.prevent="submitActivity" class="mb-5">
        <activity-personal-data :personal_data="activity.personal_data" ></activity-personal-data>
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
import ActivityPersonalData from '../components/ActivityForm/ActivityPersonalData';
import validationMixin from '../mixins/validation';

export default {
    components: {
        ActivityPersonalData
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
   methods: {
       async submitActivity() {
           const validate = await this.$validator.validateAll();
       }
   }
}
</script>
