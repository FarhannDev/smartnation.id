<script lang="ts" setup>
const props = defineProps({ title: { type: String } })

</script>

<template>
  <h1 class="content-heading__title">{{ title }}</h1>
</template>


<style scoped>
.content-heading__title {
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
</style>

