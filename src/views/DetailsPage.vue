<template>
  <div>
    <main v-if="!isLoading">
      <h1 class="text-center text-2xl sm:text-4xl font-black mt-10">
        {{ drinks.strDrink }}
      </h1>
      <div
        class="flex flex-col justify-center h-3/4 max-h-full items-center md:flex-col py-8"
      >
        <div
          class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white"
        >
          <svg
            class="w-3.5 h-3.5 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <span>{{ drinks.strCategory }}</span>
        </div>
        <div class="mt-10 flex flex-row items-center col-span-1">
          <div class="relative p-5">
            <div
              class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-200"
            ></div>
            <img
              alt="Cocktail image"
              loading="lazy"
              :src="drinks.strDrinkThumb"
              class="relative scale-100 duration-150 transform h-56 z-20 w-56 lg:h-96 lg:w-96 rounded-full"
            />
          </div>
        </div>

        <div
          class="container items-center max-w-6xl px-5 h-full mt-8 text-center"
        >
          <div
            class="grid w-full grid-cols- gap-4 sm:grid-cols-2 lg:grid-cols-2"
          >
            <div class="flex flex-col items-center justify-center col-span-1">
              <table class="table-auto">
                <thead>
                  <tr>
                    <th class="px-6 py-2 font-bold text-2xl text-pink-500">
                      Ingredients
                    </th>
                    <th class="px-6 py-2 font-bold text-2xl text-pink-500">
                      Measures
                    </th>
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
      <div class="h-96 w-screen flex items-center justify-center text-center">
        <div
          class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
        ></div>
      </div>
    </main>
    <!-- <AlphabetDrinks class="relative bottom-0 mb-10" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';
import { useCocktailStore } from '@/stores/cocktailStore'

const route = useRoute()
const cocktailStore = useCocktailStore()

const drinks = ref<any>([])
const isLoading = ref(false)

const getCocktailById = async () => {
  isLoading.value = true
  await cocktailStore.getCocktailById(route.params.id as string)
  .then((response) => {
    drinks.value = response.drinks[0]
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
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
