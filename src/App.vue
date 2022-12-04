<template>
  <div>
    {{ msg }}
  </div>
  <div v-if="isShowing" v-html="title"></div>
  <div v-else>Damn Else</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      msg: 'Hello Worlds',
      title: '<h1>Hello World</h1>',
      isShowing: true,
    }
  }
})
</script>
