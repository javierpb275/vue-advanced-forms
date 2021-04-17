<template>
    <b-card title="Football Form" class="mt-3">
        <b-form-group label="Your Football Team">
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