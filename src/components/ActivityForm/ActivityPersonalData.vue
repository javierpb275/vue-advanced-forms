<template>
    <b-card title="Personal Data" class="mt-3">
        <b-row>
            <b-col>
                <b-form-group label="Name">
                    <b-form-input autocomplete="off"
                    v-model="personal_data.name"
                    v-validate="'required|min:2'"
                    :state="$parent.validateState('name')"
                    name="name" data-vv-as="name"
                    placeholder="Name...">
                    </b-form-input>
<!--$parent: access the parent (component that displays this component) to the validateState() method that we get from the mixins-->
                    <b-form-invalid-feedback>
                        {{errors.first('name')}}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label="Surname">
                    <b-form-input autocomplete="off"
                    v-model="personal_data.surname"
                    v-validate="'required|min:4'"
                    :state="$parent.validateState('surname')"
                    name="surname" data-vv-as="surname"
                    placeholder="Surname...">
                    </b-form-input>
                    <b-form-invalid-feedback>
                        {{errors.first('surname')}}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
export default {
    inject:['$validator'],//inject the instance of vee-validate so I can use it here (access: v-validate, errors...)
    props: {
        personal_data: {
            type: Object,
            required: true
        }
    }
}
</script>
