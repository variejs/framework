<style lang="scss">
.notifications {
  position: fixed;
  right: 10px;
  top: 66px;
  width: 350px;
  z-index: 40;
}

.notification {
  border-radius: 6px;
  box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  padding: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;

  &.error {
    background-color: #c1666b;
  }

  &.success {
    background-color: #4dc0b5;
  }

  &.info {
    background-color: #4281a4;
  }

  &.warning {
    background-color: #d4b483;
  }

  &-heading {
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    margin: 0 0 4px;
  }

  &-text {
    font-weight: bold;
    font-size: 14px;
  }

  &-close {
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    font-size: 26px;
    line-height: 26px;

    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }

    &:focus {
      outline: none;
    }
  }
}

.notification-animation-enter-active {
  transition: all 0.3s ease;
}
.notification-animation-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.notification-animation-enter,
.notification-animation-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<template>
	<div class="notifications">
		<transition-group name="notification-animation">
			<notification :notification="notification" :key="notification.id" v-for="notification in notifications"></notification>
		</transition-group>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Notification from "./components/Notification.vue";
export default Vue.extend({
  components: {
    Notification
  },
  computed: {
    notifications() {
      return this.$store.state.varie.notifications.notifications;
    }
  }
});
</script>
