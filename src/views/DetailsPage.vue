<template>
  <div>
    <main v-if="!isLoading">
      <h1 class="text-center text-2xl sm:text-4xl font-black mt-10">
        {{ drinks.strDrink }}
      </h1>
      <div class="flex flex-col justify-center h-3/4 max-h-full items-center md:flex-col py-8">
        <div
          class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white"
        >
          <Icon class="text-lg mr-1" icon="material-symbols:star" />
          <span class="mt-1">{{ drinks.strCategory }}</span>
        </div>
        <div class="w-3/4 sm:w-4/12 mt-10">
          <DrinkImage :src="drinks.strDrinkThumb" />
        </div>

        <div class="container items-center max-w-6xl px-5 h-full mt-8 text-center">
          <div class="grid w-full grid-cols- gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div class="flex flex-col items-center justify-center col-span-1">
              <table class="table-auto">
                <thead>
                  <tr>
                    <th class="px-6 py-2 font-bold text-2xl text-pink-500">Ingredients</th>
                    <th class="px-6 py-2 font-bold text-2xl text-pink-500">Measures</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(ingredient, index) in ingredients" :key="index">
                    <td class="p-1 font-semibold text-center">{{ ingredient }}</td>
                    <td class="p-1 font-semibold text-center">{{ measures[index] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex flex-col items-center justify-start col-span-1">
              <div class="mt-3 space-y-2 text-center">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <div>
                    <p class="py-2 text-3xl font-bold">How to prepare:</p>
                    <p class="text-justifytext-lg font-medium">
                      {{ drinks.strInstructions }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main v-else>
      <SpinningAnimation />
    </main>
    <!-- <AlphabetDrinks class="relative bottom-0 mb-10" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCocktailStore } from '@/stores/cocktailStore'
import { Icon } from '@iconify/vue'

import DrinkImage from '@/components/DrinkImage.vue'
import SpinningAnimation from '@/components/SpinningAnimation.vue'

const route = useRoute()
const cocktailStore = useCocktailStore()

const drinks = ref<any>([])
const isLoading = ref(false)

const getCocktailById = async () => {
  isLoading.value = true
  await cocktailStore
    .getCocktailById(route.params.id as string)
    .then((response) => {
      drinks.value = response.drinks[0]
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      isLoading.value = false
    })
}

getCocktailById()

const ingredients = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    const ingredient = drinks.value[`strIngredient${i}`]
    if (ingredient) {
      ingredients.push(ingredient)
    }
  }
  return ingredients
})

const measures = computed(() => {
  const measures = []
  for (let i = 1; i <= 15; i++) {
    const measure = drinks.value[`strMeasure${i}`]
    if (measure) {
      measures.push(measure)
    }
  }
  return measures
})
</script>
