<template>
	<AppHeader />
	<div class="container">
		<!-- <MarvelHeroes /> -->
		<Calender />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import MarvelHeroes from "@/components/MarvelHeroes.vue";
import Calender from "@/components/Calender.vue";

export default defineComponent({
	name: "App",
	components: {
		AppHeader,
		Calender,
	},
});
</script>
