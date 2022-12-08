<template>
	<div class="calender">
		<h1 class="calender__header">Vue Calender</h1>
		<section class="calender__day">
			<p class="calender__day-each" v-for="day in days" :key="day">{{ day }}</p>
		</section>
		<section class="calender__num-day">
			<p class="calender__num-day-each" v-for="num in 30" :key="num">
				{{ num }}
			</p>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "Calender",
	data() {
		return {
			days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		};
	},
});
</script>
