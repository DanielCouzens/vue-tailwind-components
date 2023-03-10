import { defineStore } from 'pinia'

interface State {
  bgPrimary: string
  bgSecondary: string
  bgTersery: string
}
export const useStylesStore = defineStore('StylesStore', {
  state: (): State => ({
    bgPrimary: '',
    bgSecondary: '',
    bgTersery: '',
  }),

})

