<template>
  <div class="hstack g-2 pt-2">
    <NuxtLink :to="`/${category}`" aria-label="Lihat Selengkapnya" v-for="category in categories" :key="category"
      class="badge text-bg-danger text-white rounded-pill text-decoration-none me-2">{{
        category }}</NuxtLink>

  </div>
</template>


<script lang="ts" setup>

const props = defineProps({ categories: { type: String } })

</script>