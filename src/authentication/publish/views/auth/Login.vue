<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input name="email" label="Email" type="email" v-model="form.email" v-focus>
            <input type="password" name="password" label="Password"  v-model="form.password">
            <div>
                <router-link @click.prevent :to="{ name : 'register' }" class="btn">Create Account</router-link>
                <button :disabed="!form.isValid()">Login</button>
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
        email: this.$parent.authAreaData.email,
        password: this.$parent.authAreaData.password
      }).validation({
        rules: {
          email: "required|email",
          password: "required|min:8"
        }
      })
    };
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", this.form).then(() => {
        this.$router.push({
          name: "dashboard"
        });
      });
    }
  }
});
</script>
