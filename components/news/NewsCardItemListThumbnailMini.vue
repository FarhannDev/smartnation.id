<script lang="ts" setup>
import { PropType } from "vue"
import { PostsDataType } from '~/utils/data/getInitialPostsData';

defineProps({ posts: { type: Object as PropType<PostsDataType> } })
</script>


<template>
  <div v-if="posts" class="d-flex flex-column justify-content-start g-2">
    <div v-for="post in posts" :key="post.id">
      <div class="mb-3">
        <div class="d-flex justify-content-arround ">
          <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
            <NuxtImg class="me-2" style="border-radius: 4px" :src="post.featured_media" :width="148" :height="94"
              loading="lazy" :alt="post.title.rendered" />
          </NuxtLink>
          <div class="d-flex flex-column">
            <span class="article-info-tag">Berita</span>
            <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
              :class="'article-list-title link-offset-2 link-underline link-underline-opacity-0 text-start fw-normal '">
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
.berita-section-title {
  color: var(--font-600, #5d5d5d);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 24px */
}

.line-break {
  position: relative;
  top: -5px;
  left: 1.2px;
  width: 51px;
  border: 1px solid #c70943;
}

.article-title {
  color: #5d5d5d;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  transition: ease-in 300ms;
}

.article-title:hover {
  color: #d71149 !important;
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

.article-link-title {
  color: var(--font-500, #6d6d6d);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  /* 19.2px */
}

.article-info-tag {
  color: var(--primary-600, #d71149);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 19.2px */
}

.article-list-container {
  border-right: 0;
}

.article-list-title {
  margin-top: 5px;
  color: var(--font-600, #5d5d5d);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  transition: ease-in 300ms;
  /* 16.8px */
}

.article-list__thumbnail {
  width: 100%;
  height: auto;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
}

@media (min-width: 992px) {
  .article-list-container {
    border-right: 1px solid var(--font-100, #e7e7e7);
  }

  .article-list__thumbnail {
    width: 256px;
    height: 151px;
  }
}

.subscribe-section-container {
  background-color: #fff0f2;
}

.article-list-title:hover {
  color: #d71149 !important;
}

.dark-mode .card {
  background-color: #262626;
}

.dark-mode .berita-section-title {
  color: #d71149;
}

.dark-mode .article-title {
  color: #fafafa;
}

.dark-mode .article-list-title {
  color: #fafafa;
}

.dark-mode .article-desc {
  color: rgba(255, 255, 255, 0.9);
}

.dark-mode .article-list-container {
  border-right: 1px solid var(--font-100, #575757);
}

.dark-mode .article-info-tag {
  color: rgba(255, 255, 255, 0.9) !important;
}

.dark-mode .article-link-title {
  color: rgba(255, 255, 255, 0.9) !important;
}

.dark-mode .list-group {
  background: #3d3d3d;
}

.dark-mode .list-group-flush {
  background: #3d3d3d;
}

.dark-mode .list-group-item {
  background: #3d3d3d;
}

/* .dark-mode .list-group,
.list-group-flush .list-group-item {
  background: #3D3D3D;

} */

.dark-mode .subscribe-section-container {
  background: #3d3d3d;
}
</style>