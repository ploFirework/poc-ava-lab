<script setup lang="ts">
import IconField from 'primevue/iconfield'
import InputText from 'primevue/inputtext'
import InputIcon from 'primevue/inputicon'

const domainAssistantId = defineModel()
</script>

<template>
  <div>
    <IconField>
      <InputIcon class="pi pi-user" />
      <InputText v-model="domainAssistantId" placeholder="Domain Assistant Id" class="w-full" />
    </IconField>
  </div>
</template>

<style scoped></style>
