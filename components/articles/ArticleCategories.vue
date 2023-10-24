<script lang="ts" setup>

import { CategoryPostsType } from '~/utils/data/getInitialCategoryPostData';

// const props = defineProps(['categoryId'])

const props = defineProps({ categoryId: { type: Number } })

const { data: categories } = await useFetch('/api/categories',)

const categoryPostName: globalThis.Ref<CategoryPostsType> = categories.value.find(category => category.id === Number(props.categoryId))


</script>

<template>
  <div class="d-inline">

    <NuxtLink :to="`/articles/category/${categoryPostName?.slug}`" aria-label="Lihat Selengkapnya"
      class="badge text-bg-danger text-white rounded text-decoration-none fw-normal border-0 me-2 mt-3">{{
        categoryPostName?.name }}</NuxtLink>
  </div>
</template>