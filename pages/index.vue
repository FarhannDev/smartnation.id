<template>
  <main class="position-relative pt-5 content-wrapper">

    <!-- Section Latest Post Start -->
    <section class="position-relative py-5">
      <div class="container">
        <HeadingTitle class="text-start text-capitalize fw-bold fs-3" title="Postingan Terbaru" />
        <div class="row justify-content-arround g-3 py-3">

          <div v-for="post in posts.slice(0, 1)" :key="post.id" class="col-lg-4">
            <ArticlesArticleFeatured :postId="post.slug" :title="post.title" :excerpt="post.excerpt"
              :featuredImage="post.thumbnail" :categories="post.categories" :timestamp="post.createdAt" />
          </div>


          <div class="col-lg-4">
            <div class="d-flex flex-column border border-start-0 border-top-0">
              <ul class="list-group list-group-flush">
                <ArticlesArticleFeaturedListThumbnail v-for="post in posts.slice(0, 4)" :key="post.id" :postId="post.slug"
                  :title="post.title" :featuredImage="post.thumbnail" :categories="post.categories"
                  :timestamp="post.createdAt" />
              </ul>
            </div>
          </div>

          <div class="col-lg-4">
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
    <!-- Section Latest Post End -->
    <!-- Section Post Terkini Start -->
    <section class="position-relative py-5" style="background-color: #A60B40;">
      <div class="container">
        <HeadingTitle class="text-start text-capitalize text-white fst-medium fs-3" title="Berita Terkini" />
        <div class="row justify-content-arround g-3 py-3">


          <div class="col-lg-5 me-md-1 ">
            <div class=" card border-0 rounded-0 mb-3" style="background-color: #A60B40;">
              <NuxtImg :class="'card-img-top img-fluid rounded'"
                :src="'https://s3-alpha-sig.figma.com/img/50e8/b7e3/d01ef7ce9776c225532c958b75f35f9f?Expires=1695600000&Signature=FN2aG9-Zd~9kgWXDnAvFGL354cK02JqcxUJsLh-reRR-sZJWYwqgGlbSxz8RAZuxwk~eDB0EeRO4Eml7B0if~5CUNsRl6svOS0gyHkWaTQdfkolksSwmSDakmymG4uIRP0~k45JhHQYC2IRb806OjzmqJH4GIfUX27FOHSsMPZCs8rdau5YqS3JgiH2k7FqkQIs50NkFn5bA5bJzfT0vn-w8wVS6R1CvZssKQfM~cX9bDfkf0mqD1vHf9nPkpbpfGAfCm9r2Jk682T4Hm0COQxL9mKCWkE9A57z2bIS1hpNF5UT1NxAyIt~a7gt9ACoFNTIUsS6Rj0hAzHBCrzVpNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'"
                :height="253" loading="lazy" :alt="'Cover Alt'" />
              <div class="card-body px-0 mx-0">

                <div class="d-flex flex-wrap mb-2">
                  <span class="text-start text-white-50 fst-normal">
                    <BootstrapIcon name="clock" /> 16 Desember 2022
                  </span>
                </div>

                <NuxtLink :to="'/'"
                  :aria-label="'Baca Selengkapnya Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas '"
                  :class="'card-title text-white text-start fw-normal fs-5 lh-base link-offset-2 link-underline link-underline-opacity-0 '">
                  Pemprov Jawa Barat Resmi Rilis Empat Aplikasi Besar untuk ASN

                </NuxtLink>

                <p class="card-text text-start text-white lh-base pt-2">
                  Pemerintah Provinsi Jawa Barat resmi luncurkan Smart Jabar, sebuah ekosistem teknologi untuk Jabar
                  yang
                  terdiri dari E–Office, Dashboard Jabar dan Jabar Skytrek. Launching aplikasi ini diresmikan langsung
                  oleh Sekretaris Daerah Provinsi Jawa Barat...

                </p>
              </div>
            </div>
          </div>


          <div class="col-lg-6">
            <div class="row justify-content-start g-2">
              <div class="col-lg-6">
                <div class="card border-0 rounded-0 mb-3" style="background-color: #A60B40;">
                  <NuxtImg :class="'card-img-top img-fluid rounded'"
                    :src="'https://s3-alpha-sig.figma.com/img/3d93/1b85/304715f7b435531537db0765fe525ea8?Expires=1695600000&Signature=nAMqbeOW8jthe6LExj4lDq5n1b3R~fm2RAwj~zV1vvB82PrUqdLFDIKpaS~SpdgjaLsp4I9T3qfa0x5jjqo6xZYkzZP7bfasREI6bfXP4EBcg6-qF6NgmjfakLB9jBKdlAb1fjc6NTRvkKiG1BNzXuW3Nrsy8Ce2gubCEYTwnC0mq~wv5784vFfzaeRgGHp8W6pw6sn718Fu3swzMm2w1JWBatqlz8HcDm2HXKQNondgHONUsbvkLleMaz3IDP1~NwVMMM6RtUO55eU~FFI8GbAyrYYn8I-y1dQWqpTO5YHY14KNuoKrClfkYdV8udtRrO8i8te~4bmp3W~IUMWYjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'"
                    :height="253" loading="lazy" :alt="'Cover Alt'" />
                  <div class="card-body px-0 mx-0">

                    <div class="d-flex flex-wrap mb-2">
                      <span class="text-start text-white-50 fst-normal">
                        <BootstrapIcon name="clock" /> 16 Desember 2022
                      </span>
                    </div>

                    <NuxtLink :to="'/'"
                      :aria-label="'Baca Selengkapnya Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas '"
                      :class="'card-title text-white text-start fw-normal fs-5 lh-base link-offset-2 link-underline link-underline-opacity-0  stretched-link'">
                      Smart Farming: Tingkatkan Pertanian di Indonesia
                    </NuxtLink>


                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card border-0 rounded-0 mb-3" style="background-color: #A60B40;">
                  <NuxtImg :class="'card-img-top img-fluid rounded'"
                    :src="'https://s3-alpha-sig.figma.com/img/4b99/8bb8/7b23d7b152dbd91e2c0eacbb2b163deb?Expires=1695600000&Signature=pDP2zSsRKYaMyhHcSkk~F-T8M4AHDfiCLj~R0lg~Nk~rvX0D-qXDJX6IgIZNTWhflZXUb6BXtggvkU3X-2zZKUZeQGKg2QylE2edl0kCX6A2cIWOEgA~OSSCniNjzWn8dNofsyEy-yH5NWU9u3I9twYNKByf80RABIGemHCHk5b2kYYba8Iw3gq2-PbVEeESEKT8oO4sk9wkd5QlE9aGy~-ilBPHohTDOXwjRMwXJPjDdwFpQn8LtafK8XB-IN-GKkOCtMNKPpx2D31SABoxVqNMAcY~0lMsp4Qjjc1FxNyjl-W67AoKTiz9hjVaiBvWeGkYoh0E-KXDSU7c~Y-sfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'"
                    :height="253" loading="lazy" :alt="'Cover Alt'" />
                  <div class="card-body px-0 mx-0">

                    <div class="d-flex flex-wrap mb-2">
                      <span class="text-start text-white-50 fst-normal">
                        <BootstrapIcon name="clock" /> 16 Desember 2022
                      </span>
                    </div>

                    <NuxtLink :to="'/'"
                      :aria-label="'Baca Selengkapnya Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas '"
                      :class="'card-title text-white text-start fw-normal fs-5 lh-base link-offset-2 link-underline link-underline-opacity-0  stretched-link'">
                      Makin Keren, iPhone 14 Punya Fitur Komunikasi Satelit untuk Keadaan Darurat
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card border-0 rounded-0 mb-3" style="background-color: #A60B40;">
                  <NuxtImg :class="'card-img-top img-fluid rounded'"
                    :src="'https://s3-alpha-sig.figma.com/img/afd5/6d60/1542146f63d0b74dbe8ea552eef86d5f?Expires=1695600000&Signature=HAm1Mk12trhZE2Zm28lzyUV53uINXQivn6Q8~LyIfH7R3MP8Usm~v2BgYcfN8lneZF-IWOK56RXOQ8SeMJC~i0dGvVz6utLGR~XuZSm4nNHLZ4HsA7dQr02MUckrHelT7WM14o6OwOBY5erT6JUKOVxn90~it1-LHVKhwAj~dA6uRi-BWqeG~ovt73GrEJWoc67MPZY0EuPkNYgfkvQFNcm7Q-Fm2pY05Fb5MMWg4iF0pdEaSB-6KyMZYX6BQOcwWHDLh0gyRZHmVTGG5l24c~TVos6HDvp3gi19zGecwbLfRDMAfCFkpBqMizOFxVNTNLkv7MEtSEpXgtjkBf2FFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'"
                    :height="253" loading="lazy" :alt="'Cover Alt'" />
                  <div class="card-body px-0 mx-0">

                    <div class="d-flex flex-wrap mb-2">
                      <span class="text-start text-white-50 fst-normal">
                        <BootstrapIcon name="clock" /> 16 Desember 2022
                      </span>
                    </div>

                    <NuxtLink :to="'/'"
                      :aria-label="'Baca Selengkapnya Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas '"
                      :class="'card-title text-white text-start fw-normal fs-5 lh-base link-offset-2 link-underline link-underline-opacity-0  stretched-link '">
                      Manfaat Terapkan Smart Manufacturing Bagi Dunia Industri
                    </NuxtLink>


                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card border-0 rounded-0 mb-3" style="background-color: #A60B40;">
                  <NuxtImg :class="'card-img-top img-fluid rounded'"
                    :src="'https://s3-alpha-sig.figma.com/img/9022/96b6/23e15b37bd84a6cb1710400d98ccbdeb?Expires=1695600000&Signature=B0xTjnejSeuzUX4Y6A14nYcx6kzc3p31ahME1W8wimxH9Q6yIenjz3M8vSYc9OrM9aizBMytSMXrKYFr1fjgaMNPbJRRRR3ByKku0cvnnEgP1asLExAUeIcjUucVDmWMhaW8uveAEY7VRQW2CufvpwbEDV404gABxhS7h7vl9nQqeXxTHyYGQg6j6QOwxKePRVFMJ4jiIOUtH42I~IBBzhOrOLpT6Dahmh4w7g~2wb82oWSzEmvn5NYQ3lHUb39TyyCXcFEx6z91iHgXbs7qCclb8LWVw9MBkbH8m1TKzF1mWHlMQLE-yKnZzNVF6bDHVpXSiu~zzQtKddh0QrxOPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'"
                    :height="253" loading="lazy" :alt="'Cover Alt'" />
                  <div class="card-body px-0 mx-0">

                    <div class="d-flex flex-wrap mb-2">
                      <span class="text-start text-white-50 fst-normal">
                        <BootstrapIcon name="clock" /> 16 Desember 2022
                      </span>
                    </div>

                    <NuxtLink :to="'/'"
                      :aria-label="'Baca Selengkapnya Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas '"
                      :class="'card-title text-white text-start fw-normal fs-5 lh-base link-offset-2 link-underline link-underline-opacity-0  stretched-link'">
                      Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Post Terkini End -->
    <!-- Section Post Event Start -->
    <section class="position-relative py-5">
      <div class="container">
        <HeadingTitle class="text-start text-capitalize fw-bold fs-3" title="Acara " />
        <div class="row justify-content-start g-3 pt-3">
          <div v-for="post in  posts.slice(0, 4)" :key="post.id" class="col-lg-3">
            <ActivityPictureCover :postId="post.slug" :title="post.title" :description="post.excerpt"
              :featuredImage="post.thumbnail" :alternative="post.title" />
          </div>
        </div>
      </div>
    </section>
    <!-- Section Post Event End -->
    <!-- Section Articles -->
    <section class="position-relative py-5 article-section">
      <div class="container">
        <HeadingTitle class="text-start text-capitalize fw-bold fs-3" title="Artikel" />
        <div class="row justify-content-start align-items-start g-3 pt-3">
          <div class="col-lg-8">
            <article class="d-grid gap-2  article-list-item" @scroll="articleScroll">
              <ArticlesArticleFeaturedColumn v-for="post in posts.slice(0, 5)" :key="post.id" :postId="post.slug"
                :title="post.title" :featuredImage="post.thumbnail" :excerpt="post.excerpt" :categories="post.categories"
                :timestamp="post.createdAt" />
            </article>
          </div>

          <div class="col-lg-4">
            <HeadingTitle class="text-start text-capitalize fw-bold fs-5" title="Seputar Citiasia Inc" />
            <div class="d-flex flex-column pt-4">
              <div class="vstack g-3">
                <ArticlesArticleRecomended v-for="(post, index) in posts.slice(0, 10)" :key="post.id" :number="index"
                  :postId="post.slug" :title="post.title" />
              </div>
            </div>
          </div>
        </div>


        <div class="row justify-content-arround g-2 py-5">
          <div class="col-lg-4">
            <HeadingTitle class="text-start text-dark text-capitalize fw-medium fs-5 mx-md-3" title="Daerah" />

            <hr class="text-danger mx-md-3 fw-bold" />
            <div class="d-grid pt-3 gap-4">
              <ArticlesArticleFeaturedListThumbnail v-for="post in posts.slice(0, 4)" :key="post.id" :postId="post.slug"
                :title="post.title" :featuredImage="post.thumbnail" :timestamp="post.createdAt" />
            </div>
          </div>
          <div class=" col-lg-4">
            <HeadingTitle class="text-start text-dark text-capitalize fw-medium fs-5 mx-md-3" title="Nasional" />
            <hr class="text-danger mx-md-3 fw-bold" />
            <div class="d-grid pt-3 gap-4">
              <ArticlesArticleFeaturedListThumbnail v-for="post in posts.slice(0, 4)" :key="post.id" :postId="post.slug"
                :title="post.title" :featuredImage="post.thumbnail" :timestamp="post.createdAt" />
            </div>
          </div>
          <div class="col-lg-4">
            <HeadingTitle class="text-start text-dark text-capitalize fw-medium fs-5 mx-md-3" title="Internasional" />
            <hr class="text-danger mx-md-3 fw-bold" />
            <div class="d-grid pt-3 gap-4">
              <ArticlesArticleFeaturedListThumbnail v-for="post in posts.slice(0, 4)" :key="post.id" :postId="post.slug"
                :title="post.title" :featuredImage="post.thumbnail" :timestamp="post.createdAt" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Section Articles -->
    <!-- Section Subcription -->
    <section class="position-relative py-5 " style="background-color: #FFF0F2;">
      <div class="container">
        <Subscribe />
      </div>
    </section>
    <!-- End Section Subcription -->
  </main>
</template>


<style scoped>
.article-list-item {
  width: 100%;
  height: 510px;
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
</style>

<script lang="ts" setup>

import HeadingTitle from '~/components/HeadingTitle.vue';
import ActivityPictureCover from '~/components/events/ActivityPictureCover.vue';
import Subscribe from '~/components/Subscribe/Subscribe.vue';
import { Posts, posts } from '~/utils/data/getInitialData';

// Set Meta SEO
useSeoMeta({
  title: "Beranda",
  ogTitle: 'Beranda',
  description: 'Selamat datang di smartnation.id',
})


const articleScroll = () => {
  const articleItem = document.querySelector('.article-list-item')

  articleItem.classList.add('article-list-item::-webkit-scrollbar')
  articleItem.classList.add('article-list-item::-webkit-scrollbar-thumb')
  articleItem.classList.add('article-list-item::-webkit-scrollbar-track')
}

</script>