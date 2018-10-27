<template>
    <div>
        <h1>Create Account</h1>
        <p>Fill out the following fields to create your account.</p>

        <form @submit.prevent="submit">
            <input name="name" label="Name" v-model="form.name">
            <input name="email" label="Email" type="email" v-model="form.email">
            <input name="password" label="Password" type="password" v-model="form.password">
            <input name="confirm-password" label="Confirm Password" type="password" v-model="form.passwordConfirmed">
            <div>
                <router-link :to="{ name : 'login' }" class="btn">Cancel</router-link>
                <button :disabed="!form.isValid()">Sign Up</button>
            </div>
            <div>
                <router-link :to="{ name : 'forgot-password' }" >Forgot password?</router-link>
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
        name: null,
        email: this.$parent.authAreaData.email,
        password: this.$parent.authAreaData.password,
        passwordConfirmed: null
      }).validation({
        rules: {
          name: "required",
          email: "required|email",
          password: "required|min:8|confirmed"
        }
      })
    };
  },
  methods: {
    register() {
      this.$store.dispatch("auth/register", this.form).then(() => {
        this.$router.push({
          name: "dashboard"
        });
      });
    }
  }
});
</script>
