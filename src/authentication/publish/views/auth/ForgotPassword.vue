<template>
    <div>
        <h1>Forgot Password</h1>
        <form @submit.prevent="requestResetPassword">
            <input type="email" label="Email" name="email" v-model="form.email">
            <div>
                <router-link :to="{ name : 'login' }" class="btn">Cancel</router-link>
                <button type="submit" :disabled="!form.isValid()">Reset Password</button>
            </div>
        </form>
    </div>
</template>

<script>
import Vue from "vue";

import ShareAccountInfoMixin from "./mixins/ShareAccountInfoMixin";
export default Vue.extend({
  mixins: [ShareAccountInfoMixin],
  data() {
    return {
      form: this.createForm({
        email: null
      }).validation({
        rules: {
          email: "required|email"
        }
      })
    };
  },
  methods: {
    requestResetPassword() {
      this.$store
        .dispatch("auth/forgotPasswordRequest", this.form)
        .then(() => {});
      this.$router.push({
        name: "login"
      });
    }
  }
});
</script>
