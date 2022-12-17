<template>
	<app-header
		:isAuthenticated="isAuthenticated"
		@open-login-modal="isLoginOpen = true"
	/>
	<div class="container">
		<router-view></router-view>
	</div>
	<teleport to="body">
		<login-modal @close-login="isLoginOpen = false" v-if="isLoginOpen" />
	</teleport>
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import LoginModal from "@/components/LoginModal.vue";
import { defineComponent } from "@vue/runtime-core";
import auth from "@/utils/firebase";

export default defineComponent({
	name: "AppLayout",
	components: { AppHeader, LoginModal },
	data() {
		return {
			isLoginOpen: false,
			isAuthenticated: false,
			authUser: {},
		};
	},
	mounted() {
		const aut = auth.getAuth();
		auth.onAuthStateChanged(aut, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				this.isAuthenticated = true;
				this.authUser = user;
			} else {
				// User is signed out
				this.isAuthenticated = false;
				this.authUser = {};
			}
		});
	},
});
</script>
