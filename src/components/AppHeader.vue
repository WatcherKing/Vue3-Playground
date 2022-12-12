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
			<button class="header__buttons-5">Login</button>
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "AppHeader",
	data() {
		return {
			links: [
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
			],
		};
	},
});
</script>
