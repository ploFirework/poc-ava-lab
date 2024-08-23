<script setup lang="ts">
import AvaLoader from '@/components/AvaLoader.vue'
import SelectFESource from '@/components/SelectFESource.vue'
import SelectBESource from '@/components/SelectBESource.vue'
import InputDomainAssistant from '@/components/InputDomainAssistant.vue'
import { ref, computed } from 'vue'

import Fieldset from 'primevue/fieldset'
import Panel from 'primevue/panel'

const feSource = ref('https://fw.tv')
const beApiAsParam = ref('https://fireworkapi1.com')
const domainAssistantId = ref('')
const domainAssistantIdAsParam = computed(() => {
  return domainAssistantId.value ? `domain_assistant_id=${domainAssistantId.value}` : ''
})

const reqParams = computed(() => ({
  api_host: beApiAsParam.value,
  domain_assistant_id: domainAssistantId.value || ''
}))
</script>

<template>
  <main id="ava-lab">
    <div id="header">
      <Fieldset legend="Front-End Source">
        <SelectFESource v-model="feSource" />
      </Fieldset>
      <Fieldset legend="Back-End API">
        <div class="backendGrid">
          <SelectBESource v-model="beApiAsParam" />
          <InputDomainAssistant v-model="domainAssistantId" />
        </div>
      </Fieldset>
    </div>

    <Panel id="avaSettings"></Panel>

    <Panel id="avaLoader">
      <AvaLoader :fe-source="feSource" :reqParams="reqParams" />
    </Panel>
  </main>
</template>

<style scoped>
#ava-lab {
  display: grid;
  grid-template: 100px / 25% auto;
  grid-gap: 10px;
  grid-template-areas:
    'header header'
    'avaSettings avaLoader';

  #header {
    grid-area: header;

    display: grid;
    grid-template: 100px / 1fr 2fr;
    grid-gap: 10px;
    align-items: center;

    .backendGrid {
      display: grid;
      grid-template: 1fr / 1fr 1fr;
      grid-gap: 10px;
    }
  }

  #avaSettings {
    grid-area: avaSettings;
  }

  #avaLoader {
    grid-area: avaLoader;
  }
}
</style>
