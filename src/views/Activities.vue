<template>
    <div class="mt-5">

    </div>
</template>

<script>
export default {
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
   }
}
</script>
