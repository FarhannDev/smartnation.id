<script lang="ts" setup>

import { PropType } from "vue"
import { PostsDataType } from "~/utils/data/getInitialPostsData";

defineProps({ posts: { type: Object as PropType<PostsDataType> }, title: { type: String, default: '' } })

</script>


<template>
  <div>
    <div class="container" data-aos="fade-up" data-aos-duration="1500">
      <ContentLatestArticleHeading :title="title" />
      <div class="row justify-content-arround g-3">
        <ContentLatestArticleListsSingleColumnCard v-if="posts" :class="'col-xl-6 col-xxl-6 col-lg-12 col-md-auto'"
          :posts="posts.sort((a, b) => a.date_gmt.toString().localeCompare(b.date_gmt.toString())).slice(0, 1)"
          :isBackground="true" />

        <ContentLatestArticleListsCardItem v-if="posts" :class="'col-xl-6 col-xxl-6 col-lg-12 col-md-auto'"
          :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(1, 5)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  background: var(--primary-800, #A60B40);
  padding-top: 30px;
}

.dark-mode * {
  background-color: #262626;
}
</style>