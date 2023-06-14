<template>
  <div v-if="!loading">
    <div v-if="drinks"
      class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl"
    >
      <div class="font-medium text-4xl">
        <h1 class="text-center text-2xl sm:text-4xl font-black mt-10">
          Cocktails with letter {{ $route.params.letter }}
        </h1>
      </div>
      <div class="grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
        <div
          v-for="drink in drinks"
          :key="drink.idDrink"
          class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
        >
          <div class="flex flex-col items-center col-span-1">
            <div class="relative p-5">
              <div
                class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-purple-200"
              ></div>
              <img
                alt="Cocktail image"
                loading="lazy"
                @click="getDetails(drink.idDrink)"
                :src="drink.strDrinkThumb"
                class="relative cursor-pointer hover:scale-100 scale-90 duration-150 transform h-32 z-20 w-32 lg:h-56 lg:w-56 rounded-full"
              />
            </div>
          </div>
          <div
            class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white"
          >
            <span>{{ drink.strCategory }}</span>
          </div>
          <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            <a class="cursor-pointer" @click="getDetails(drink.idDrink)">{{ drink.strDrink }}</a>
          </h2>
          <p class="pt-2 text-sm font-medium">
            Category:
            <a href="#_" class="mr-1 font-bold"> {{ drink.strAlcoholic }}</a>
            | <span class="mx-1">Main ingredient</span> :
            <span class="font-bold mx-1 text-base text-pink-600">{{ drink.strIngredient1 }}</span>
          </p>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="h-96 w-screen flex items-center justify-center text-center flex-col">
        <h1 class="text-2xl font-bold text-center">No cocktails found</h1>
        <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mt-4">
          <router-link to="/">Go back</router-link>
        </button>
      </div>
    </div>

  </div>
  <div v-else>
    <div class="h-96 w-screen flex items-center justify-center text-center">
      <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCocktailStore } from '@/stores/cocktailStore'

const drinks = ref([]) as any
const loading = ref(false)
const cocktailStore = useCocktailStore()
const route = useRoute()
const router = useRouter()

const getDrinkByLetter = () => {
  loading.value = true
  cocktailStore
    .searchByLetter(route.params.letter as string)
    .then((response) => {
      console.log(response)
      drinks.value = response.drinks
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      loading.value = false
    })
}

const getDetails = async (id: string) => {
  router.push({ name: 'details', params: { id: id } })
}

getDrinkByLetter()
</script>
