import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDomainAssistantIdStore = defineStore('domainAssistantId', () => {
  const domainAssistantId = ref('')

  function get() {
    return domainAssistantId.value
  }

  function set(payload: string) {
    domainAssistantId.value = payload
  }

  return { get, set }
})
