<script setup lang="ts">
import { defineProps, computed, ref, onUpdated } from 'vue'

const props = defineProps<{
  feSource: string
  reqParams: Record<string, string>
}>()

const previewUrl = computed(() => {
  const reqParamsStr = Object.entries(props.reqParams).reduce((acc, [key, val]) => {
    if (!!key && !!val) {
      return acc + `${key}=${val}&`
    } else {
      return acc
    }
  }, '?')

  return `${props.feSource}/ava.html${reqParamsStr} `
})

const iframeRef = ref<HTMLIFrameElement>()
onUpdated(() => {
  if (iframeRef.value) {
    console.log('iframeRef.value', iframeRef.value)
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
        Object.entries(props.reqParams).forEach(([key, val]) => {
          fwAva.setAttribute(key, val)
        })
        fwAva.setAttribute('headless', 'true')
        //fwAva.setAttribute('lang', lang)

        iframeDoc.body.appendChild(fwAva)
        const interval = setInterval(() => {
          const shadowRoot = fwAva.shadowRoot
          if (shadowRoot) {
            // @ts-ignore
            iframeWindow?._fwn.ava.actions.showWidget({
              domain_assistant_id: props.reqParams.domain_assistant_id
            })
            const modal = iframeDoc.querySelector('fw-ava-modal')
            if (modal) {
              clearInterval(interval)
            }
          }
        }, 1000)
      }
    }
  }
})
</script>

<template>
  {{ previewUrl }}
  <!-- <iframe id="ava-container" :src="previewUrl"></iframe> -->

  <iframe id="ava-container" ref="iframeRef" :key="previewUrl" />
</template>

<style scoped>
#ava-container {
  aspect-ratio: 8/16;
  width: 100%;
  height: 90vh;
}
</style>
