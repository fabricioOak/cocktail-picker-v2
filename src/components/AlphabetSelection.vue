<template>
  <div id="letter-search" class="w-full px-8">
    <h3 class="text-2xl font-bold text-center">Browse Drinks<br /></h3>
    <br />
    <div class="text-center">
      <span v-for="letter in letters" :key="letter">
        <a @click="warpToLettersSearch(letter)" class="text-pink-400 font-bold cursor-pointer hover:text-pink-700 duration-150" >{{letter}}</a> /
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const letters: string[] = []

for (let i = 65; i < 91; i++) {
  letters.push(String.fromCharCode(i))
}

const warpToLettersSearch = (letter: string) => {
  console.log(letter)
  router.push({ name: 'letter-search', params: { letter } })
}

</script>
