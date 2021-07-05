<template>
  <div class="flex flex-col w-full">
      <strong class="text-title text-2xl">
        Abimael Tavares
      </strong>
        <p class="flex items-center">
          <img src="icons/level.svg" alt="Ìcone simbolizando level" class="mr-2">
          <span class="text-base"> {{ `Level ${currentLevel}` }}</span>
        </p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    currentLevel: {
    type: Number,
    required: true
    }
  }
})
</script>
