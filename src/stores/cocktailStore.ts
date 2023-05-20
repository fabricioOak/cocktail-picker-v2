import { ref } from 'vue'
import { defineStore } from 'pinia'
import { cocktailService } from '@/services/cocktail.service'

export const useCocktailStore = defineStore('cocktail', {
  state: () => ({ cocktails: ref([]) }),
  actions: {
    async searchCocktails(name: string) {
      const {data} = await cocktailService.searchCocktails(name)
      return data
    },
    async searchByLetter(letter: string) {
      const {data} = await cocktailService.searchByLetter(letter)
      return data
    },
    async getRandomCocktail() {
      const {data} = await cocktailService.getRandomCocktail()
      return data
    },
    async getCocktailById(id: string) {
      const {data} = await cocktailService.getCocktailById(id)
      return data
    }
  }
})
