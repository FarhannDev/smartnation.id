<template>
  <h1>{{ title }}
  </h1>
</template>


<style scoped>
h1 {
  color: #D71149;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: start;
}
.latest-newsfeed__title[data-v-02281a80] {
  color: var(--font-600, #5D5D5D) !important;
  font-weight: 600 !important;
}

.latest-newsfeed__title[data-v-02281a80] {
  color: var(--font-600, #5D5D5D) !important;
  font-weight: 600 !important;
}
</style>

<script lang="ts" setup>
const props = defineProps({ title: { type: String } })
</script>