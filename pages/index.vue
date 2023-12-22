<script lang="ts" setup>
import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
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


const colorMode: ColorModeInstance = useColorMode()
</script>

<template>
  <div>
    <LazyHeroParallaxBackgroundHeroSwipe :posts="posts" />
    <!-- Latest Article Section -->
    <section class="py-5">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <LazyHeadingContentHeadingTitle title="Postingan Terbaru" />
        <div class="row justify-content-start g-3 pt-3">
          <div class="col-lg-6 col-xl-4 col-xxl-4 col-md-12">
            <LazyContentLatestArticleListFeatured
              :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 1)" />
          </div>
          <div class="col-lg-6 col-xl-4 col-xxl-4 col-md-12">
            <LazyContentLatestArticleListThumbnail
              :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(1, 5)" />
          </div>
          <div class=" col-lg-auto col-xl-4 col-xxl-4 col-md-12">
            <LazyHeadingContentHeadingTitle title="Terpopuler" class="text-decoration-underline" />
            <LazyContentRelatedArticle :posts="posts.slice(0, 5)" />
          </div>
        </div>
      </div>
    </section>
    <!-- End Latest Article Section -->
    <!-- News Feed Section Start -->
    <section class="latest-newsfeed-section position-relative py-5">
      <div class="container" data-aos="fade-up" data-aos-duration="1500">
        <LazyHeadingContentHeadingTitle class="content-heading__title2" title="Berita Terkini" />
        <div class="row justify-content-arround g-3 py-3">
          <div class="col-xl-6 col-xxl-6 col-lg-12 col-md-auto">

            <LazyContentLatestArticleListFeatured :isBackground="true"
              :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 1)" />
          </div>

          <div class="col-xl-6 col-xxl-6 col-lg-12 col-md-auto">
            <LazyContentLatestPostCardItem
              :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(1, 5)" />
          </div>
        </div>
      </div>
    </section>
    <!-- News Feed Section End -->
    <!-- Events Section Start -->
    <section class="py-5">
      <div class="container" data-aos="fade-up" data-aos-duration="1500">
        <LazyHeadingContentHeadingTitle title="Acara " />
        <div class="row justify-content-start align-content-start g-3 py-3">

          <LazyContentLatestArticleCardBackground :posts="posts.filter(post => post.categories.find(category => category === Number(88) || category === Number(90)))
            .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
            .slice(0, 4)" />
        </div>
      </div>
    </section>
    <!-- Events Section End -->
    <!-- Article Category Section Start -->
    <section class="py-5">
      <div class="container" data-aos="fade-up" data-aos-duration="1500">
        <LazyHeadingContentHeadingTitle title="Artikel" />
        <div class="row justify-content-start align-items-start g-5 py-3">
          <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-12">
            <LazyContentLatestArticleCardColumn :posts="posts.filter(post => post.categories.find(category => category === Number(148)))
              .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
              .slice(0, 5)" />
          </div>

          <div class="col-xl-4 col-xxl-4 col-lg-12 col-md-12">
            <div>
              <LazyHeadingContentHeadingTitle class=" text-decoration-underline" title="Seputar Citiasia Inc" />
              <div class="d-flex flex-column">
                <div class="vstack g-3">
                  <LazyContentRelatedArticle
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

            <LazyHeadingContentHeadingTitle :title="category.name"
              :class="colorMode.preference !== 'dark' && 'content-heading__category2'" />
            <div class="line-break"></div>
            <div class="d-grid pt-3 gap-3">
              <LazyContentLatestArticleListNumberThumbnail :categoryId="category.id" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Article Category Section End -->
    <!-- Contact Subcribe Section Start -->
    <section class="subscribe-section-container py-5">
      <LazyContactsContactSubscribeForm title="Berlangganan Buletin Kami"
        description="Dapatkan pembaruan terbaru kami dengan info terbaru" />
    </section>
    <!-- Contact Subcribe Section End -->
  </div>
</template>

<style scoped >
.latest-newsfeed-section {
  width: 100%;
  height: auto;
  background-color: #a60b40;
}

.subscribe-section-container {
  background: var(--primary-50, #FFF0F2);
}

.line-break {
  width: 100%;
  border-bottom: 1px solid var(--danger-600, #CE2F2F);
}

.content-heading__category2 {
  color: var(--font-600, #5D5D5D) !important;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 19.2px */
}


.content-heading__title2 {
  color: #fff !important;
}

/* 
  color mode:dark-mode 
*/
.dark-mode .latest-newsfeed-section {
  background-color: #262626;
}


.dark-mode .subscribe-section-container {
  background: #3d3d3d;
}

.dark-mode .content-heading__category {
  color: #D71149;
}

.dark-mode .content-heading__title2 {
  color: #D71149 !important;
}
</style>
