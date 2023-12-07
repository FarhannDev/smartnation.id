<script lang="ts" setup>
import { categories } from '~/utils/data/getInitialCategoryPostData';

const props = defineProps({ categoryId: { type: Number } })

const category = categories.find(category => category.id === props.categoryId)

</script>


<template>
  <div>
    <div class="d-flex flex-row overflow-auto mx-0 px-0 mb-3">
      <ContentRelatedArticleListsButtonCategory v-for="(cat, index) in categoryId" :key="index" :category-id="cat" />
    </div>
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