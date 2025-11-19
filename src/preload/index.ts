import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('Context isolation is not enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // todo
  })
} catch (error) {
  console.error(error)
  throw error
}
