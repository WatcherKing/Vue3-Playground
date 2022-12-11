<template>
	<nav class="header">
		<router-link :to="'/'" class="header__logo"
			>Tutorials With Bitfumes</router-link
		>
		<div class="header__buttons">
			<router-link
				:to="'/marvel-heroes'"
				active-class="active"
				class="header__buttons-1"
				>Marvel Heroes</router-link
			>
			<router-link
				:to="'/calender'"
				active-class="active"
				class="header__buttons-2"
				>Calender</router-link
			>
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "AppHeader",
});
</script>
