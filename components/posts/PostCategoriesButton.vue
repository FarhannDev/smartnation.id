<script lang="ts" setup>
import { CategoryPostsType } from '~/utils/data/getInitialCategoryPostData';

const props = defineProps({ categoryId: { type: Number } })

const { data } = await useFetch<CategoryPostsType>('/api/categories')
const categories = data.value?.find(category => category.id === props.categoryId);

</script>


<template>
  <div>
    <NuxtLink class="gray-button text-decoration-none" :to="`/category/${categories?.slug}`">
      {{ categories?.name }}</NuxtLink>

  </div>
</template>

<style lang="css" scoped>
.gray-button {
  background-color: #E7E7E7;
  color: #6D6D6D;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 14px;
  cursor: pointer;
  margin: 3px;
  transition: background-color 03s;
  font-family: poppins;
}
</style>