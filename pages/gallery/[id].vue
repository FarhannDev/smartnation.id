<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from "#vue-router"
import { posts } from "~/utils/data/getInitialPostsData";
import { categories } from "~/utils/data/getInitialCategoryPostData";
import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";

definePageMeta({
  layout: "content-layout",
  layoutTransition: {
    name: 'slide-in',
    mode: 'out-in'
  },
  pageTransition: { name: 'fade', mode: 'out-in' }

})

const route: RouteLocationNormalizedLoaded = useRoute()
const galleryId = ref(route.params.id)
const pageTitle: globalThis.Ref<string | undefined> = ref('')
const pageDescription: globalThis.Ref<string | undefined> = ref('')
const albumsId = ref(0)


const categoriesData = categories.filter(category => category.slug === route.params.id)[0]


if (!categoriesData) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Halaman Tidak Ditemukan!'
  })
}

pageTitle.value = `Album ${categoriesData.name}`;
pageDescription.value = categoriesData.description;
albumsId.value = categoriesData.id

useSeoMeta({
  title: `${pageTitle.value} - Smart Nation`,
  description: pageDescription.value,
  ogTitle: `${pageTitle.value} - Smart Nation`,
  ogDescription: pageDescription.value,
})

const albumsData = posts.filter(post => post.categories.find(category => category === categoriesData.id))
  .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))


const categoriesDataAlbums = categories.filter(category =>
  category.id === Number(90) ||
  category.id === Number(91) ||
  category.id === Number(92) ||
  category.id === Number(93) ||
  category.id === Number(94) ||
  category.id === Number(155)
)
  .sort((a, b) => b.name.localeCompare(a.name))
  .slice(0, 3)


const colorMode: ColorModeInstance = useColorMode()

</script>


<template>
  <section class="py-5 mt-5">

    <div class="container">
      <div class="row justify-content-start g-3">
        <div class="col-lg-7 col-md-12 col-sm-12 me-5">
          <div class="d-flex flex-column">
            <h1 class="event-heading__title">{{ pageTitle }}</h1>
            <div class="event-albums__images__container">

              <Swiper v-if="albumsData" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
                :slides-per-view="1" :space-between="50" :grabCursor="true" :navigation="{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }" :effect="'creative'" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}" class="custom-swiper">
                <SwiperSlide v-for="albums in albumsData" :key="albums.id">
                  <NuxtImg class="event-albums__images " :src="albums.featured_media" :alt="albums.title.rendered"
                    loading="lazy" :quality="50" format="webp" />
                </SwiperSlide>
                <!-- Custom Navigation -->
                <div class="custom-navigation">
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>
                </div>
              </Swiper>
            </div>
            <div class="event-albums__description__container">
              <div class="event-albums__description" v-html="pageDescription"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <h1 class="event-heading__title__albums">Album Lainnya</h1>
          <div class="d-flex flex-column pt-3">
            <div v-for="albums in categoriesDataAlbums" :key="albums.id">
              <figure class="figure">
                <NuxtLink :to="`/gallery/${albums.slug}`" :aria-label="`Album ${albums.name}`" target="_top">
                  <NuxtImg :src="`https://drive.google.com/uc?export=download&id=1cDzj6ZUrHyGEAeXzh2P-3AjWwUonmtqc`"
                    class="figure-img" alt="Album ISNA 2020" loading="lazy" :quality="50" format="webp" />
                  <figcaption class="figure-caption">{{ `Album ${albums.name}` }} </figcaption>
                </NuxtLink>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr v-if="colorMode.preference === 'dark'" class="text-secondary" />
</template>

<style scoped>
.event-heading__title {
  color: #CE2F2F;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 13px;
  /* 37.2px */
}

.event-heading__title__albums {
  color: var(--danger-600, #CE2F2F);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 22.5px */
}

.event-albums__images {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  width: 100%;
  height: 433.57px;
  border-radius: 12px;
  filter: brightness(50%);
}

.event-albums__images__container {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.event-albums__description {
  color: var(--font-800, #454545);
  text-align: justify;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
}

.swiper-button-next {
  width: 32px;
  height: 32px;
  color: #fff;
}

.swiper-button-prev {
  width: 32px;
  height: 32px;
  color: #fff;
}

.custom-swiper {
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 0;
}


.figure {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 0;
}

.figure .figure-img {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  background: linear-gradient(180deg, rgba(50, 50, 50, 0.00) 0%, rgba(39, 39, 39, 0.50) 100%);
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(50%);
}

.figure .figure-caption {
  color: var(--font-100, #E7E7E7);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  position: absolute;
  top: 150px;
  left: 20px;
}



@media (min-width: 1400px) {
  .event-heading__title {
    font-size: 31px;
  }
}

/*
   dark mode
*/

.dark-mode .event-albums__description {
  color: #fff;
}
</style>

