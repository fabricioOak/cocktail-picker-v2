<template>
  <div class="flex flex-col items-center justify-center col-span-1">
    <div class="relative p-5">
      <div
        class="absolute z-10 w-full h-full -mt-5 opacity-30 -ml-5 rounded-full rounded-tr-none"
        :style="{ backgroundColor: getRandomThumbColor() }"
      ></div>
      <img
        :alt="name"
        @click="emit('open-details')"
        class="cursor-pointer relative hover:scale-100 scale-95 duration-150 transform z-20 rounded-full"
        :src="src"
      />
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
interface Props {
  src: string
  name: string
}

defineProps<Props>()
const emit = defineEmits(['open-details'])

const getRandomThumbColor = () => {
  const letters: string = '0123456789ABCDEF'
  let color: string = '#'

  for (let i: number = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return color
}
</script>

<style scoped>
img {
  height: 17em;
  width: 17em;
}
</style>
