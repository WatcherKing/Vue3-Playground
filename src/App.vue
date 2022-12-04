<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      msg: 'Hello World'
    }
  }
})
</script>
