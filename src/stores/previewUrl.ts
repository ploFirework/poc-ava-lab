import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePreviewUrlStore = defineStore('previewUrl', () => {
  const previewUrl = ref('')

  function get() {
    return previewUrl.value
  }

  function set(payload: string) {
    previewUrl.value = payload
  }

  return { get, set }
})
