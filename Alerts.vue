<style lang="scss">
.alerts {
  position: fixed;
  right: 10px;
  top: 66px;
  width: 350px;
  z-index: 40;
}

.alert {
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

.alert-animation-enter-active {
  transition: all 0.3s ease;
}
.alert-animation-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.alert-animation-enter,
.alert-animation-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<template>
	<div class="alerts">
		<transition-group name="alert-animation">
			<alert :alert="alert" :key="alert.id" v-for="alert in alerts"></alert>
		</transition-group>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import alert from "./components/Alert.vue";
export default Vue.extend({
  components: {
    alert
  },
  computed: {
    alerts() {
      return this.$store.state.varie.alerts.alerts;
    }
  }
});
</script>
