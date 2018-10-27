<template>
    <div>
        <h1>Reset Password</h1>

        <form @submit.prevent="resetPassword">
            <input name="email" label="Email" type="email" v-model="form.email">
            <input name="password" label="Password" type="password" v-model="form.password">
            <input name="confirm-password" label="Confirm Password" type="password" v-model="form.passwordConfirmed">
            <div>
                <router-link :to="{ name : 'login' }" class="btn">Cancel</router-link>
                <button :disabed="!form.isValid()">Reset Password</button>
            </div>
        </form>
    </div>
</template>


<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      form: this.createForm({
        email: null,
        password: null,
        passwordConfirmed: null
      }).validation({
        rules: {
          email: "required|email",
          password: "required|min:8|confirmed"
        }
      })
    };
  },
  methods: {
    resetPassword() {
      this.$store
        .dispatch("auth/resetPassword", {
          form: this.form,
          token: Object.keys(this.$route.query)[0]
        })
        .then(() => {
          this.$router.push({
            name: "dashboard"
          });
        });
    }
  }
});
</script>
