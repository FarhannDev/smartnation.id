<script lang="ts" setup>
import { categories } from '~/utils/data/getInitialData';

const props = defineProps(['categoryId'])

const categoryPostName = categories.find(category => category.id === Number(props.categoryId))

</script>

<template>
  <div class="d-inline">
    <NuxtLink :to="`/category/${categoryPostName?.slug}`" aria-label="Lihat Selengkapnya"
      class="badge text-bg-danger text-white rounded text-decoration-none fw-normal border-0 me-2 mt-3">{{
        categoryPostName?.name }}</NuxtLink>
  </div>
</template>