<script lang="ts" setup>
import { PropType } from "vue"
import { PostsDataType } from '~/utils/data/getInitialPostsData';

const props = defineProps({ posts: { type: Object as PropType<PostsDataType> } })



</script>

<template>
  <div>
    <div class="row justify-content-start g-3">
      <div v-for="post in posts" :key="post.id" class="col-xl-6 col-lg-6 col-md-6">
        <div class="card border-0 rounded-0 mb-3">
          <NuxtLink :to="`/article/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
            <NuxtImg :class="'card-img-top img-fluid rounded'" :src="post.featured_media" :height="253" loading="lazy"
              :alt="post.title.rendered" />
          </NuxtLink>
          <div class="card-body px-0 mx-0">
            <div class="d-flex flex-wrap mb-2">
              <span class="article-timestamp">
                <BootstrapIcon name="clock" class="article-timestamp-icon" />
                {{ useTimestamps(post.date_gmt) }}
              </span>
            </div>
            <NuxtLink :to="`/article/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
              :class="'card-title text-start  lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
              {{
                post.title.rendered.length >= 80
                ? `${post.title.rendered.substring(0, 80)}...`
                : post.title.rendered
              }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  background-color: transparent;
}

.article-title {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  transition: ease 300ms;
}

.article-title:hover {
  color: #d1d1d1;
}

.article-timestamp-icon {
  font-size: 12px;
}

.article-timestamp {
  color: var(--font-400, #fff);

  /* Font/Caption Reguler */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 12px */
}
</style>