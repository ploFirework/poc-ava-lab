<script setup lang="ts">
import AvaLoader from '@/components/AvaLoader.vue'
import SelectFESource from '@/components/SelectFESource.vue'
import SelectBESource from '@/components/SelectBESource.vue'
import SelectLayout, { type Layout } from '@/components/SelectLayout.vue'
import CopyUrlButton from '@/components/CopyUrlButton.vue'
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
    </div>

    <Panel id="avaSettings"></Panel>

    <div id="avaLoaderContainer">
      <SelectLayout v-model="layout" />
      <CopyUrlButton :fe-source="feSource" :reqParams="reqParams" class="CopyUrlButton" />
      <AvaLoader :fe-source="feSource" :reqParams="reqParams" class="AvaLoader" />
    </div>

    <Panel id="avaLogs"></Panel>
  </main>
</template>

<style scoped>
#ava-lab {
  height: 98%;
  display: grid;
  grid-template: 100px / 1fr 2fr 1fr;
  grid-gap: 1rem;
  grid-template-areas:
    'header header header'
    'avaSettings avaLoader avaLogs';

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

  #avaLoaderContainer {
    grid-area: avaLoader;

    display: grid;
    grid-template: auto 1fr / 1fr 1fr;
    justify-items: start;
    align-items: center;

    .CopyUrlButton {
      justify-self: end;
    }

    .AvaLoader {
      grid-column: 1 / 3;
    }
  }

  #avaLogs {
    grid-area: avaLogs;
  }
}
</style>
