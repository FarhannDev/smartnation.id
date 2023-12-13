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
  <div>
    <!-- hero start -->
    <LazyHeroParallaxBackground :text="'Daftar Berita'" :desc="`Daftar berita dari semua kategori`"
      :background="'https://drive.google.com/uc?export=download&id=1ZC_bP2Pn8FppePARz0ZunSpsQXTFKPqV'" />
    <!-- section berita start -->
    <section data-aos="fade-up" data-aos-duration="1500" class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start align-content-start g-5">
          <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-auto">
            <article class="article-section position-relative mb-3">
              <LazyHeadingContentHeadingTitleSecondary title="Berita Terbaru" />

              <div class="line-break"></div>

              <div class="row justify-content-arround g-4 py-3">
                <div class="col-xl-6 col-xxl-6 col-lg-6  col-md-12 article-list-container">
                  <LazyContentPostListFeatured
                    :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 1)" />

                </div>
                <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-12">
                  <LazyContentPostListCardThumbnail
                    :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(1, 5)" />
                </div>
              </div>
            </article>
            <article class="article-section position-relative mb-3">
              <LazyHeadingContentHeadingTitleSecondary title="Berita Terpopuler" />
              <div class="row justify-content-arround g-3 py-3">
                <LazyContentPostListCardFeaturedHorizontal
                  :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 2)" />
              </div>
            </article>
            <article class="d-block d-md-block d-lg-none d-xl-none">
              <LazyHeadingContentHeadingTitle title="Terpopuler" class="text-decoration-underline" />
              <LazyContentRelatedArticle :posts="posts.slice(0, 10)" />
            </article>
            <article
              v-for="category in categories.filter(category => category.id !== Number(88) && category.parent !== Number(88) && category.id !== Number(90) && category.parent !== Number(90))"
              :key="category.id" class="article-section position-relative mb-3 py-5">
              <div class="d-flex flex-wrap justify-content-between g-0">
                <LazyHeadingContentHeadingTitleSecondary :title="category.name" />
                <LazyButtonLinkViewArticle :link="category.slug" />
              </div>
              <div class="d-flex flex-column pt-3">
                <LazyContentPostCardItemThumbnail :categoryId="category.id" :categoryName="category.name" />
              </div>
            </article>
          </div>
          <div class="col-xl-4 col-xxl-4 col-lg-12 d-none d-lg-block d-xl-block d-xxl-block">
            <article>
              <LazyHeadingContentHeadingTitleSecondary title="Terpopuler" class="text-decoration-underline" />
              <LazyContentRelatedArticle :posts="posts.slice(0, 10)" />
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- section berita end -->
    <!-- Contact Subcribe Section Start -->
    <section class="subscribe-section-container py-5">
      <LazyContactsContactSubscribeForm title="Berlangganan Buletin Kami"
        description="Dapatkan pembaruan terbaru kami dengan info terbaru" />
    </section>
    <!-- Contact Subcribe Section End -->
  </div>
</template>

<style >
.line-break {
  position: relative;
  top: -5px;
  left: 1.2px;
  width: 51px;
  border: 1px solid #c70943;
}

.subscribe-section-container {
  background-color: #fff0f2;
}



.dark-mode .subscribe-section-container {
  background: #3d3d3d;
}
</style>
