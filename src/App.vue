<template>
  <h1>Marvel Heroes</h1>
  <ol>
    <li v-for="(hero, index) in marvelHeroes" :key="index">{{ hero.name }}</li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      marvelHeroes: [{name: 'Thor'},
                     {name: 'Iron-Man'},
                     {name: 'Hulk'}, 
                     {name: 'Captain America'}],
    }
  }
})
</script>
