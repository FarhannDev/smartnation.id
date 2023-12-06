
<script lang="ts" setup>

import { PropType } from "vue"
import { CategoryPostsType } from '~/utils/data/getInitialCategoryPostData';
import { PostsDataType } from "~/utils/data/getInitialPostsData";

defineProps({ categories: { type: Object as PropType<CategoryPostsType> }, posts: { type: Object as PropType<PostsDataType> } })

</script>


<template>
  <div>
    <div class="container pt-5">
      <ContentNewArticleHeading :title="'Artikel'" />
      <div class="row justify-content-start align-items-start g-5 py-3">

        <ContentLatestArticleCategoryListsSingleVerticalColumnCard class="col-xl-8 col-xxl-8 col-lg-12 col-md-12" :posts="posts.filter(post => post.categories.find(category => category === Number(148)))
          .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
          .slice(0, 5)" />

        <ContentRelatedArticleLists v-if="posts" title="Seputar Citiasia Inc"
          class="col-xl-4 col-xxl-4 col-lg-12 col-md-12"
          :posts="posts.filter(post => post.categories.find(category => category === Number(83))).sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 10)" />
      </div>
    </div>

    <div class="container pt-5">
      <div class="row justify-content-arround g-3 py-5">
        <div
          v-for="category in categories.filter(category => category.id === 84 || category.id === 85 || category.id === 86).slice(0, 3)"
          :key="category.id" class="col-xl-4 col-xxl-4 col-lg-6 col-md-12">

          <ContentLatestArticleCategoryHeading :title="category.name" />
          <div class="line-break"></div>
          <ContentLatestArticleCategoryListsThumbnailNumber :categoryId="category.id" class="d-grid pt-3 gap-3" />

        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.line-break {
  width: 100%;
  border-bottom: 1px solid var(--danger-600, #ce2f2f);
}
</style>