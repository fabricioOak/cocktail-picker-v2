<template>
  <header class="w-full px-8 text-gray-700 bg-white shadow-md dark:bg-gray-900 dark:text-gray-200">
    <div
      class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"
    >
      <div class="relative items-center flex flex-col md:flex-row">
        <img class="h-12" src="@/assets/images/logo.svg" alt="Site logo" />
        <router-link
          :to="{ name: 'home' }"
          href="#_"
          class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
        >
          <span
            class="mx-auto mt-2 text-xl font-black leading-none text-gray-900 select-none dark:text-gray-200"
            >Cocktail Picker<span class="text-pink-600">.</span></span
          >
        </router-link>
      </div>
      <div class="flex items-center">
        <div class="relative text-gray-600">
          <input
            class="border-2 border-gray-300 bg-white dark:bg-transparent dark:text-gray-200 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            v-model="cocktailsValue"
            @keyup.enter="searchCocktail"
          />
          <button
            @click="searchCocktail"
            type="submit"
            class="absolute right-0 top-0 mt-3 mr-3 text-xl"
          >
            <Icon class="dark:text-gray-200" icon="mdi:magnify" />
          </button>
        </div>
        <div @click="toggleDark(!isDark)" class="text-2xl ml-3 cursor-pointer">
          <Icon v-if="isDark" icon="material-symbols:dark-mode" />
          <Icon v-else icon="material-symbols:clear-day-rounded" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const cocktailsValue = ref('')

const router = useRouter()

const searchCocktail = async () => {
  await router.push({ name: 'search', params: { search: cocktailsValue.value } })
  cocktailsValue.value = ''
}
</script>
