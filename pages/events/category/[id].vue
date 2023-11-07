<script lang="ts" setup>
import { categories } from "~/utils/data/getInitialCategoryPostData";
import { posts } from "~/utils/data/getInitialPostsData";


const route = useRoute();
const categoryId = route.params.id
const categoryPostsId: globalThis.Ref<number | undefined> = ref(139);
const categoryTitle: globalThis.Ref<string | undefined> = ref('')
const categoryDescription: globalThis.Ref<string | undefined> = ref('')
const categoryParentId: globalThis.Ref<number | undefined> = ref(0)

const category = categories.find(category => category.slug === categoryId)

if (!category) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

categoryTitle.value = category.name
categoryPostsId.value = category.id
categoryDescription.value = category.description
categoryParentId.value = category.parent



const eventsData = posts.filter(post => post.categories.find(category => category === categoryPostsId.value))
  .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
  ?.slice(0, 12)


const isnaYearsData = ref([
  {
    id: 1,
    value: 2015,
  },
  {
    id: 2,
    value: 2016,
  },
  {
    id: 3,
    value: 2018,
  },
  {
    id: 4,
    value: 2020,
  },
  {
    id: 5,
    value: 2022,
  },
])

const isnaValues: globalThis.Ref<string | undefined> = ref('')

useSeoMeta({
  title: `Berita Kategori ${categoryTitle?.value}`,
  description: `Kumpulan Acara ISNA dari beberapa Kategori`,
});
</script>

<template>
  <HeroParallaxBackground :text="`Kumpulan Acara ${categoryTitle}`" :desc="`Kumpulan Acara ISNA dari beberapa Kategori`"
    :background="'/images/background/bg-isna.png'" />
  <main id="content">
    <!-- Section berita start -->
    <section data-aos="fade-up" data-aos-duration="1500" class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start align-content-start g-5">
          <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-auto">
            <div class="d-flex flex-column">
              <LazyHeadingTitle :title="`Tentang ${categoryTitle}`" />

              <div class="row justify-content-start g-2">
                <div class="col-lg-4 d-none d-lg-block d-xl-block">
                  <NuxtImg :src="'/images/event_isna.png'" class="isna-images__logo" loading="lazy" />
                </div>
                <div class="col-lg-8">
                  <div class="d-flex flex-column">
                    <h3 class='isna-heading__title'>Apa itu {{ categoryTitle }}?</h3>
                    <p class="isna-heading__description">{{ categoryDescription }}
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="d-flex justify-content-between py-3">
              <h1 class="berita-section-title">{{ categoryTitle }}</h1>

              <div v-if="categoryPostsId === Number(90) || categoryParentId === Number(90)">
                <div class="dropdown" style="width: 150px">
                  <button class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Pilih Tahun
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li v-for="isna in isnaYearsData" :key="isna.id"><a class="dropdown-item">{{ isna.value }}</a></li>
                  </ul>
                </div>

              </div>
            </div>


            <div>
              <div class="d-flex flex-column ">
                <ul v-if="eventsData" class="list-group list-group-flush">
                  <li v-for="post in eventsData" :key="post.id" class="list-group-item mx-0 px-0">
                    <div class="card border-0 rounded-0">
                      <div class="row justify-content-start align-items-center g-3">
                        <div class="col-xl-4 col-xxl-4 col-lg-4  col-md-12 ">
                          <NuxtLink :to="`/events/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
                            <NuxtImg :class="'article-thumbnail'" :src="post.featured_media" loading="lazy"
                              :alt="post.title.rendered" />
                          </NuxtLink>
                        </div>

                        <div class="col-xl-8 col-xxl-8 col-lg-8 col-md-12">
                          <div class="card-body px-0 mx-0 px-md-2 mx-md-2">
                            <div class="d-flex justify-content-between g-2 mb-3">
                              <span class="article-info-tag">{{
                                categoryTitle
                              }}</span>
                              <span class="article-info-tag text-start text-secondary">{{ useFormatter(post.date_gmt)
                              }}</span>
                            </div>

                            <NuxtLink :to="`/events/${post.slug}`"
                              :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
                              :class="'article-title lh-base link-offset-2 link-underline link-underline-opacity-0 '">
                              {{
                                post.title.rendered.length >= 80
                                ? `${post.title.rendered.substring(0, 80)}...`
                                : post.title.rendered
                              }}
                            </NuxtLink>
                            <div class="article-desc pt-2" v-html="post.excerpt.rendered.length >= 120
                                  ? `${post.excerpt.rendered.substring(0, 120)}...`
                                  : post.excerpt.rendered
                                "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- Pagination start -->
              <div v-show="posts.length >= 12" class="d-flex justify-content-center g-2 pt-5">
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
            </div>


          </div>
          <div class="col-xl-4 col-xxl-4 col-lg-12 ">
            <article>
              <h1 class="berita-section-title text-decoration-underline">
                Terpopuler
              </h1>

              <div class="d-flex flex-column">
                <div class="vstack g-3">
                  <ArticlesArticleListTitle
                    :posts="posts.filter(post => post.categories.find(category => category === Number(90))).sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 10)" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- Section berita end -->
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


.isna-images__logo {
  background-size: cover;
  background-repeat: no-repeat;
  /* object-position: center; */
  width: 250px;
  height: 250px;
  border-radius: 4px;

}

.isna-heading__title {
  overflow: hidden;
  color: var(--font-600, #5D5D5D);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  /* 19.2px */
}

.dropdown-item {
  margin-bottom: 10px;

  color: var(--font-600, #5D5D5D);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-align: center;
  /* margin: 0 auto;
  width: 124px; */

}

.dropdown-item:hover {
  color: var(--primary-600, #D71149);
}

.dropdown-item:focus {
  color: var(--primary-600, #D71149);
  background: transparent;
  outline: none;
  border: none;
}

.dropdown-menu {
  /* position: absolute; */
  width: 124px;
  padding: 24px;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid var(--font-100, #E7E7E7);
  background: var(--Background, #FFF);
  margin-top: 13px !important;
}

.dropdown-divider {
  width: 95px;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
}


.dropdown-toggle {
  /* width: 100%; */
  width: 100%;
  text-align: center;
  border-radius: 4px;
  vertical-align: top;
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

.dark-mode .isna-heading__title {
  color: rgba(255, 255, 255, 0.9);
}
</style>
