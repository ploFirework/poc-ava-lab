<script setup lang="ts">
import Select from 'primevue/select'

const options = [
  {
    name: 'Production',
    value: 'api_host=https://fireworkapi1.com'
  },
  {
    name: 'Staging',
    value: 'api_host=https://staging.fireworktv.com'
  },
  {
    name: 'Dev',
    value: 'api_host=https://dev.fireworktv.com'
  }
]

const selectedBESource = defineModel()
</script>

<template>
  <div>
    <Select
      v-model="selectedBESource"
      :options="options"
      optionLabel="name"
      optionValue="value"
      class="w-full"
    />
  </div>
</template>

<style scoped></style>
