
<script lang="ts" setup>
import { PropType } from "vue"
import { PostsDataType } from "~/utils/data/getInitialPostsData";

defineProps({ posts: { type: Object as PropType<PostsDataType> } })

</script>

<template>
  <div>
    <ul class="list-group list-group-flush">
      <li v-for="post in posts" :key="post.id" class="list-group-item mx-lg-2 px-lg-2 mx-0 px-0">
        <div class="vstack gap-3">
          <div class="d-flex justify-content-between">
            <div class="mx-0 mx-lg-2">
              <span class="article-info-timestamps ">
                <BootstrapIcon name="clock" /> {{ useTimestamps(post.date_gmt) }}
              </span>
              <NuxtLink :to="`/article/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
                :class="'article-title link-offset-2  text-wrap d-block link-underline-opacity-0 mb-2 '">
                {{ post.title.rendered.length > 80 ? `${post.title.rendered.substring(0, 80)}...`
                  : post.title.rendered
                }}

              </NuxtLink>

              <LazyButtonArticleCategory v-for="(category, index) in post.categories.slice(0, 3)" :key="index"
                :categoryId="category" />
            </div>

            <NuxtLink :to="`/article/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
              <NuxtImg class="article-thumbnail" :src="post.featured_media" :width="86" :height="86" loading="lazy"
                :alt="post.title.rendered" />
            </NuxtLink>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>


<style scoped>
.article-title {
  overflow: hidden;
  color: #5D5D5D;
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
  transition: ease-in 300ms;
  /* 18px */
}

.article-title:hover {
  color: #D71149 !important;
}


.article-info-timestamps {
  color: #888;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 12px */
}

.article-thumbnail {
  background-size: cover;
  background-repeat: no-repeat;
  width: 86px;
  height: 86px;
  opacity: 1;
  border-radius: 4px;
}


/* 
  color mode:dark-mode 
*/
.dark-mode .list-group-item {
  background-color: #262626;
  border-bottom: #5D5D5D;
}

.dark-mode .article-title {
  color: #fafafa;
}

.dark-mode .article-info-timestamps {
  color: #fafafa;
}
</style>

