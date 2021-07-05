<template>
  <section class="flex flex-col flex-1 justify-center items-center py-6 px-10 md:px-16">
    <header class="w-full pb-6 border-b-2 border-background">
      <h2 class="text-xl text-blue font-semibold text-center">
        {{ `Win ${amount} xp`}}
      </h2>
    </header>
    <main class="flex flex-col flex-1 justify-center items-center mt-6">
      <img class="" :src="`icons/${type}.svg`" :alt="type" :style=" { minHeight: '70px' }">
      <h1 class="font-semibold text-3xl text-title mt-6 mb-2">
        Work out
      </h1>
      <p class="text-center text-base leading-6">
        {{ description }}
      </p>
    </main>
    <footer class="flex w-full gap-x-2">
      <Button text="Failed" :failed="true" @click="resetChallenges" />
      <Button text="Completed" :succeeded="true" @click="challengesSucceeded" />
    </footer>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
