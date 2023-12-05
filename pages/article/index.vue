<script lang="ts" setup>
import { categories } from '~/utils/data/getInitialCategoryPostData';
import { posts } from '~/utils/data/getInitialPostsData';

// Set Meta SEO
useSeoMeta({
  title: "Daftar Berita",
  description: "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
  ogTitle: "Daftar Berita",
  ogDescription: "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
});


</script>

<template>
  <!-- hero start -->
  <HeroParallaxBackground :text="'Daftar Berita'" :desc="`Daftar berita dari semua kategori`"
    :background="'https://drive.google.com/uc?export=download&id=1ZC_bP2Pn8FppePARz0ZunSpsQXTFKPqV'" />
  <!-- rendered content main -->
  <main id="content">
    <!-- section berita start -->
    <section data-aos="fade-up" data-aos-duration="1500" class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start align-content-start g-5">
          <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-auto">
            <article class="article-section position-relative mb-3">
              <h1 class="berita-section-title">Berita Terbaru</h1>
              <div class="line-break"></div>

              <div class="row justify-content-arround g-4 py-3">
                <div class="col-xl-6 col-xxl-6 col-lg-6  col-md-12 article-list-container">
                  <NewsCardItemSingleColumn
                    :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 1)" />

                </div>
                <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-12">
                  <NewsCardItemListThumbnailMini
                    :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(1, 5)" />
                </div>
              </div>
            </article>
            <article class="article-section position-relative mb-3">
              <h1 class="berita-section-title">Berita Terpopuler</h1>
              <div class="row justify-content-arround g-3 py-3">
                <NewsCardItemFeatured
                  :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 2)" />

              </div>
            </article>
            <article class="d-block d-md-block d-lg-none d-xl-none">
              <h1 class="berita-section-title text-decoration-underline">
                Terpopuler Lainnya
              </h1>
              <div class="d-flex flex-column">
                <div class="vstack g-3">
                  <ArticlesArticleListTitle :posts="posts.slice(0, 10)" />
                  <div style="margin-top: 35px;">
                    <img style="height: 550px;" src="\images\advertisement\available4.png"
                      alt="\images\advertisement\available4.png">
                  </div>
                </div>
              </div>
            </article>
            <article v-for="category in categories" :key="category.id"
              class="article-section position-relative mb-3 py-5">
              <div class="d-flex flex-wrap justify-content-between g-0">
                <div>
                  <h1 class="berita-section-title">{{ category.name }}</h1>
                </div>
                <span>
                  <NuxtLink :to="`/category/${category.slug}`" aria-label="Lihat Selengkapnya"
                    class="link-offset-2 link-underline link-underline-opacity-0 link-secondary article-link-title">
                    Selengkapnya
                  </NuxtLink>
                  <BootstrapIcon name="chevron-right" />
                </span>
              </div>
              <div class="d-flex flex-column">
                <NewsCardItemListThumbnail :categoryId="category.id" :categoryName="category.name" />

              </div>
            </article>
          </div>
          <div class="col-xl-4 col-xxl-4 col-lg-12 d-none d-lg-block d-xl-block d-xxl-block">
            <article>
              <h1 class="berita-section-title text-decoration-underline">
                Terpopuler Lainnya
              </h1>
              <div class="d-flex flex-column">
                <div class="vstack g-3">
                  <ArticlesArticleListTitle :posts="posts.slice(0, 10)" />
                  <div style="margin-top: 35px;">
                    <img style="height: 550px;" src="\images\advertisement\available4.png"
                      alt="\images\advertisement\available4.png">
                  </div>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
    <!-- section berita end -->
    <!-- Section  subcribe start -->
    <section class="subscribe-section-container py-5">
      <div class="container">
        <Subscribe />
      </div>
    </section>
    <!-- Section subcribe end -->
  </main>
</template>

<style scoped>
.berita-section-title {
  color: var(--font-600, #5d5d5d);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 24px */
  text-align: start;
}

.text-decoration-underline {
  margin-bottom: 25px !important;
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
