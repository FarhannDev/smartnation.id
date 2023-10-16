<script lang="ts" setup>
import { posts } from "~/utils/data/getInitialData";

// Set Meta SEO
useSeoMeta({
  title: "Beranda",
  description:
    "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
  author: "SmartNation",
  ogTitle: "Beranda",
  ogDescription:
    "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
  ogType: "website",
  ogSiteName: "https://smartnation.vercel.app",
  ogUrl: "https://smartnation.vercel.app",
});

</script>

<template>
  <NuxtLayout name="page-layout">
    <!-- hero start -->
    <template #hero>
      <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :slides-per-view="1" :grabCursor="true"
        :pagination="{
          clickable: true,
        }" :effect="'creative'" :autoplay="{
  delay: 2500,
  disableOnInteraction: true,
}" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
        <SwiperSlide v-for="post in posts
          .sort((a, b) => b.title.localeCompare(a.title))
          .slice(0, 5)" :key="post.id">
          <LazyHeroParallaxBackgroundHeroSwipe :text="post.title" :background="post.thumbnail" :postId="post.slug" />
        </SwiperSlide>
      </Swiper>
    </template>

    <!-- rendered content main -->
    <main id="content">
      <!-- section berita terbaru start -->
      <section class="latest-article-section py-5">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
          <LazyHeadingTitle class="text-start text-capitalize fw-bold fs-3" title="Postingan Terbaru" />

          <div class="row justify-content-start g-3 py-3">
            <div class="col-lg-6 col-xl-4 col-xxl-4 col-md-12">
              <LazyArticlesArticleListSingleColumn :posts="posts.slice(0, 1)" />
            </div>
            <div class="col-lg-6 col-xl-4 col-xxl-4 col-md-12">
              <div class="d-flex flex-column article-list-container">
                <LazyArticlesArticleListThumbnail :posts="posts
                  .sort((a, b) =>
                    a.createdAt
                      .toString()
                      .localeCompare(b.createdAt.toString())
                  )
                  .slice(0, 4)
                  " />
              </div>
            </div>
            <div class="col-lg-auto col-xl-4 col-xxl-4 col-md-12">
              <div>
                <LazyHeadingTitle class="text-start text-capitalize fst-medium fs-4" title="Terpopuler" />
                <LazyArticlesArticleListTitle :posts="posts
                  .sort((a, b) => b.title.localeCompare(a.title))
                  .slice(0, 5)
                  " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- section berita terbaru end -->
      <!-- section  berita terkini start -->
      <section class="latest-newsfeed-section position-relative py-5">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
          <LazyHeadingTitle class="text-start text-capitalize text-white fst-medium fs-3 latest-newsfeed__title"
            title="Berita Terkini" />
          <div class="row justify-content-arround g-3 py-3">
            <div class="col-xl-6 col-xxl-6 col-lg-12 col-md-auto">
              <ArticlesArticleListSingleColumn :posts="posts.slice(0, 1)" isBackground />
            </div>

            <div class="col-xl-6 col-xxl-6 col-lg-12 col-md-auto">
              <div class="row justify-content-start g-3">
                <div v-for="post in posts.slice(0, 4)" :key="post.id" class="col-xl-6 col-lg-6 col-md-6">
                  <div class="card border-0 rounded-0 mb-3" style="background-color: #a60b40">
                    <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                      <NuxtImg :class="'card-img-top img-fluid rounded'" :src="post.thumbnail" :height="253"
                        loading="lazy" :alt="post.title" />
                    </NuxtLink>
                    <div class="card-body px-0 mx-0">
                      <div class="d-flex flex-wrap mb-2">
                        <span class="article-timestamp">
                          <BootstrapIcon name="clock" class="article-timestamp-icon" />
                          {{ useTimestamps(post.createdAt) }}
                        </span>
                      </div>
                      <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                        :class="'card-title text-start  lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
                        {{
                          post.title.length >= 50
                          ? `${post.title.substring(0, 50)}...`
                          : post.title
                        }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- section berita terkini end -->
      <!-- section acara & kegiatan start -->
      <section class="position-relative py-5">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
          <LazyHeadingTitle class="text-start text-capitalize fw-bold fs-3" title="Acara " />
          <div class="row justify-content-start align-content-start g-3 py-3">
            <ArticlesArticleCardBackground :posts="posts.sort((a, b) => b.title.localeCompare(a.title)).slice(0, 4)" />
          </div>

        </div>
      </section>
      <!-- section acara & kegiatan end -->
      <!-- section artikel list start -->
      <section class="position-relative py-5">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
          <LazyHeadingTitle class="text-start text-capitalize fw-bold fs-3" title="Artikel" />
          <div class="row justify-content-start align-items-start g-5 py-3">
            <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-12">
              <ArticlesArticleListSingleVerticalColumn :posts="posts.slice(0, 5)" />
            </div>

            <div class="col-xl-4 col-xxl-4 col-lg-12 col-md-12">
              <div>
                <LazyHeadingTitle class="text-start text-capitalize fw-bold fs-5" title="Seputar Citiasia Inc" />
                <div class="d-flex flex-column">
                  <div class="vstack g-3">
                    <LazyArticlesArticleListTitle :posts="posts
                      .sort((a, b) => b.title.localeCompare(a.title))
                      .slice(0, 10)
                      " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-arround g-3 py-5">
            <div class="col-xl-4 col-xxl-4 col-lg-6 col-md-12">
              <LazyHeadingTitle style="color: #5d5d5d"
                class="text-start text-capitalize fw-normal fs-5 latest-newsfeed__title" title="Daerah" />

              <div class="line-break"></div>
              <div class="d-grid pt-3 gap-3">
                <LazyArticlesArticleListThumbnailNumber :posts="posts
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .slice(0, 5)
                  " />
              </div>
            </div>
            <div class="col-xl-4 col-xxl-4 col-lg-6 col-md-12">
              <LazyHeadingTitle style="color: #5d5d5d"
                class="text-start text-capitalize fw-normal fs-5 latest-newsfeed__title" title="Nasional" />
              <div class="line-break"></div>
              <div class="d-grid pt-3 gap-4">
                <LazyArticlesArticleListThumbnailNumber :posts="posts
                  .sort((a, b) => b.title.localeCompare(a.title))
                  .slice(0, 5)
                  " />
              </div>
            </div>
            <div class="col-xl-4 col-xxl-4 col-lg-6 col-md-12">
              <LazyHeadingTitle style="color: #5d5d5d"
                class="text-start text-capitalize fw-normal fs-5 latest-newsfeed__title" title="Internasional" />

              <div class="line-break"></div>
              <div class="d-grid pt-3 gap-4">
                <LazyArticlesArticleListThumbnailNumber :posts="posts
                  .sort((a, b) =>
                    b.createdAt
                      .toString()
                      .localeCompare(a.createdAt.toString())
                  )
                  .slice(0, 5)
                  " />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- section artikel list end -->
      <!-- section subscribe start -->
      <section class="subscribe-section-container py-5">
        <div class="container">
          <LazySubscribe />
        </div>
      </section>
      <!-- section subscribe end -->
    </main>
    <!-- Content Main End -->
  </NuxtLayout>
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