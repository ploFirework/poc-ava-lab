<script setup lang="ts">
import Select from 'primevue/select'

const options = [
  {
    name: 'Production',
    value: 'https://fw.tv'
  },
  {
    name: 'Staging',
    value: 'https://fw-staging.tv'
  },
  {
    name: 'Master',
    value: 'https://zeffo-git-master-firework.vercel.app'
  }
]

// todo: allow vercel domains

const selectedFESource = defineModel()
if (selectedFESource.value === undefined) {
  selectedFESource.value = options[0].value
}
</script>

<template>
  <div>
    <Select
      v-model="selectedFESource"
      :options="options"
      optionLabel="name"
      optionValue="value"
      class="w-full"
    />
  </div>
</template>

<style scoped></style>
