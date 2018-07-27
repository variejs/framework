<template>
    <transition name="fade">
        <div class="notification" :class="notification.severity">
            <button @click="close(notification)" class="notification-close" type="button">
                <span>&times;</span>
            </button>
            <h4 class="notification-heading" v-if="notification.title">{{notification.title}}</h4>
            <div class="notification-text" v-html="notification.message"></div>
        </div>
    </transition>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    notification: Object
  },
  created() {
    setTimeout(() => {
      if (this.notification.duration && this.notification.duration > 0) {
        this.close();
      }
    }, this.notification.duration);
  },
  methods: {
    close() {
      this.$store.dispatch("varie/notifications/remove", this.notification);
    }
  }
});
</script>
