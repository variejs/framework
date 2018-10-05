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
      let route = matched.reverse().find(route => route.meta.layout);
      return `${
        typeof route === "object" ? route.meta.layout : $config.get('view.defaultLayout')
      }-layout`;
    }
  }
});
</script>
