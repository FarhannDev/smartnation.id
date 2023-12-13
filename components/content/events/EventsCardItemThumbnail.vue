<script lang="ts" setup>
import { PropType } from 'vue';
import { posts, Posts } from '~/utils/data/getInitialPostsData';


// defineProps({ categoryId: { type: Number }, categoryName: { type: String } })

const props = defineProps({ events: { type: Object as PropType<Posts[]> } });

</script>

<template>
  <div>
    <ul v-if="events" class="list-group list-group-flush">
      <li v-for="event in events" :key="event.id" class="list-group-item mx-0 px-0">
        <div class="card border-0 rounded-0">
          <div class="row justify-content-start align-items-center g-3">
            <div class="col-xl-4 col-xxl-4 col-lg-4 col-md-5">
              <NuxtLink :to="`/article/${event.slug}`" :aria-label="`Baca Selengkapnya ${event.title.rendered}`">
                <NuxtImg :class="'article-list__thumbnail '" :src="event.featured_media" loading="lazy"
                  :alt="event.title.rendered" />
              </NuxtLink>
            </div>
            <div class="col-xl-8 col-xxl-8 col-lg-8 col-md-7">
              <div class="card-body px-0 mx-0 px-md-2 mx-md-2">
                <div class="d-flex justify-content-between g-2 mb-3">
                  <span class="article-info-tag">Events</span>
                  <span class="article-info-tag text-start text-secondary">{{ useFormatter(event.date_gmt)
                  }}</span>
                </div>
                <NuxtLink :to="`/article/${event.slug}`" :aria-label="`Baca Selengkapnya ${event.title.rendered}`"
                  :class="'article-title lh-base link-offset-2 link-underline link-underline-opacity-0 '">
                  {{
                    event.title.rendered.length >= 80
                    ? `${event.title.rendered.substring(0, 80)}...`
                    : event.title.rendered
                  }}
                </NuxtLink>
                <div class="article-desc pt-2" v-html="event.excerpt.rendered.length >= 250
                      ? `${event.excerpt.rendered.substring(0, 250)}...`
                      : event.excerpt.rendered
                    "></div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<style lang="css" scoped>
.article-title {
  overflow: hidden;
  color: var(--font-600, #5D5D5D);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  /* 19.2px */
}

.article-title:hover {
  color: #d71149 !important;
}

.article-desc {
  overflow: hidden;
  color: var(--font-600, #5D5D5D);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
}


.article-thumbnail {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 253px;
  opacity: 1;
}



.article-info-tag {
  color: var(--primary-600, #d71149);
  font-family: Poppins;
  font-size: 16px;
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
  background-color: #262626;
}

.dark-mode .list-group-flush {
  background-color: #262626;
}

.dark-mode .list-group-item {
  background-color: #262626;
}
</style>