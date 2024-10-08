<script setup lang="ts">
import { defineProps, computed, ref, onUpdated, onMounted } from 'vue'

import { type Layout } from '@/components/SelectLayout.vue'

const props = defineProps<{
  feSource: string
  reqParams: Partial<{
    api_host: string
    domain_assistant_id: string
    layout: Layout
  }>
}>()

const previewUrl = computed(() => {
  const reqParamsStr = Object.entries(props.reqParams).reduce((acc, [key, val]) => {
    if (!!key && !!val) {
      if (key === 'layout') {
        if (val === 'headless') {
          return acc + 'headless=true&'
        } else {
          return acc + `layout=${val}&`
        }
      }

      return acc + `${key}=${val}&`
    } else {
      return acc
    }
  }, '?')

  return `${props.feSource}/ava.html${reqParamsStr} `
})

const iframeRef = ref<HTMLIFrameElement>()
const avaRef = ref<HTMLElement>()

function renderAvaWidget() {
  if (avaRef.value) {
    avaRef.value.parentNode?.removeChild(avaRef.value)
  }

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
        if (avaRef.value) {
          avaRef.value.parentNode?.removeChild(avaRef.value)
        }
        const fwAva = iframeDoc.createElement('fw-ava')
        avaRef.value = fwAva

        Object.entries(props.reqParams).forEach(([key, val]) => {
          if (key === 'layout') {
            if (val === 'headless') {
              fwAva.setAttribute('headless', 'true')
            } else {
              fwAva.setAttribute('layout', val)
            }

            return
          }

          fwAva.setAttribute(key, val)
        })
        avaRef.value.setAttribute('load_origin', 'ava-lab')
        //fwAva.setAttribute('lang', lang)
        iframeDoc.body.appendChild(fwAva)

        if (props.reqParams.layout === 'headless') {
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
  }
}
onMounted(renderAvaWidget)
onUpdated(renderAvaWidget)
</script>

<template>
  <div id="ava-loader">
    <iframe id="ava-container" ref="iframeRef" />
  </div>
</template>

<style scoped>
#ava-loader {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#ava-container {
  background: white;
  flex-grow: 1;
}
</style>
