<template>
    <b-card title="Basket Form" class="mt-3">
        <b-form-group label="Your basket team">
            <b-form-input
                autocomplete="off"
                v-model="activity_selected_data.team"
                v-validate="'required|min:2'"
                data-vv-as="Team"
                :state="$parent.validateState('team')"
                name="team"
                placeholder="Name of your team..."
            >
            </b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('team') }}
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Team Information">
            <b-form-textarea
                v-validate="'required|min:10'"
                data-vv-as="Team Information"
                :state="$parent.validateState('team_info')"
                name="team_info"
                v-model="activity_selected_data.information"
                :rows="3"
                :max-rows="6"
            >
            </b-form-textarea>
            <b-form-invalid-feedback>
                {{ errors.first('team_info') }}
            </b-form-invalid-feedback>
        </b-form-group>
    </b-card>
</template>

<script>
  export default {
    inject: ['$validator'],
    props: {
      activity_selected_data: {
        type: Object,
        required: true
      }
    }
  }
</script>

