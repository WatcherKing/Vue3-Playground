<template>
	<nav class="header">
		<router-link :to="'/'" class="header__logo"
			>Tutorials With Bitfumes</router-link
		>
		<div class="header__buttons">
			<router-link
				v-for="link in links"
				:key="link.name"
				:to="link.path"
				active-class="active"
				:class="link.className"
				>{{ link.name }}</router-link
			>
			<button
				v-if="isAuthenticated == true"
				class="header__buttons-5"
				@click="logout"
			>
				Logout
			</button>
			<button
				v-else
				key=""
				class="header__buttons-5"
				@click="$emit('open-login-modal')"
			>
				Login
			</button>
		</div>
	</nav>
</template>

<script lang="ts">
import auth from "@/utils/firebase";
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
	name: "AppHeader",
	setup() {
		const links = ref([
			{
				path: "/marvel-heroes",
				name: "Marvel Heroes",
				className: "header__buttons-1",
			},
			{
				path: "/calender",
				name: "Calender",
				className: "header__buttons-2",
			},
			{
				path: "/markdown",
				name: "Markdown",
				className: "header__buttons-3",
			},
			{
				path: "/slider",
				name: "Carosel",
				className: "header__buttons-4",
			},
			{
				path: "/calculator",
				name: "Calculator",
				className: "header__buttons-1",
			},
		]);

		// Functions
		function logout() {
			const aut = auth.getAuth();
			auth
				.signOut(aut)
				.then(() => {
					// Sign-out successful.
				})
				.catch((error) => {
					// An error happened.
				});
		}

		return {
			links,
			logout,
		};
	},
	props: { isAuthenticated: { type: Boolean, required: true } },
});
</script>
