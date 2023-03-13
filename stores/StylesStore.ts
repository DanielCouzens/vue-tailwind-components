import { defineStore, createPinia } from 'pinia'

interface State {
  bgPrimary: string
  bgSecondary: string
  bgTersery: string
}

const getLocalStyles= () => {
  const localStyles = localStorage.getItem('localStorageStyles')
  if (localStyles !== null) {
    return JSON.parse(localStyles)
  }
}

const pinia = createPinia()
pinia.use(getLocalStyles)

// export const useStylesStore = defineStore('StylesStore', {
//   state: (): State => ({
//     bgPrimary: '',
//     bgSecondary: '',
//     bgTersery: '',
//   }),
// })
