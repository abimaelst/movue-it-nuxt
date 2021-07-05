<template>
  <div class="flex items-center">
    <ProfileImg />
    <ProfileInfo :current-level="level" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: mapState('Challenges', ['level'])
})
</script>
