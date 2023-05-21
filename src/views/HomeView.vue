<template>
  <main v-if="!isLoading">
      <h1 class="text-center text-2xl sm:text-4xl font-black mt-10">
        🍹You should try this one🍹
      </h1>
      <div
        class="mt-10 flex flex-col justify-center h-3/4 max-h-full items-center md:flex-row py-8"
      >
        <DrinkThumb :src="drinks.strDrinkThumb" :name="drinks.strDrink" @open-details="getCocktilDetails"/>
        <div
          class="flex flex-col items-center justify-center w-full h-full py-6 pl-10 mb-6 md:mb-0 md:w-1/2"
        >
          <div
            class="flex flex-col items-start justify-center h-full space-y-3 transform md:py-16 md:px-16 md:space-y-5"
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
            <h1 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
              <a class="cursor-pointer">{{
                drinks.strDrink
              }}</a>
            </h1>
            <p class="pt-2 text-sm font-medium">
              Category:
              <a href="#_" class="mr-1 font-bold">
                {{ drinks.strAlcoholic }}</a
              >
              | <span class="mx-1">Main ingredient</span> :
              <span class="font-bold mx-1 text-base text-pink-600">{{
                drinks.strIngredient1
              }}</span>
            </p>
            <div></div>
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
    <AlphabetSelection />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import {useCocktailStore} from '@/stores/cocktailStore'

import DrinkThumb from '@/components/DrinkThumb.vue';
import AlphabetSelection from '@/components/AlphabetSelection.vue'

const router = useRouter()
const isLoading = ref(false)
const drinks = ref({}) as any
const cocktailStore = useCocktailStore()

const fetchCocktails = async () => {
  isLoading.value = true
  await cocktailStore.getRandomCocktail()
  .then((response) => {
    drinks.value = response.drinks[0]
    console.log(response)
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    isLoading.value = false
  })
}

const getCocktilDetails = () => {
  router.push({name: 'details', params: {id: drinks.value.idDrink}})
}

fetchCocktails()
</script>
