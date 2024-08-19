<script setup lang="ts">
import AvaLoader from '@/components/AvaLoader.vue'
import SelectFESource from '@/components/SelectFESource.vue'
import { ref } from 'vue'

import Panel from 'primevue/panel'
import Select from 'primevue/select'

const domainAssistantId = ref('5qqyw5')

const dais = [
  {
    id: '5qqyw5',
    name: 'Spikeball'
  },
  {
    id: 'AvG6Xg',
    name: 'default'
  }
]

const FESource = ref('https://fw.tv/ava.html')
function handleFESourceChange(value: string) {
  console.log('FESourceChange', value)
}
</script>

<template>
  <main id="ava-lab">
    <Panel id="header">
      <SelectFESource v-model="FESource" />

      <Select
        v-model="domainAssistantId"
        editable
        :options="dais"
        optionLabel="name"
        optionValue="id"
        placeholder="Select a domain assistant"
        class="w-full md:w-56"
      />
    </Panel>

    <Panel id="avaSettings"></Panel>

    <Panel id="avaLoader">
      <AvaLoader :fe-source="FESource" :domain-assistant-id="domainAssistantId" />
    </Panel>
  </main>
</template>

<style scoped>
#ava-lab {
  display: grid;
  grid-template: 100px / 30% auto;
  grid-template-areas:
    'header header'
    'avaSettings avaLoader';

  #header {
    grid-area: header;
  }

  #avaSettings {
    grid-area: avaSettings;
  }

  #avaLoader {
    grid-area: avaLoader;
  }
}
</style>
