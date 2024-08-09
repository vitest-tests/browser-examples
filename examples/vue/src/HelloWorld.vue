<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  name: string
}>()

const count = ref(1)
</script>

<template>
  <div>
    <h1>Hello {{ name }} x{{ count }}!</h1>
    <button @click="count++">Increment</button>
  </div>
</template>
