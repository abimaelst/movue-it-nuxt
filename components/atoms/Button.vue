<template>
  <button
    :class="[
      'button',
      { completed: completed },
      { abandon: abandon },
      { start: start },
      { failed: failed },
      { succeeded: succeeded },
    ]"
    :disabled="hasActive"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    hasActive: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    abandon: {
      type: Boolean,
      default: false,
    },
    start: {
      type: Boolean,
      default: false,
    },
    failed: {
      type: Boolean,
      default: false,
    },
    succeeded: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
