<script lang="ts" setup>

import { posts } from '~/utils/data/getInitialData';

// Set Meta SEO
useSeoMeta({
  title: "Beranda",
  description: 'Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation',
  author: "SmartNation",
  ogTitle: 'Beranda',
  ogDescription: "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
  ogType: "website",
  ogSiteName: "https://smartnation.vercel.app",
  ogUrl: 'https://smartnation.vercel.app',
})


const colorMode = useColorMode()


</script>


<template>
  <NuxtLayout name="page-layout">

    <!-- hero start -->
    <template #hero>
      <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :slides-per-view="1" :grabCursor="true"
        :pagination="{
          clickable: true,
        }" :effect="'creative'" :autoplay="{
  delay: 8000,
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
        <SwiperSlide v-for="post in posts.sort().reverse().slice(0, 5)" :key="post.id">
          <HeroParallaxBackgroundHeroSwipe :text="post.title" :background="post.thumbnail" :postId="post.slug" />
        </SwiperSlide>
      </Swiper>

    </template>

    <!-- rendered content main -->
    <main id="content">
      <!-- section berita terbaru start -->
      <section class="latest-article-section py-5 ">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
          <HeadingTitle class="text-start text-capitalize fw-bold fs-3 " title="Postingan Terbaru" />

          <!-- options color mode -->
          <div>
            <h1>Color mode: {{ $colorMode.value }}</h1>
            <select v-model="$colorMode.preference">
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>

            </select>
          </div>

          <div class="row justify-content-arround g-3 py-3">

            <div v-for="post in posts.slice(0, 1)" :key="post.id" class="col-lg-6 col-xxl-4 col-md-12">
              <ArticlesArticleFeatured :postId="post.slug" :title="post.title" :excerpt="post.excerpt"
                :featuredImage="post.thumbnail" :categories="post.categories" :timestamp="post.createdAt" />
            </div>


            <div class="col-lg-6 col-xxl-4 col-md-6 ">
              <div class="d-flex flex-column article-list-container">
                <ul class="list-group list-group-flush">
                  <ArticlesArticleFeaturedListThumbnail v-for="post in posts.slice(0, 4)" :key="post.id"
                    :postId="post.slug" :title="post.title" :featuredImage="post.thumbnail" :categories="post.categories"
                    :date="post.createdAt" />
                </ul>
              </div>
            </div>

            <div class="col-xxl-4 col-md-6">
              <HeadingTitle class="text-start text-capitalize fst-medium fs-4" title="Terpopuler" />
              <div class="d-flex flex-column pt-4">
                <div class="vstack g-3">
                  <ArticlesArticleRecomended v-for="(post, index) in posts.slice(0, 5)" :key="post.id" :number="index"
                    :postId="post.slug" :title="post.title" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- section berita terbaru end -->
      <!-- section  berita terkini start -->
      <section class="latest-newsfeed-section position-relative py-5">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
          <HeadingTitle class="text-start text-capitalize text-white fst-medium fs-3 latest-newsfeed__title"
            title="Berita Terkini" />
          <div class="row justify-content-arround gx-3 py-3">
            <div v-for="post in posts.slice(0, 1)" :key="post.id" class="col-xxl-6 col-lg-6">
              <div class="card border-0 rounded-0 mb-3">

                <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                  <NuxtImg :class="'card-img-top img-fluid rounded article-thumbnail'" :src="post.thumbnail" :height="253"
                    loading="lazy" :alt="post.title" />
                </NuxtLink>
                <div class="card-body px-0 mx-0">

                  <div class="d-flex flex-wrap mb-2">
                    <span class="article-timestamp">
                      <BootstrapIcon name="clock" class="article-timestamp-icon " /> {{ useTimestamps(post.createdAt) }}
                    </span>
                  </div>
                  <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                    :class="'card-title text-start  lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
                    {{ post.title.length >= 60
                      ? `${post.title.substring(0, 60)}...`
                      : post.title
                    }}
                  </NuxtLink>

                  <div class="card-text text-start lh-base article-desc pt-2" v-html="post.excerpt"> </div>

                  <div class="hstack g-2 pt-2">
                    <NuxtLink :to="`/category/${category}`" aria-label="Lihat Selengkapnya"
                      v-for="category in post.categories" :key="category"
                      class="badge bg-white text-danger rounded-pill text-decoration-none fw-normal me-2">
                      {{
                        category }}</NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xxl-6 col-lg-6">
              <div class="row justify-content-start gx-3">
                <div v-for="post in posts.slice(0, 4)" :key="post.id" class="col-xxl-6 col-lg-6 col-md-6">
                  <div class="card border-0 rounded-0 mb-3" style="background-color: #A60B40;">
                    <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                      <NuxtImg :class="'card-img-top img-fluid rounded'" :src="post.thumbnail" :height="253"
                        loading="lazy" :alt="post.title" />
                    </NuxtLink>
                    <div class="card-body px-0 mx-0">

                      <div class="d-flex flex-wrap mb-2">
                        <span class="article-timestamp">
                          <BootstrapIcon name="clock" class="article-timestamp-icon " /> {{ useTimestamps(post.createdAt)
                          }}
                        </span>
                      </div>
                      <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                        :class="'card-title text-start  lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
                        {{ post.title.length >= 60
                          ? `${post.title.substring(0, 60)}...`
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
          <HeadingTitle class="text-start text-capitalize fw-bold fs-3" title="Acara " />
          <div class="row justify-content-start g-3 pt-3">
            <div v-for="post in  posts.sort((a, b) => b.title.localeCompare(a.title)).slice(0, 4)" :key="post.id"
              class="col-xxl-3 col-lg-4 col-md-6 ">
              <EventsActivityPictureCover :postId="post.slug" :title="post.title" :description="post.excerpt"
                :featuredImage="post.thumbnail" :alternative="post.title" />
            </div>
          </div>
        </div>
      </section>
      <!-- section acara & kegiatan end -->
      <!-- section artikel list start -->
      <section class="position-relative py-5">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
          <HeadingTitle class="text-start text-capitalize fw-bold fs-3" title="Artikel" />
          <div class="row justify-content-start align-items-start g-3 pt-3">
            <div class="col-lg-8 " data-aos="fade-up-right">
              <article class="d-grid gap-2  article-list-item">
                <ArticlesArticleFeaturedColumn
                  v-for="post in posts.sort((a, b) => b.title.localeCompare(a.title)).slice(0, 5)" :key="post.id"
                  :postId="post.slug" :title="post.title" :featuredImage="post.thumbnail" :excerpt="post.excerpt"
                  :categories="post.categories" :timestamp="post.createdAt" />
              </article>
            </div>

            <div class="col-lg-4 position-relative" data-aos="fade-left">
              <div>
                <HeadingTitle class="text-start text-capitalize fw-bold fs-5" title="Seputar Citiasia Inc" />
                <div class="d-flex flex-column pt-4">
                  <div class="vstack g-3">
                    <ArticlesArticleRecomended v-for="(post, index) in posts.slice(0, 10)" :key="post.id" :number="index"
                      :postId="post.slug" :title="post.title" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-arround g-2 py-5" data-aos="fade-right" data-aos-offset="300"
            data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <div class="col-xxl-4 col-lg-6 col-md-6">
              <HeadingTitle style="color: #5D5D5D;"
                class="text-start text-capitalize fw-normal fs-5 mx-md-3 latest-newsfeed__title " title="Daerah" />

              <div class="line-break mx-md-3"></div>
              <div class="d-grid pt-3 gap-4">
                <ArticlesArticleRecomendedThumbnail
                  v-for="(post, index) in posts.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 5)" :key="post.id"
                  :number="index" :postId="post.slug" :title="post.title" :featuredImage="post.thumbnail"
                  :timestamp="post.createdAt" />
              </div>
            </div>
            <div class=" col-xxl-4 col-lg-6 col-md-6">
              <HeadingTitle style="color: #5D5D5D;"
                class="text-start text-capitalize fw-normal fs-5 mx-md-3 latest-newsfeed__title" title="Nasional" />
              <div class="line-break mx-md-3"></div>
              <div class="d-grid pt-3 gap-4">
                <ArticlesArticleRecomendedThumbnail v-for="(post, index) in posts.sort().reverse().slice(0, 5)"
                  :key="post.id" :number="index" :postId="post.slug" :title="post.title" :featuredImage="post.thumbnail"
                  :timestamp="post.createdAt" />
              </div>
            </div>
            <div class="col-xxl-4 col-lg-6 col-md-6">
              <HeadingTitle style="color: #5D5D5D;"
                class="text-start text-capitalize fw-normal fs-5 mx-md-3 latest-newsfeed__title" title="Internasional" />

              <div class="line-break mx-md-3"></div>
              <div class="d-grid pt-3 gap-4">
                <ArticlesArticleRecomendedThumbnail
                  v-for="(post, index) in posts.sort((a, b) => b.title.localeCompare(a.title)).slice(0, 5)" :key="post.id"
                  :number="index" :postId="post.slug" :title="post.title" :featuredImage="post.thumbnail"
                  :timestamp="post.createdAt" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- section artikel list end -->
      <!-- section subscribe start -->
      <section class="subscribe-section-container py-5 ">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
          <Subscribe />
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
  background-color: #F5F5F5;
  scroll-behavior: smooth;
  display: none;
}

.article-list-item::-webkit-scrollbar-thumb {
  display: none;
  background-color: #D1D1D1;
  /* border: 2px solid #555555; */
  border-radius: 10px;
}

.article-list-item::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
}


/* 
  Section Latest Feed Article
 */
.latest-newsfeed-section {
  width: 100%;
  height: auto;
  background-color: #A60B40;
}

.latest-newsfeed-section .card {
  background-color: #A60B40;
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
  color: #D1D1D1;
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
  width: 92%;
  border-bottom: 1px solid var(--danger-600, #CE2F2F);
}

.article-list-container {
  border-right: 0
}



.subscribe-section-container {
  background-color: #FFF0F2;
}

@media (min-width: 992px) {
  .article-list-container {
    border-right: 1px solid var(--font-100, #E7E7E7);
  }

}



/* 
  color mode:dark-mode 
*/
.dark-mode .latest-newsfeed-section {
  background-color: #262626;
}

.dark-mode .latest-newsfeed__title {
  color: #D71149 !important;
}

.dark-mode .article-desc {
  color: rgba(255, 255, 255, 0.80);

}

.dark-mode .card {
  background-color: #262626 !important;
}

.dark-mode .subscribe-section-container {
  background: #3D3D3D;
}
</style>

