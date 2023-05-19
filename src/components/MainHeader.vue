<template>
  <header class="w-full px-8 text-gray-700 bg-white shadow-md">
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
            class="mx-auto mt-2 text-xl font-black leading-none text-gray-900 select-none"
            >Cocktail Picker<span class="text-pink-600">.</span></span
          >
        </router-link>
      </div>
      <div class="pt-2 relative text-gray-600">
        <input
          class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          v-model="value"
          @keyup.enter="$emit('search-drink')"
        />
        <button
          @click="$emit('search-drink')"
          type="submit"
          class="absolute right-0 top-0 mt-5 mr-4"
        >
          <svg
            class="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {computed} from 'vue'
interface Props {
  modelValue: string;
}
const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue', 'search-drink']);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
