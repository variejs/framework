<script>
import Vue from "vue";
export default Vue.extend({
  created() {
    let authAreaData = this.$parent.authAreaData;
    this.$set(this.form, "email", authAreaData.email);
    this.$set(this.form, "password", authAreaData.password);
  },
  watch: {
    "form.email": function(value) {
      this.$store.commit("auth/UPDATE_AUTH_AREA_DATA", {
        email: value
      });
    },
    "form.password": function(value) {
      this.$store.commit("auth/UPDATE_AUTH_AREA_DATA", {
        password: value
      });
    }
  }
});
</script>
