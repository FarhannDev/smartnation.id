<script lang="ts" setup>
import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
import { categories } from "~/utils/data/getInitialCategoryPostData";
import { posts } from "~/utils/data/getInitialPostsData"


const route = useRoute();
const categoryId = route.params.id
const categoryPostsId: globalThis.Ref<number | undefined> = ref(139);
const categoryTitle: globalThis.Ref<string | undefined> = ref('')

const category = categories.find(category => category.slug === categoryId)

if (!category) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

categoryTitle.value = category.name
categoryPostsId.value = category.id


useSeoMeta({
  title: `Berita Kategori ${categoryTitle?.value}`,
  description: ``,
});


const colorMode: ColorModeInstance = useColorMode()

const postData = posts.filter(post => post.categories.find(cat => cat === category.id))
  .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))

const relatedPostsData = posts
  .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
  .slice(0, 10)


</script>

<template>
  <div>
    <LazyHeroParallaxBackground :text="'Daftar Berita'" :desc="`Daftar berita dari kategori ${categoryTitle}`"
      :background="'https://drive.google.com/uc?export=download&id=1ZC_bP2Pn8FppePARz0ZunSpsQXTFKPqV'" />

    <!-- Section berita start -->
    <section data-aos="fade-up" data-aos-duration="1500" class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start align-content-start g-5">
          <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-auto" v-if="postData.length">
            <article class="article-section position-relative mb-3">
              <LazyHeadingContentHeadingTitle :title="categoryTitle" />
              <LazyContentPostCardItemThumbnail :categoryId="category.id" :categoryName="category.name" />
              <LazyButtonPagination v-if="postData.length >= 8" />
            </article>
          </div>

          <div v-else class="col-xl-8 col-xxl-8 col-lg-12 col-md-auto">
            <div class="text-center mx-auto">
              <NuxtImg src="/images/ccsn_empty_page.png" class="img-fluid" loading="lazt" :width="342" :height="342" />
              <LazyHeadingContentHeadingTitle class="text-center" :title="'Berita Tidak Tersedia'" />
              <LazyHeadingContentHeadingTitle class="text-center"
                title="Untuk saat ini berita belum tersedia, Coba dengan kata kunci lain " />

            </div>
          </div>

          <div class="col-xl-4 col-xxl-4 col-lg-12">
            <article>
              <LazyHeadingContentHeadingTitle title="Terpopuler" class="text-decoration-underline" />
              <LazyContentRelatedArticle :posts="relatedPostsData" />
            </article>
          </div>
        </div>

      </div>
    </section>
    <!-- Section berita end -->

    <hr v-if="colorMode.preference === 'dark'" class="text-secondary" />

  </div>
</template>

