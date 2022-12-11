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
			/>
			<button type="submit">Add hero</button>
		</form>
		<small>Total heros are {{ herosCount }}</small>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "MarvelHeroes",
	data() {
		return {
			title: "Marvel Heroes",
			newHero: "",
			marvelHeroes: [
				{ name: "Thor" },
				{ name: "Iron-Man" },
				{ name: "Hulk" },
				{ name: "Captain America" },
			],
		};
	},
	methods: {
		addHero() {
			if (this.newHero !== "") {
				this.marvelHeroes.push({ name: this.newHero });
				this.newHero = "";
			}
		},
		remove(index: number) {
			this.marvelHeroes = this.marvelHeroes.filter((hero, i) => i !== index);
		},
	},
	computed: {
		herosCount(): number {
			return this.marvelHeroes.length;
		},
	},
});
</script>
