
<script lang="ts" setup>

import { PropType } from "vue"
import { PostsDataType } from "~/utils/data/getInitialPostsData";

defineProps({ posts: { type: Object as PropType<PostsDataType> }, title: { type: String, default: '' } })

</script>


<template>
  <div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000">
      <ContentNewArticleHeading :title="title" />
      <div class="row justify-content-start g-3 pt-3">
        <ContentNewArticleListsSingleColumnCard v-if="posts" :class="'col-lg-6 col-xl-4 col-xxl-4 col-md-12'"
          :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 1)" />
        <ContentNewArticleListsThumbnailCard v-if="posts" :class="'col-lg-6 col-xl-4 col-xxl-4 col-md-12'"
          :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(1, 5)" />
        <ContentRelatedArticleLists v-if="posts" title="Terpopuler" :class="' col-lg-auto col-xl-4 col-xxl-4 col-md-12'"
          :posts="posts.slice(0, 5)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding-top: 30px;
}
</style>