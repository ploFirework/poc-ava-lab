<script setup lang="ts">
import AvaLoader from '@/components/AvaLoader.vue'
import SelectFESource from '@/components/SelectFESource.vue'
import SelectBESource from '@/components/SelectBESource.vue'
import SelectLayout, { type Layout } from '@/components/SelectLayout.vue'
import InputDomainAssistant from '@/components/InputDomainAssistant.vue'
import { ref, computed } from 'vue'

import Fieldset from 'primevue/fieldset'
import Panel from 'primevue/panel'

const feSource = ref('https://fw-staging.tv')
const beApiSource = ref('https://staging.fireworktv.com')
const domainAssistantId = ref('gKlqNv')
const layout = ref<Layout>('cta')

const reqParams = computed(() => ({
  api_host: beApiSource.value,
  domain_assistant_id: domainAssistantId.value || '',
  layout: layout.value
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
          <SelectBESource v-model="beApiSource" />
          <InputDomainAssistant v-model="domainAssistantId" />
        </div>
      </Fieldset>
      <SelectLayout v-model="layout" />
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
    grid-template: 100px / 1fr 2fr 1fr;
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
