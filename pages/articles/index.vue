<script lang="ts" setup>
import { CategoryPostsType } from '~/utils/data/getInitialCategoryPostData';

// Set Meta SEO
useSeoMeta({
  title: "Berita",
  description: "Kumpulan Berita dari beberapa Kategori",
  ogTitle: "Daftar berita dari semua kategori",
  ogDescription: "Kumpulan Berita dari beberapa Kategori",
});



const { data: postsData } = await useFetch('/api/posts')

const { data: categoriesPostsData } = await useFetch('/api/categories', {
  transform: (categories: CategoryPostsType) => {
    return categories.filter(category => category.parent === 0).map(cat => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug
    }));
  }
})


</script>

<template>
  <!-- hero start -->
  <HeroParallaxBackground v-for="(post, index) in postsData.slice(0, 1)" :key="index" :text="'Daftar Berita'"
    :desc="`Daftar berita dari semua kategori`" :background="post.featured_media" />
  <!-- rendered content main -->
  <main id="content">
    <!-- section berita start -->
    <section data-aos="fade-up" data-aos-duration="1500" class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start align-content-start g-5">
          <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-auto">
            <article class="article-section position-relative mb-3">
              <h1 class="berita-section-title">Berita Terbaru</h1>

              <div class="row justify-content-arround g-4 py-3">
                <div v-for="post in postsData.slice(0, 1)" :key="post.id"
                  class="col-xl-6 col-xxl-6 col-lg-6  col-md-12 article-list-container">
                  <div class="card border-0 rounded-0 mb-3">
                    <NuxtLink :to="`/articles/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
                      <NuxtImg :class="'card-img-top img-fluid rounded article-thumbnail'" :src="post.featured_media"
                        :height="253" loading="lazy" :alt="post.title.rendered" />
                    </NuxtLink>
                    <div class="card-body px-0 mx-0">
                      <NuxtLink :to="`/articles/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
                        :class="'card-title text-start  lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
                        {{
                          post.title.rendered.length >= 80
                          ? `${post.title.rendered.substring(0, 80)}...`
                          : post.title.rendered
                        }}
                      </NuxtLink>

                      <div class="card-text text-start lh-base article-desc pt-2"
                        v-html="post.excerpt.rendered.substring(0, 120)"></div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-12">
                  <div class="d-flex flex-column justify-content-start g-2">
                    <div v-for="post in postsData
                          .sort((a, b) => b.date_gmt.localeCompare(a.date_gmt))
                          .slice(1, 5)" :key="post.id">
                      <div class="mb-3">
                        <div class="d-flex justify-content-arround ">
                          <NuxtLink :to="`/articles/${post.slug}`"
                            :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
                            <NuxtImg class="me-2" style="border-radius: 4px" :src="post.featured_media" :width="148"
                              :height="94" loading="lazy" :alt="post.title.rendered" />
                          </NuxtLink>
                          <div class="d-flex flex-column">
                            <span class="article-info-tag">Berita</span>
                            <NuxtLink :to="`/articles/${post.slug}`"
                              :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
                              :class="'article-list-title link-offset-2 link-underline link-underline-opacity-0 text-start fw-normal '">
                              {{
                                post.title.rendered.length >= 80
                                ? `${post.title.rendered.substring(0, 80)}...`
                                : post.title.rendered
                              }}
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="article-section position-relative mb-3">
              <h1 class="berita-section-title">Berita Terpopuler</h1>
              <div class="row justify-content-arround g-3 py-3">
                <div v-for="post in postsData.slice(0, 2)" :key="post.id" class="col-lg-6 col-md-6">
                  <div class="card border-0 rounded-0 mb-3">
                    <NuxtLink :to="`/articles/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
                      <NuxtImg :class="'card-img-top img-fluid rounded article-thumbnail'" :src="post.featured_media"
                        :height="253" loading="lazy" :alt="post.title.rendered" />
                    </NuxtLink>
                    <div class="card-body px-0 mx-0">
                      <div class="d-flex justify-content-between g-2 mb-2">
                        <span class="article-info-tag">Berita</span>
                        <span class="article-info-tag text-start text-secondary">{{ useFormatter(post.date_gmt)
                        }}</span>
                      </div>
                      <NuxtLink :to="`/articles/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
                        :class="'card-title text-start  lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
                        {{
                          post.title.rendered.length >= 80
                          ? `${post.title.rendered.substring(0, 80)}...`
                          : post.title.rendered
                        }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </article>


            <article class="d-block d-md-block d-lg-none d-xl-none">
              <h1 class="berita-section-title text-decoration-underline">
                Terpopuler Lainnya
              </h1>
              <div class="d-flex flex-column">
                <div class="vstack g-3">
                  <ArticlesArticleListTitle :posts="postsData
                    .sort((a, b) => b.title.rendered.localeCompare(a.title.rendered))
                    .slice(0, 10)
                    " />
                </div>
              </div>
            </article>
            <article v-for="category in categoriesPostsData" :key="category.id"
              class="article-section position-relative mb-3 py-5" data-aos="fade-up" data-aos-duration="1000">
              <div class="d-flex flex-wrap justify-content-between g-0">
                <div>
                  <h1 class="berita-section-title">{{ category.name }}</h1>
                </div>
                <span>
                  <NuxtLink :to="`/news/category/${category.slug}`" aria-label="Lihat Selengkapnya"
                    class="link-offset-2 link-underline link-underline-opacity-0 link-secondary article-link-title">
                    Selengkapnya
                  </NuxtLink>
                  <BootstrapIcon name="chevron-right" />
                </span>
              </div>
              <div class="d-flex flex-column">
                <ul class="list-group list-group-flush">
                  <li v-for="post in postsData.filter(post => post.categories.find(cat => cat === Number(category.id)))
                    .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
                    .slice(0, 5)" :key="post.id" class="list-group-item mx-0 px-0">
                    <div class="card border-0 rounded-0">
                      <div class="row justify-content-start align-items-center g-3">
                        <div class="col-xl-4 col-xxl-4 col-lg-4 col-md-5">
                          <NuxtLink :to="`/articles/${post.slug}`"
                            :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
                            <NuxtImg :class="'article-list__thumbnail '" :src="post.featured_media" loading="lazy"
                              :alt="post.title.rendered" />
                          </NuxtLink>
                        </div>
                        <div class="col-xl-8 col-xxl-8 col-lg-8 col-md-7">
                          <div class="card-body px-0 mx-0 px-md-2 mx-md-2">
                            <div class="d-flex justify-content-between g-2 mb-3">
                              <span class="article-info-tag">{{
                                category.name
                              }}</span>
                              <span class="article-info-tag text-start text-secondary">{{ useFormatter(post.date_gmt)
                              }}</span>
                            </div>
                            <NuxtLink :to="`/articles/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                              :class="'article-title lh-base link-offset-2 link-underline link-underline-opacity-0 '">
                              {{
                                post.title.rendered.length >= 80
                                ? `${post.title.rendered.substring(0, 80)}...`
                                : post.title.rendered
                              }}
                            </NuxtLink>
                            <div class="article-desc pt-2" v-html="post.excerpt.rendered.length >= 250
                                  ? `${post.excerpt.rendered.substring(0, 250)}...`
                                  : post.excerpt.rendered
                                "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div class="col-xl-4 col-xxl-4 col-lg-12 d-none d-lg-block d-xl-block d-xxl-block">
            <article>
              <h1 class="berita-section-title text-decoration-underline">
                Terpopuler Lainnya
              </h1>
              <div class="d-flex flex-column">
                <div class="vstack g-3">
                  <ArticlesArticleListTitle :posts="postsData
                    .sort((a, b) => b.title.rendered.localeCompare(a.title.rendered))
                    .slice(0, 10)
                    " />
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
    <!-- section berita end -->
    <!-- Section  subcribe start -->
    <section class="subscribe-section-container py-5">
      <div class="container">
        <Subscribe />
      </div>
    </section>
    <!-- Section subcribe end -->
  </main>
</template>

<style scoped>
.berita-section-title {
  color: var(--font-600, #5d5d5d);
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
  color: #5d5d5d;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  transition: ease-in 300ms;
}

.article-title:hover {
  color: #d71149 !important;
}

.article-desc {
  overflow: hidden;
  color: #888;
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
  color: var(--font-400, #888);

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
  min-height: 253px;
  opacity: 1;
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

.article-list-container {
  border-right: 0;
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

.article-list__thumbnail {
  width: 100%;
  height: auto;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
}

@media (min-width: 992px) {
  .article-list-container {
    border-right: 1px solid var(--font-100, #e7e7e7);
  }

  .article-list__thumbnail {
    width: 256px;
    height: 151px;
  }
}

.subscribe-section-container {
  background-color: #fff0f2;
}

.article-list-title:hover {
  color: #d71149 !important;
}

.dark-mode .card {
  background-color: #262626;
}

.dark-mode .berita-section-title {
  color: #d71149;
}

.dark-mode .article-title {
  color: #fafafa;
}

.dark-mode .article-list-title {
  color: #fafafa;
}

.dark-mode .article-desc {
  color: rgba(255, 255, 255, 0.9);
}

.dark-mode .article-list-container {
  border-right: 1px solid var(--font-100, #575757);
}

.dark-mode .article-info-tag {
  color: rgba(255, 255, 255, 0.9) !important;
}

.dark-mode .article-link-title {
  color: rgba(255, 255, 255, 0.9) !important;
}

.dark-mode .list-group {
  background: #3d3d3d;
}

.dark-mode .list-group-flush {
  background: #3d3d3d;
}

.dark-mode .list-group-item {
  background: #3d3d3d;
}

/* .dark-mode .list-group,
.list-group-flush .list-group-item {
  background: #3D3D3D;

} */

.dark-mode .subscribe-section-container {
  background: #3d3d3d;
}
</style>
