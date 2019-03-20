<template>
  <component :is="layout"> <router-view></router-view> </component>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  $inject: ["ConfigService"],
  computed: {
    layout() {
      let matched = Object.assign([], this.$route.matched);
      let route = matched.reverse().find((route) => route.meta.layout);
      return `${
        typeof route === "object"
          ? route.meta.layout
          : this.configService.get("view.defaultLayout", "public")
      }-layout`;
    },
  },
});
</script>
