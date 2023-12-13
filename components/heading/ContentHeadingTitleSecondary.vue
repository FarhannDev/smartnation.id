<script lang="ts" setup>
const props = defineProps({ title: { type: String } })

</script>

<template>
  <h1 class="content-heading__title">{{ title }}</h1>
</template>


<style scoped>
.content-heading__title {
  color: var(--font-600, #5D5D5D);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 24px */
}

.dark-mode .content-heading__title {
  color: #fff;
}
</style>

