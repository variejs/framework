<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>
<script>
    export default {
      computed: {
        layout() {
          let matched = Object.assign([], this.$route.matched);
          let route = matched
          .reverse()
          .find((route) => route.meta.layout);
          return `${
            typeof route === "object" ? route.meta.layout : "public"
            }-layout`;
        },
      },
    }
</script>