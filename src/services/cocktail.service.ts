import { api } from '@/plugins/axios'

export const cocktailService = {
  searchCocktails: async (name: string) => await api.get(`/search.php?s=${name}`),
  searchByLetter: async (letter: string) => await api.get(`/search.php?f=${letter}`),
  getRandomCocktail: async () => await api.get('/random.php'),
  getCocktailById: async (id: string) => await api.get(`/lookup.php?i=${id}`),
}
