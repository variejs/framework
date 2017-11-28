<style lang="scss">
	.notifications {
		position: fixed;
		right: 10px;
		top: 100px;
		width: 350px;
		z-index: 40;
	}

	.notification {
		border-radius: 2px;
		border: 1px solid red;
		margin-bottom: 5px;
		padding: 5px;

		&.error {
			background-color: red;
		}

		&.success {
			background-color: green;
		}

		&.info {
			background-color: blue;
		}

		&.warning {
			background-color: yellow;
		}

		&-close {
			background-color: transparent;
			font-size: 22px;
			line-height: 14px;
			float: right;
			color: rgba(white, .5);

			&:hover {
				color: #000000;
			}

			&:focus {
				outline: none;
			}
		}
	}

	/* Enter and leave animations can use different */
	/* durations and timing functions.              */
	.notification-animation-enter-active {
		transition: all .3s ease;
	}
	.notification-animation-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.notification-animation-enter, .notification-animation-leave-to
		/* .notification-animation-leave-active below version 2.1.8 */ {
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
	import Vue from 'vue';
	import Notification from './Notification.vue';
	export default Vue.extend({
        components : {
          Notification
        },
		computed : {
          notifications() {
            return this.$store.state.varie.notifications.notifications
          }
        }
	})
</script>
