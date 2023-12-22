<script lang="ts" setup>
import { posts } from "~/utils/data/getInitialPostsData";

const route = useRoute();

const { id } = route.params;
const query: globalThis.Ref<string> = ref(id.toString())


const results = posts.filter(post => {
  return post.title.rendered.toLowerCase().includes(query.value.toLowerCase()) ||
    post.excerpt.rendered.toLowerCase().includes(query.value.toLowerCase())
})


if (!results) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}


const resultName: globalThis.Ref<string> = ref(`Hasil pencarian ${id.toString()}, Ditemukan dalam ${results?.length} Berita`)
const resultNameEmpty: globalThis.Ref<string> = ref(`Hasil pencarian ${id.toString()} tidak ditemukan!`)


useSeoMeta({
  title: results.length ? resultName : `Hasil pencarian tidak ditemukan`,
})
</script>

<template>
  <HeroParallaxBackground :text="'Daftar Berita'" :desc="`Daftar Berita Dari Hasil pencarian ${id.toString()}`"
    :background="'https://drive.google.com/uc?export=download&id=1ZC_bP2Pn8FppePARz0ZunSpsQXTFKPqV'" />
  <!-- Section berita start -->
  <section data-aos="fade-up" data-aos-duration="1500" class="berita-section-container position-relative py-5">
    <div class="container">
      <div class="row justify-content-start align-content-start g-5 py-5">
        <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-auto">
          <div v-if="results?.length">
            <article class="article-section position-relative mb-3">
              <LazyHeadingContentHeadingTitle :title="resultName" />
              <div class="d-flex flex-column ">
                <ul class="list-group list-group-flush">
                  <li v-for="post in results
                    .sort((a, b) => b.title.rendered.localeCompare(a.title.rendered))
                    .slice(0, 12)" :key="post.id" class="list-group-item mx-0 px-0">
                    <div class="card border-0 rounded-0">
                      <div class="row justify-content-start align-items-center g-3">
                        <div class="col-xl-4 col-xxl-4 col-lg-4  col-md-12 ">
                          <NuxtLink :to="`/article/${post.slug}`"
                            :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
                            <NuxtImg :class="'article-thumbnail'" :src="post.featured_media" loading="lazy"
                              :alt="post.title.rendered" />
                          </NuxtLink>
                        </div>

                        <div class="col-xl-8 col-xxl-8 col-lg-8 col-md-12">
                          <div class="card-body px-0 mx-0 px-md-2 mx-md-2">
                            <div class="d-flex justify-content-between g-2 mb-3">
                              <span class="article-info-tag">Berita</span>
                              <span class="article-info-tag text-start text-secondary">{{ useFormatter(post.date_gmt)
                              }}</span>
                            </div>

                            <NuxtLink :to="`/article/${post.slug}`"
                              :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
                              :class="'article-title lh-base link-offset-2 link-underline link-underline-opacity-0 '">
                              {{
                                post.title.rendered.length >= 80
                                ? `${post.title.rendered.substring(0, 80)}...`
                                : post.title.rendered
                              }}
                            </NuxtLink>
                            <div class="article-desc pt-2" v-html="post.excerpt.rendered.length >= 120
                                  ? `${post.excerpt.rendered.substring(0, 120)}...`
                                  : post.excerpt.rendered
                                "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ButtonPagination v-if="results?.length >= 8" />
            </article>
          </div>

          <!-- Show not found -->
          <div v-else>
            <div class="text-center mx-auto">
              <NuxtImg src="/images/ccsn_empty_page.png" class="img-fluid" loading="lazt" :width="342" :height="342" />
              <!-- <h1 class="berita-section-title">{{ resultNameEmpty }}</h1> -->
              <LazyHeadingContentHeadingTitle class="text-center" :title="resultNameEmpty" />
              <LazyHeadingContentHeadingTitle class="text-center"
                title="Untuk saat ini berita belum tersedia, Coba dengan kata kunci lain " />
              <!-- <h1 class="berita-section-title">Untuk saat ini berita belum tersedia, Coba dengan kata kunci lain </h1> -->
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-xxl-4 col-lg-12 ">
          <article>
            <LazyHeadingContentHeadingTitle class=" text-decoration-underline" title="Berita Lainnya" />
            <LazyContentRelatedArticle
              :posts="posts.filter(post => post.categories.find(category => category === Number(83))).sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 10)" />
          </article>
        </div>
      </div>
    </div>
  </section>
  <!-- Section berita end -->
</template>

<style scoped>
.berita-section-title {
  color: var(--primary-600, #d71149);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: capitalize;
  /* 28.8px */
  /* 24px */
}

.line-break {
  position: relative;
  top: -5px;
  left: 1.2px;
  width: 51px;
  border: 1px solid #c70943;
}

.berita-section-title {
  color: var(--font-600, #d71149);
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
  overflow: hidden;
  color: var(--font-600, #5d5d5d);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  /* 19.2px */
  transition: ease-in 300ms;
}

.article-title:hover {
  color: #d71149 !important;
}

.article-desc {
  overflow: hidden;
  color: var(--font-600, #5d5d5d);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
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

.article-thumbnail {
  width: 100%;
  height: auto;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
}

@media (min-width: 992px) {
  .article-thumbnail {
    width: 256px;
    height: 151px;
  }
}

.article-list-container {
  border-right: 0;
}

@media (min-width: 992px) {
  .article-list-container {
    border-right: 1px solid var(--font-100, #e7e7e7);
  }
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

.article-list-title:hover {
  color: #d71149 !important;
}

.dark-mode .card {
  background-color: #262626 !important;
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

.dark-mode .article-title {
  color: #fafafa;
}

.dark-mode .article-list-title {
  color: #fafafa;
}

.dark-mode .article-info-tag {
  color: rgba(255, 255, 255, 0.9) !important;
}

.dark-mode .article-link-title {
  color: rgba(255, 255, 255, 0.9) !important;
}

.dark-mode .article-desc {
  color: rgba(255, 255, 255, 0.9);
}
</style>
