<template>
	<div class="slider">
		<div v-for="(slide, index) in slides" class="slider__items" :key="slide">
			<transition name="fade">
				<div v-if="currentSlide == index" :class="slide"></div>
			</transition>
		</div>
		<div class="slider__dots">
			<div class="slider__dots__page">
				<div
					v-for="(slide, index) in slides"
					:key="slide"
					:class="currentSlide == index ? 'bg-blue-grey' : 'bg-primary-light'"
					class="slider__dot"
					@click="makeActive(index)"
				></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "Slider",
	data(): { currentSlide: number; interval: any; slides: string[] } {
		return {
			currentSlide: 1,
			interval: "",
			slides: ["slider__item-1", "slider__item-2", "slider__item-3"],
		};
	},
	methods: {
		makeActive(index: number) {
			this.currentSlide = index;
		},
	},
	mounted() {
		this.interval = setInterval(() => {
			this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
		}, 3000);
	},
	beforeUnmount() {
		clearInterval(this.interval);
	},
});
</script>
