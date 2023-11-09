<template>
  <main v-if="!isLoading">
    <h1 class="text-center text-2xl sm:text-4xl font-black mt-10">🍹You should try this one🍹</h1>
    <div class="mt-10 flex flex-col justify-center max-h-full items-center md:flex-row py-8">
      <DrinkThumb
        :src="drinks.strDrinkThumb"
        :name="drinks.strDrink"
        @open-details="getCocktilDetails"
      />
      <div
        class="flex flex-col items-center justify-center w-full h-full pl-10 py-6 mb-6 md:mb-0 md:w-1/4"
      >
        <div
          class="flex flex-col items-start justify-center h-full space-y-3 transform md:py-16 md:px-16 md:space-y-5"
        >
          <div
            class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white"
          >
            <Icon class="text-lg mr-1" icon="material-symbols:star" />
            <span class="mt-1">{{ drinks.strCategory }}</span>
          </div>
          <h1 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
            <a class="cursor-pointer">{{ drinks.strDrink }}</a>
          </h1>
          <p class="pt-2 text-sm font-medium">
            Category:
            <a href="#_" class="mr-1 font-bold"> {{ drinks.strAlcoholic }}</a>
            | <span class="mx-1">Main ingredient</span> :
            <span class="font-bold mx-1 text-base text-pink-600">{{ drinks.strIngredient1 }}</span>
          </p>
          <div></div>
        </div>
      </div>
    </div>
  </main>
  <main v-else>
    <SpinningAnimation />
  </main>
  <AlphabetSelection />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCocktailStore } from '@/stores/cocktailStore'
import { Icon } from '@iconify/vue'

import DrinkThumb from '@/components/DrinkThumb.vue'
import AlphabetSelection from '@/components/AlphabetSelection.vue'
import SpinningAnimation from '@/components/SpinningAnimation.vue'

const router = useRouter()
const isLoading = ref(false)
const drinks = ref({}) as any
const cocktailStore = useCocktailStore()

const fetchCocktails = async () => {
  isLoading.value = true
  await cocktailStore
    .getRandomCocktail()
    .then((response) => {
      drinks.value = response.drinks[0]
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      isLoading.value = false
    })
}

const getCocktilDetails = () => {
  router.push({ name: 'details', params: { id: drinks.value.idDrink } })
}

fetchCocktails()
</script>
