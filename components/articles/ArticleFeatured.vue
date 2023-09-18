
import { ArticlesArticleButton } from '#build/components';
<template>
  <div class="card border-0 rounded-0 mb-3">

    <NuxtLink :to="`/${postId}`" :aria-label="`Baca Selengkapnya ${title}`">
      <NuxtImg :class="'card-img-top img-fluid rounded article-thumbnail'" :src="featuredImage" :height="253"
        loading="lazy" :alt="title" />
    </NuxtLink>
    <div class="card-body px-0 mx-0">

      <div class="d-flex flex-wrap mb-2">
        <span class="article-timestamp">
          <BootstrapIcon name="clock" class="article-timestamp-icon " /> {{ useTimestamps(timestamp) }}
        </span>
      </div>
      <NuxtLink :to="`/${postId}`" :aria-label="`Baca Selengkapnya ${title}`"
        :class="'card-title text-start  lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
        {{ title }}
      </NuxtLink>

      <div class="card-text text-start lh-base article-desc pt-2" v-html="excerpt"> </div>

      <ArticlesArticleButton :categories="categories" />
    </div>
  </div>
</template>


<style scoped>
.article-title {
  color: #5D5D5D;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  transition: ease-in 300ms;
}

.article-title:hover {
  color: #D71149;
}

.article-desc {
  overflow: hidden;
  color: #888;
  text-align: justify;
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 18px */
}

.article-timestamp-icon {
  font-size: 12px;
}

.article-timestamp {
  color: var(--font-400, #888);

  /* Font/Caption Reguler */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 12px */
}

.article-thumbnail {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 253px;
  opacity: 1;
}
</style>

<script lang="ts" setup>

import { PropType } from "vue"
import { Posts } from "~/utils/data/getInitialData"

const props = defineProps({
  postId: { type: String },
  title: { type: String },
  excerpt: { type: String },
  featuredImage: { type: String },
  categories: { type: Object as PropType<Posts[]> },
  timestamp: { type: String }
})

</script>