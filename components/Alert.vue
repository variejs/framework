<template>
  <transition name="fade">
    <div class="alert" :class="alert.severity">
      <button @click="close(alert)" class="alert-close" type="button">
        <span>&times;</span>
      </button>
      <h4 class="alert-heading" v-if="alert.title">{{ alert.title }}</h4>
      <div class="alert-text" v-html="alert.message"></div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    alert: Object
  },
  created() {
    setTimeout(() => {
      if (this.alert.duration && this.alert.duration > 0) {
        this.close();
      }
    }, this.alert.duration);
  },
  methods: {
    close() {
      this.$store.dispatch("varie/alerts/remove", this.alert);
    }
  }
});
</script>
