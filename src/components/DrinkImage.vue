<template>
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
</template>

<script setup lang="ts">
const getRandomThumbColor = () => {
  const letters: string = '0123456789ABCDEF'
  let color: string = '#'

  for (let i: number = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return color
}

interface Props {
  src: string
  name?: string
}

const emit = defineEmits(['open-details'])

defineProps<Props>()
</script>
