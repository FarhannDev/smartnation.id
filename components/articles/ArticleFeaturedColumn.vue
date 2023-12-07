
<template>
  <div class="card border-0 rounded-0 mb-3">
    <div class="row justify-content-start align-items-start g-0">
      <div class="col-lg-6">
        <NuxtLink :to="`/article/${postId}`" :aria-label="`Baca Selengkapnya ${title}`">
          <NuxtImg :class="'card-img-top img-fluid rounded'" :src="featuredImage" :height="253" loading="lazy"
            :alt="title" />
        </NuxtLink>
      </div>

      <div class="col-lg-6">
        <div class="card-body px-0 mx-0 px-md-2 mx-md-2 ">
          <NuxtLink :to="`/article/${postId}`" :aria-label="`Baca Selengkapnya ${title}`"
            :class="'article-title lh-base link-offset-2 link-underline link-underline-opacity-0 '">
            {{ title.length >= 80
              ? `${title.substring(0, 80)}...`
              : title
            }}
          </NuxtLink>

          <div class="d-flex flex-wrap mb-2 pt-1">
            <span class="article-timestamp">
              <BootstrapIcon name="clock" /> {{ useTimestamps(timestamp) }}
            </span>
          </div>

          <div class="article-desc mb-3" v-html="excerpt.length >= 250
            ? `${excerpt.substring(0, 250)}...`
            : excerpt
            "></div>

          <ArticlesArticleButton :categories="categories" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 992px) {
  .card-body {
    margin-top: -20px;
  }

}

.article-title {
  color: #5D5D5D;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  transition: ease-in 300ms;
  text-decoration: none;
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
  text-decoration: none;
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

/* 
  color mode:dark-mode 
*/
.dark-mode .card {
  background-color: #262626;
}

.dark-mode .article-title {
  color: #fafafa;
}

.dark-mode .article-desc {
  color: rgba(255, 255, 255, 0.80);
}
</style>

<script lang="ts" setup>

import { PropType } from "vue"

const props = defineProps({
  postId: { type: String },
  title: { type: String },
  excerpt: { type: String },
  featuredImage: { type: String },
  categories: { type: Array<String> },
  timestamp: { type: String }
})

</script>