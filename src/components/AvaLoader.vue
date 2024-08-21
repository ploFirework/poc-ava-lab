<script setup lang="ts">
import { defineProps, computed, ref } from 'vue'

const props = defineProps<{
  feSource: string
  reqParams: Record<string, string>[]
}>()

const previewUrl = computed(() => {
  const reqParamsStr = props.reqParams.reduce((acc, p) => acc + `fwparam_${p.value}&`, '?')

  return `${props.feSource}/ava.html${reqParamsStr} `
})

const iframeRef = ref<HTMLIFrameElement>()
if (iframeRef.value) {
  const iframeDoc = iframeRef.value.contentDocument
  const iframeWindow = iframeRef.value.contentWindow
  //const lang = props.lang

  if (!!iframeDoc && !!iframeWindow) {
    const script = iframeDoc.createElement('script')
    script.src = `${props.feSource}/js/ava.js`
    script.async = true
    iframeDoc.body.appendChild(script)

    script.onload = () => {
      const fwAva = iframeDoc.createElement('fw-ava')
      props.reqParams.forEach((p) => {
        const [key, value] = p.value.split('=')
        fwAva.setAttribute(key, value)
      })

      /*
      fwAva.setAttribute('domain_assistant_id', props.domainAssistantId)
      //fwAva.setAttribute('lang', lang)
      fwAva.setAttribute('headless', 'true')
      //fwAva.setAttribute('feedback_enabled', 'true')
      //fwAva.setAttribute('embedded_in_oto', 'true')
      fwAva.setAttribute('api_host', props.api_host)
      */

      iframeDoc.body.appendChild(fwAva)
      /*
      const interval = setInterval(() => {
        const shadowRoot = fwAva.shadowRoot
        if (shadowRoot) {
          iframeWindow?._fwn.ava.actions.showWidget({
            domain_assistant_id: domainAssistantId
          })
          const modal = iframeDoc.querySelector('fw-ava-modal')
          if (modal) {
            clearInterval(interval)
          }
        }
      }, 1000)
      */
    }
  }
}
</script>

<template>
  {{ previewUrl }}
  <!-- <iframe id="ava-container" :src="previewUrl"></iframe> -->

  <iframe id="ava-container" ref="ifr"></iframe>
</template>

<style scoped>
#ava-container {
  aspect-ratio: 8/16;
  width: 100%;
  height: 90vh;
  border: solid 1px red;
}
</style>
