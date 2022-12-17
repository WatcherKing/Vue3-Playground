<template>
	<div class="heros-app">
		<h1 class="heros-app__title">{{ title }} {{ herosCount }}</h1>

		<ul>
			<li
				class="hero-list"
				v-for="(hero, index) in marvelHeroes"
				:key="hero.name"
			>
				<div>{{ hero.name }}</div>
				<button @click="remove(index)">x</button>
			</li>
		</ul>
		<form class="hero-add" @submit.prevent="addHero">
			<input
				class="hero-add__input"
				type="text"
				v-model.lazy="newHero"
				placeholder="Type Hero name here"
				ref="newHeroRef"
			/>
			<button type="submit">Add hero</button>
		</form>
		<small>Total heros are {{ herosCount }}</small>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "@vue/runtime-core";
import { ref } from "vue";
// Composition API

export default defineComponent({
	setup() {
		// Variables
		const title = "Marvel Heroes";
		const newHero = ref("");
		const newHeroRef = ref<HTMLInputElement | null>(null);

		// Objects
		const marvelHeroes = ref([
			{ name: "Thor" },
			{ name: "Iron-Man" },
			{ name: "Hulk" },
			{ name: "Captain America" },
		]);

		// Functions
		function addHero() {
			if (newHero.value !== "") {
				marvelHeroes.value.push({ name: newHero.value });
				newHero.value = "";
			}
		}
		function remove(index: number) {
			marvelHeroes.value = marvelHeroes.value.filter((hero, i) => i !== index);
		}

		const herosCount = computed(() => {
			return marvelHeroes.value.length;
		});

		onMounted(() => {
			newHeroRef.value?.focus();
		});

		return {
			marvelHeroes,
			newHero,
			newHeroRef,
			title,
			remove,
			addHero,
			herosCount,
		};
	},
	name: "MarvelHeroes",

	// Options API
	// data() {
	// 	return {
	// 		title: "Marvel Heroes",
	// 		newHero: "",
	// 		marvelHeroes: [
	// 			{ name: "Thor" },
	// 			{ name: "Iron-Man" },
	// 			{ name: "Hulk" },
	// 			{ name: "Captain America" },
	// 		],
	// 	};
	// },
	// methods: {
	// 	addHero() {
	// 		if (this.newHero !== "") {
	// 			this.marvelHeroes.push({ name: this.newHero });
	// 			this.newHero = "";
	// 		}
	// 	},
	// 	remove(index: number) {
	// 		this.marvelHeroes = this.marvelHeroes.filter((hero, i) => i !== index);
	// 	},
	// },
	// computed: {
	// 	herosCount(): number {
	// 		return this.marvelHeroes.length;
	// 	},
	// },
});
</script>
