<template>
    <b-card title="Personal Data" class="mt-3">
        <b-row>
            <b-col>
                <b-form-group label="Date">
                    <b-form-input type="date" 
                    v-model="activity_type_selection.date"
                    v-validate="'required'"
                    :state="$parent.validateState('date')"
                    name="date" data-vv-as="Participation date"
                    placeholder="Select Date">
                    </b-form-input>
                    <b-form-invalid-feedback>
                        {{errors.first('date')}}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label="Name of activity">
                    <b-form-select value-field="id"
                    text-field="type"
                    v-model="activity_type_selection.type"
                    data-vv-as="Participation date"
                    :options="activity_types"
                    :state="$parent.validateState('activity_name')"
                    name="activity_name" 
                    class="mb-3">
                    </b-form-select>
                    <b-form-invalid-feedback>
                        {{errors.first('date')}}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
export default {
    inject:['$validator'],
    props: {
        activity_type_selection: {
            type: Object,
            required: true
        }
    },
    data() {
       return {
           activity_types: [
               {id: 1, type: 'Football'},
               {id: 2, type: 'Baloncesto'},
               {id: 3, type: 'Tennis'}
           ],
       }
    }
}
</script>