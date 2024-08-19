<script setup lang="ts">
import { ref } from 'vue'

import Select from 'primevue/select'

const options = [
  {
    name: 'Production',
    value: 'https://fw.tv/ava.html'
  },
  {
    name: 'Staging',
    value: 'https://fw-staging.tv/ava.html'
  },
  {
    name: 'Master',
    value: 'https://zeffo-git-master-firework.vercel.app/ava.html'
  }
]

const selectedFESource = defineModel()
function handleSelectFESourceChange({ value }: { value: string }) {
  selectedFESource.value = value
}
</script>

<template>
  Front End Source
  <Select
    v-model="selectedFESource"
    editable
    :options="options"
    optionLabel="name"
    optionValue="value"
    class="w-full md:w-56"
  />
</template>

<style scoped></style>
