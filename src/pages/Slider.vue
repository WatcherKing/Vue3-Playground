<template>
	<div class="slider">
		<h1 class="slider__header">Slider App</h1>
		<div v-for="(slide, index) in slides" class="slider__items" :key="slide">
			<div v-if="currentSlide == index" :class="slide"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "Slider",
	data(): { currentSlide: number; interval: any; slides: string[] } {
		return {
			currentSlide: 0,
			interval: "",
			slides: ["slider__item-1", "slider__item-2", "slider__item-3"],
		};
	},
	mounted() {
		this.interval = setInterval(() => {
			this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
		}, 2000);
	},
	beforeUnmount() {
		clearInterval(this.interval);
	},
});
</script>
