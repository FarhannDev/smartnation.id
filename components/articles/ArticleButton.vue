
<script lang="ts" setup>

const props = defineProps({ categories: { type: Array<String | Number> } })

</script>

<template>
  <div class="hstack g-2 pt-2">
    <NuxtLink :to="`/category/${category}`" aria-label="Lihat Selengkapnya" v-for="(category, index) in categories"
      :key="index" class="badge text-bg-danger text-white rounded text-decoration-none fw-normal border-0 me-2">{{
        category }}</NuxtLink>

  </div>
</template>

