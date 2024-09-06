<template>
  <a :href="previewUrl" :title="previewUrl">
    <i class="pi pi-share-alt" />
  </a>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

import { type Layout } from '@/components/SelectLayout.vue'

const props = defineProps<{
  feSource: string
  reqParams: Partial<{
    api_host: string
    domain_assistant_id: string
    layout: Layout
  }>
}>()

const previewUrl = computed(() => {
  const reqParamsStr = Object.entries(props.reqParams).reduce((acc, [key, val]) => {
    if (!!key && !!val) {
      if (key === 'layout') {
        if (val === 'headless') {
          return acc + 'headless=true&'
        } else {
          return acc + `layout=${val}&`
        }
      }

      return acc + `${key}=${val}&`
    } else {
      return acc
    }
  }, '?')

  return `${props.feSource}/ava.html${reqParamsStr} `
})
</script>

<style scoped>
i {
  font-size: 1.5rem;
}
</style>
