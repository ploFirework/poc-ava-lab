<script setup lang="ts">
import AvaLoader from '@/components/AvaLoader.vue'
import SelectFESource from '@/components/SelectFESource.vue'
import SelectBESource from '@/components/SelectBESource.vue'
import InputDomainAssistant from '@/components/InputDomainAssistant.vue'
import { ref, computed } from 'vue'

import Fieldset from 'primevue/fieldset'
import Panel from 'primevue/panel'

const FESource = ref('https://fw.tv/ava.html')
const reqPar_backEndApi = ref('fwparam_api_host=https://fireworkapi1.com')
const reqPar_domainAssistantId = ref('')

const requestParams = computed(() => {
  return `?${reqPar_backEndApi.value}&${reqPar_domainAssistantId.value}`
})
</script>

<template>
  <main id="ava-lab">
    <div id="header">
      <Fieldset legend="Front-End Source">
        <SelectFESource v-model="FESource" />
      </Fieldset>
      <Fieldset legend="Back-End API">
        <div class="backendGrid">
          <SelectBESource v-model="reqPar_backEndApi" />
          <InputDomainAssistant v-model="reqPar_domainAssistantId" />
        </div>
      </Fieldset>
    </div>

    <Panel id="avaSettings"></Panel>

    <Panel id="avaLoader">
      <AvaLoader :fe-source="FESource" :request-params="requestParams" />
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
