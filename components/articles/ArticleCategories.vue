<script lang="ts" setup>

import { categories } from '~/utils/data/getInitialCategoryPostData';

const props = defineProps({ categoryId: { type: Number } })

const category = categories.find(category => category.id === props.categoryId)


</script>

<template>
  <div class="d-inline">

    <NuxtLink :to="`/category/${category?.slug}`" aria-label="Lihat Selengkapnya" class=" article-button__category me-2">
      {{
        category?.name }}</NuxtLink>
  </div>
</template>


<style lang="css" scoped >
.article-button__category {
  position: relative;
  bottom: 0;
  border-radius: 4px;
  background: var(--600, #D71149) !important;
  color: #FFF;
  padding: 4px 8px;
  /* Font/Caption Reguler */
  font-family: Poppins !important;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-decoration: none;
}
</style>