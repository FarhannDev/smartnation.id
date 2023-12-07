<script lang="ts" setup>

import { PropType } from "vue"
import { PostsDataType } from "~/utils/data/getInitialPostsData";

const props = defineProps({ posts: { type: Object as PropType<PostsDataType> } })

</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="card border-0 rounded-0 mb-3">
      <div class="row justify-content-start align-items-start g-0">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <NuxtLink :to="`/article/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
            <NuxtImg :class="'card-img-top img-fluid rounded mb-3'" :src="post.featured_media" :height="253"
              loading="lazy" :alt="post.title.rendered" />
          </NuxtLink>
        </div>

        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="card-body px-0 mx-0 px-md-2 mx-md-2 ">
            <NuxtLink :to="`/article/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
              :class="'article-title lh-base link-offset-2 link-underline link-underline-opacity-0 '">
              {{ post.title.rendered.length >= 80
                ? `${post.title.rendered.substring(0, 80)}...`
                : post.title.rendered
              }}
            </NuxtLink>

            <div class="d-flex flex-wrap mb-2 pt-1">
              <span class="article-timestamp">
                <BootstrapIcon name="clock" /> {{ useTimestamps(post.date_gmt) }}
              </span>
            </div>

            <div class="article-desc mb-2" v-html="post.excerpt.rendered.length >= 250
              ? `${post.excerpt.rendered.substring(0, 250)}...`
              : post.excerpt.rendered
              "></div>

            <ArticlesArticleCategories v-for="(category, index) in post.categories.slice(0, 3)" :key="index"
              :categoryId="category" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card-body {
  margin-top: -20px;
  position: relative;
}

.article-list-item {
  width: 100%;
  /* height: 510px; */
  /* overflow-y: scroll; */
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
  color: #D71149 !important;
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

.dark-mode .article-timestamp {
  color: #fafafa;
}
</style>

