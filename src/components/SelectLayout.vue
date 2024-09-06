<template>
  <SelectButton v-model="selectedLayout" :options="layoutOptions" aria-labelledby="basic" />
</template>

<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'

export type Layout = 'cta' | 'faq' | 'carousel' | 'headless'

const layoutOptions = ['cta', 'faq', 'carousel', 'headless']

const selectedLayout = defineModel()
if (selectedLayout.value === undefined) {
  selectedLayout.value = layoutOptions[0]
}
</script>

<style scoped></style>
