<script setup lang="ts">
import { defineProps, computed } from 'vue'

const { domainAssistantId } = defineProps<{
  domainAssistantId: string
}>()

const src = computed(() => {
  const apiHost = 'https://zeffo-git-master-firework.vercel.app/ava.html'
  return (
    apiHost +
    `?fwparam_api_host=https://fireworkapi1.com&fwparam_treasure_box_enabled=true&fwparam_domain_assistant_id=${domainAssistantId}`
  )
})
</script>

<template>
  <iframe
    id="ava-container"
    :src="`https://zeffo-git-master-firework.vercel.app/ava.html?fwparam_domain_assistant_id=${domainAssistantId}`"
  ></iframe>
</template>

<style scoped>
#ava-container {
  aspect-ratio: 8/16;
  width: 100%;
  height: 90vh;
  border: solid 1px red;
}
</style>
