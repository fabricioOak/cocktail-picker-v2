<template>
  <div class="flex flex-col items-center justify-center sm:w-5/12">
    <div class="w-3/4 sm:w-1/2">
      <DrinkImage :name="name" :src="src" @open-details="emit('open-details')" />
    </div>
    <div class="mt-3 space-y-2 text-center">
      <div
        @click="emit('open-details')"
        class="cursor-pointer space-y-1 text-lg font-medium leading-6"
      >
        <h3>{{ name }}</h3>
      </div>
      <div class="relative flex items-center justify-center space-x-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DrinkImage from './DrinkImage.vue'

interface Props {
  src: string
  name: string
}

defineProps<Props>()
const emit = defineEmits(['open-details'])
</script>

<style scoped>
img {
  height: 17em;
  width: 17em;
}
</style>
