
<script lang="ts" setup>

import { PropType } from "vue"
import { PostsDataType } from "~/utils/data/getInitialPostsData";

defineProps({ posts: { type: Object as PropType<PostsDataType> }, title: { type: String, default: '' } })

</script>

<template>
  <div>
    <div class="container" data-aos="fade-up" data-aos-duration="1500">
      <ContentNewArticleHeading :title="title" />
      <div class="row justify-content-start align-content-start g-3 py-3">
        <ArticlesArticleCardBackground :posts="posts.filter(post => post.categories.find(category => category === Number(88) || category === Number(90)))
          .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
          .slice(0, 4)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding-top: 30px;
  width: 100%;
  height: auto;
}
</style>