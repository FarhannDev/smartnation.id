<script lang="ts" setup>

import { categories } from '~/utils/data/getInitialCategoryPostData';
import { posts } from "~/utils/data/getInitialPostsData"

// Set Meta SEO
useSeoMeta({
  title: "Beranda",
  description:
    "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
  author: "Smart Nation",
  ogTitle: "Beranda",
  ogDescription:
    "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
  ogType: "website",
  ogSiteName: "https://smartnation.vercel.app",
  ogUrl: "https://smartnation.vercel.app",
});



</script>

<template>
  <!-- Hero Section Start -->
  <HeroParallaxBackgroundHeroSwipe :posts="posts" />
  <!-- Hero Section End -->

  <!-- Latest Article Section Start-->
  <section class="latest-article-section py-5">


    <div class="container" data-aos="fade-up" data-aos-duration="1000">
      <HeadingTitle title="Postingan Terbaru" />

      <div class="row justify-content-start g-3 pt-3">
        <div class="col-lg-6 col-xl-4 col-xxl-4 col-md-12">
          <ArticlesArticleListSingleColumn
            :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 1)" />
        </div>
        <div class="col-lg-6 col-xl-4 col-xxl-4 col-md-12">
          <div class="d-flex flex-column article-list-container">
            <ArticlesArticleListThumbnail
              :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(1, 5)" />
          </div>
        </div>
        <div class=" col-lg-auto col-xl-4 col-xxl-4 col-md-12">
          <HeadingTitle class="text-decoration-underline" title="Terpopuler" />
          <ArticlesArticleListTitle :posts="posts.slice(0, 5)" />
        </div>
      </div>
    </div>
  </section>
  <!-- Latest Article Section End-->

  <!-- News Feed Section Start -->
  <section class="latest-newsfeed-section position-relative py-5">
    <div class="container" data-aos="fade-up" data-aos-duration="1500">
      <LazyHeadingTitle class="latest-newsfeed__title" title="Berita Terkini" />
      <div class="row justify-content-arround g-3 py-3">
        <div class="col-xl-6 col-xxl-6 col-lg-12 col-md-auto">
          <ArticlesArticleListSingleColumn :isBackground="true"
            :posts="posts.sort((a, b) => a.date_gmt.toString().localeCompare(b.date_gmt.toString())).slice(0, 1)" />
        </div>

        <div class="col-xl-6 col-xxl-6 col-lg-12 col-md-auto">
          <NewsFeedCardItem
            :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(1, 5)" />
        </div>
      </div>
    </div>
  </section>
  <!-- News Feed Section End -->

  <!-- Events Section Start -->
  <section class="position-relative py-5">
    <div class="container" data-aos="fade-up" data-aos-duration="1500">
      <HeadingTitle title="Acara " />
      <div class="row justify-content-start align-content-start g-3 py-3">
        <ArticlesArticleCardBackground :posts="posts.filter(post => post.categories.find(category => category === Number(88)))
          .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
          .slice(0, 4)" />
      </div>
    </div>
  </section>
  <!-- Events Section End -->

  <!-- Article Section Start -->
  <section class="position-relative py-5">
    <div class="container" data-aos="fade-up" data-aos-duration="1500">
      <HeadingTitle title="Artikel" />
      <div class="row justify-content-start align-items-start g-5 py-3">
        <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-12">
          <ArticlesArticleListSingleVerticalColumn :posts="posts.filter(post => post.categories.find(category => category === Number(148)))
            .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
            .slice(0, 5)" />
        </div>

        <div class="col-xl-4 col-xxl-4 col-lg-12 col-md-12">
          <div>
            <HeadingTitle class=" text-decoration-underline text-start" title="Seputar Citiasia Inc" />
            <div class="d-flex flex-column">
              <div class="vstack g-3">
                <ArticlesArticleListTitle
                  :posts="posts.filter(post => post.categories.find(category => category === Number(83))).sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 10)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="categories" class="row justify-content-arround g-3 py-5">
        <div
          v-for="category in categories.filter(category => category.id === 84 || category.id === 85 || category.id === 86).slice(0, 3)"
          :key="category.id" class="col-xl-4 col-xxl-4 col-lg-6 col-md-12">
          <HeadingTitle style="color: #5d5d5d" class="text-start text-capitalize fw-normal fs-5 latest-newsfeed__title"
            :title="category.name" />
          <div class="line-break"></div>
          <div class="d-grid pt-3 gap-3">
            <ArticlesArticleListThumbnailNumber :categoryId="category.id" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Article Section End -->
  <!-- Subcribe Section Start -->
  <section class="subscribe-section-container py-5">
    <div class="container">
      <Subscribe />
    </div>
  </section>
  <!-- Subcribe Section End -->
</template>

<style scoped>
.article-list-item {
  width: 100%;
  /* height: 510px; */
  overflow-y: scroll;
}

.article-list-item::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
  scroll-behavior: smooth;
  display: none;
}

.article-list-item::-webkit-scrollbar-thumb {
  display: none;
  background-color: #d1d1d1;
  /* border: 2px solid #555555; */
  border-radius: 10px;
}

.article-list-item::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

/* 
  Section Latest Feed Article
 */
.latest-newsfeed-section {
  width: 100%;
  height: auto;
  background-color: #a60b40;
}

.latest-newsfeed-section .card {
  background-color: #a60b40;
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

.article-desc {
  overflow: hidden;
  color: #fff;
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
  color: var(--font-400, #fff);

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
  background-position: center;
  object-fit: cover;
  min-height: 253px;
  border-radius: 8px;
}

.line-break {
  width: 100%;
  border-bottom: 1px solid var(--danger-600, #ce2f2f);
}

.article-list-container {
  border-right: 0;
}

.subscribe-section-container {
  background-color: #fff0f2;
}

.latest-newsfeed__title {
  color: #d71149 !important;
}

@media (min-width: 992px) {
  .article-list-container {
    border-right: 1px solid var(--font-100, #e7e7e7);
  }
}

/* 
  color mode:dark-mode 
*/
.dark-mode .latest-newsfeed-section {
  background-color: #262626;
}

.dark-mode .latest-newsfeed__title {
  color: #d71149 !important;
}

.dark-mode .article-desc {
  color: rgba(255, 255, 255, 0.8);
}

.dark-mode .card {
  background-color: #262626 !important;
}

.dark-mode .subscribe-section-container {
  background: #3d3d3d;
}
</style>