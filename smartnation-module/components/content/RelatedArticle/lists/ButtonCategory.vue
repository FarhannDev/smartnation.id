<script lang="ts" setup>
import { categories } from '~/utils/data/getInitialCategoryPostData';

const props = defineProps({ categoryId: { type: Number } })

const categoriesData = categories.find(category => category.id === props.categoryId)

</script>


<template>
  <div>
    <div class="d-flex flex-row overflow-auto button-container">
      <NuxtLink class="gray-button text-decoration-none" :to="`/article/category/${categoriesData?.slug}`">
        {{ `${categoriesData?.name}` }}</NuxtLink>

    </div>
  </div>
</template>

<style lang="css" scoped>
.button-container {
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(300px);
  scroll-snap-type: y mandatory;
}

.gray-button {
  background-color: #E7E7E7;
  color: #6D6D6D;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 10px;
  cursor: pointer;
  margin: 3px;
  transition: background-color 03s;
  font-family: poppins;
  scroll-snap-align: start;
}

@media (min-width: 1400px) {
  .gray-button {
    font-size: 14px;
  }
}
</style>