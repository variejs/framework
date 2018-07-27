<template>
    <component :is="layout">
        <router-view/>
    </component>
</template>

<script>
export default {
  computed: {
    layout() {
      let route = Object.assign([], this.$route.matched)
        .reverse()
        .find(route => route.meta.layout);
      return `${
        typeof route === "object" ? route.meta.layout : "public"
      }-layout`;
    }
  }
};
</script>
