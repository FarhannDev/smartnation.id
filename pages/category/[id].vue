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

</script>
  
<template>
  <HeroParallaxBackground :text="'Daftar Berita'" :desc="`Daftar berita dari kategori ${categoryTitle}`"
    :background="'https://drive.google.com/uc?export=download&id=1ZC_bP2Pn8FppePARz0ZunSpsQXTFKPqV'" />
  <main id="content">
    <!-- Section berita start -->
    <section data-aos="fade-up" data-aos-duration="1500" class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start align-content-start g-5">
          <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-auto">
            <article class="article-section position-relative mb-3">
              <h1 class="berita-section-title">{{ categoryTitle }}</h1>

              <div class="d-flex flex-column ">
                <NewsCardItemListThumbnail :categoryId="categoryPostsId" :categoryName="categoryTitle" />
              </div>

              <!-- Pagination start -->
              <div class="d-flex justify-content-center g-2 pt-5">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item mx-2">
                      <a class="page-link border-0 text-dark" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item mx-1">
                      <a class="page-link text-center text-white border-0 rounded bg-danger" href="#">1</a>
                    </li>
                    <li class="page-item mx-1">
                      <a class="page-link text-center text-dark border-0 rounded bg-none" href="#">2</a>
                    </li>
                    <li class="page-item mx-1">
                      <a class="page-link text-center text-dark border-0 rounded bg-none" href="#">3</a>
                    </li>
                    <li class="page-item mx-2">
                      <a class="page-link border-0 text-dark" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- Pagination end -->
            </article>
          </div>
          <div class="col-xl-4 col-xxl-4 col-lg-12 ">
            <article>
              <h1 class="berita-section-title text-decoration-underline">
                Terpopuler
              </h1>

              <div class="d-flex flex-column">
                <div class="vstack g-3">
                  <ArticlesArticleListTitle :posts="posts.slice(0, 10)" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- Section berita end -->

    <hr v-if="colorMode.preference === 'dark'" class="text-secondary" />
  </main>
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
