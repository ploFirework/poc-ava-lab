<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps<{
  domainAssistantId: string
  feSource: string
}>()

const src = computed(() => {
  return (
    props.feSource +
    `?fwparam_api_host=https://fireworkapi1.com&fwparam_treasure_box_enabled=true&fwparam_domain_assistant_id=${props.domainAssistantId}`
  )
})
</script>

<template>
  {{ props.feSource }}
  <br />
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
