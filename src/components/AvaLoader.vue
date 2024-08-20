<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps<{
  feSource: string
  requestParams: string
}>()

const src = computed(() => {
  return props.feSource + props.requestParams
})
</script>

<template>
  {{ src }}
  <iframe id="ava-container" :src="src"></iframe>
</template>

<style scoped>
#ava-container {
  aspect-ratio: 8/16;
  width: 100%;
  height: 90vh;
  border: solid 1px red;
}
</style>
