<template>
  <h1  >{{ title }} {{ herosCount }}</h1>
  <h2>{{ fullName }}</h2>
  <p>{{ randC }}</p>
  <p>{{ randC }}</p>
  <p>{{ randC }}</p>
  <p>{{ randM() }}</p>
  <p>{{ randM() }}</p>
  <p>{{ randM() }}</p>

  <ul>
    <li v-for="(hero, index) in marvelHeroes" :key="index">{{ hero.name }}</li>
  </ul>
  <form @submit.prevent="addHero">
    <input type="text" v-model.lazy="newHero" placeholder="Type Hero name here">
    <button type="submit">Add hero</button>
  </form>
  <button @click="setFullName">Change Name</button>
  <small>Total heros are {{ herosCount }}</small>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      title: "Marvel Hero",
      newHero: "",
      fname: "John",
      lname: "Doe",
      marvelHeroes: [{name: 'Thor'},
                     {name: 'Iron-Man'},
                     {name: 'Hulk'}, 
                     {name: 'Captain America'}],
    }
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.marvelHeroes.push({name: this.newHero})
        this.newHero = ""
      }
    },
    randM(): number {
      return Math.random()
    },
    setFullName() {
      this.fullName = 'King David'
    }
  },
  computed: {
    herosCount(): number {
      return this.marvelHeroes.length
    },
    randC(): number {
      return this.herosCount + Math.random()
    },
    fullName: {
      get(): string {
        return this.fname + " " + this.lname
      },
      set(fullName: string) {
        const names = fullName.split(" ")
        this.fname = names[0]
        this.lname = names[1]

      }
    }
  }
})
</script>
