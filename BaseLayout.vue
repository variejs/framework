<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  computed: {
    layout() {
      let matched = Object.assign([], this.$route.matched);
      console.info(matched);
      let route = matched.reverse().find(route => route.meta.layout);
      console.info(
        `${typeof route === "object" ? route.meta.layout : "public"}-layout`
      );
      return `${
        typeof route === "object" ? route.meta.layout : "public"
      }-layout`;
    }
  }
});
</script>
