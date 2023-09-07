<template>
  <h1 class="heading-title">{{ title }}</h1>
</template>

<script lang="ts" setup>
const props = defineProps(['title'])

</script>

<style scoped>
.heading-title {
  color: #CE2F2F;
  font-family: Poppins;
  font-size: 20px !important;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
</style>