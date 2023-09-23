<template>
  <NuxtLayout name="page-layout">

    <template #hero>
      <HeroParallaxBackground text="Daftar Berita" desc="Daftar berita dari semua kategori"
        background="/images/background/bg-berita.png" />
    </template>

    <section class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start align-content-start g-5">
          <div class="col-xl-8">
            <article class="article-section position-relative mb-3">
              <h1 class="berita-section-title">Berita Terbaru</h1>
              <div class="line-break"></div>

              <div class="row justify-content-arround g-3 py-3">
                <div v-for="post in posts.slice(0, 1)" :key="post.id"
                  class="col-lg-6 col-xxl-6 col-md-12 article-list-container">
                  <div class="card border-0 rounded-0 mb-3">

                    <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                      <NuxtImg :class="'card-img-top img-fluid rounded article-thumbnail'" :src="post.thumbnail"
                        :height="253" loading="lazy" :alt="post.title" />
                    </NuxtLink>
                    <div class="card-body px-0 mx-0">

                      <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                        :class="'card-title text-start  lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
                        {{ post.title.length >= 80
                          ? `${post.title.substring(0, 80)}...`
                          : post.title
                        }}
                      </NuxtLink>

                      <div class="card-text text-start lh-base article-desc pt-2" v-html="post.excerpt"> </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-6 col-md-7 ">
                  <div class="d-flex flex-column justify-content-start g-2">
                    <div v-for="post in posts.slice(0, 4)" :key="post.id">
                      <div class="mb-3">
                        <div class="d-flex justify-content-between">
                          <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                            <NuxtImg class="me-2" style="border-radius: 4px;" :src="post.thumbnail" :width="148"
                              :height="94" loading="lazy" :alt="post.title" />
                          </NuxtLink>
                          <div>
                            <div class="d-flex flex-column">
                              <span class="article-info-tag ">Berita</span>
                              <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                                :class="'article-list-title link-offset-2 link-underline link-underline-opacity-0 text-start text-secondary  fw-normal '"
                                style="color: #5D5D5D;">
                                {{ post.title.length >= 80
                                  ? `${post.title.substring(0, 80)}...`
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

                <div class="col-lg-6 col-xxl-6 col-md-5 d-lg-none d-block">
                  <article>
                    <h1 class="berita-section-title">Terpopuler</h1>
                    <div class="line-break"></div>

                    <div class="d-flex flex-column pt-4">
                      <div class="vstack g-3">
                        <ArticlesArticleRecomended v-for="(post, index) in posts.slice(0, 10)" :key="post.id"
                          :number="index" :postId="post.slug" :title="post.title" />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </article>
            <article class="article-section position-relative mb-3">
              <h1 class="berita-section-title">Berita Terpopuler</h1>
              <div class="line-break"></div>
              <div class="row justify-content-arround g-3 py-3">
                <div v-for="post in posts.slice(0, 2)" :key="post.id" class="col-lg-6 col-xxl-6 col-md-6">
                  <div class="card border-0 rounded-0 mb-3">

                    <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                      <NuxtImg :class="'card-img-top img-fluid rounded article-thumbnail'" :src="post.thumbnail"
                        :height="253" loading="lazy" :alt="post.title" />
                    </NuxtLink>
                    <div class="card-body px-0 mx-0">

                      <div class="d-flex justify-content-between g-2 mb-2">
                        <span class="article-info-tag ">Berita</span>
                        <span class="article-info-tag text-start text-secondary">{{
                          useFormatter(post.createdAt) }}</span>
                      </div>

                      <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                        :class="'card-title text-start  lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
                        {{ post.title.length >= 80
                          ? `${post.title.substring(0, 80)}...`
                          : post.title
                        }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="article-section position-relative mb-3">
              <div class="d-flex flex-wrap justify-content-between g-0">
                <div>
                  <h1 class="berita-section-title">Berita</h1>
                  <div class="line-break"></div>
                </div>

                <span>
                  <NuxtLink :to="`/category/berita`" aria-label="Lihat Selengkapnya"
                    class="link-offset-2 link-underline link-underline-opacity-0 link-secondary article-link-title">
                    Selengkapnya
                  </NuxtLink>
                  <BootstrapIcon name="chevron-right" />
                </span>
              </div>

              <div class="d-flex flex-column py-3">
                <ul class="list-group list-group-flush">
                  <li v-for="post in posts.sort().reverse().slice(0, 5)" :key="post.id"
                    class="list-group-item mx-0 px-0 ">
                    <div class="card border-0 rounded-0">
                      <div class="row justify-content-start align-items-center g-2">
                        <div class="col-xl-4 col-lg-4 col-md-4">
                          <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                            <NuxtImg :class="'article-list__thumbnail '" :src="post.thumbnail" loading="lazy"
                              :alt="post.title" />
                          </NuxtLink>
                        </div>

                        <div class="col-xl-8 col-lg-8 col-md-8">
                          <div class="card-body px-0 mx-0 px-md-2 mx-md-2 ">
                            <div class="d-flex justify-content-between g-2 mb-3">
                              <span class="article-info-tag ">Berita</span>
                              <span class="article-info-tag text-start text-secondary">{{
                                useFormatter(post.createdAt) }}</span>
                            </div>

                            <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                              :class="'article-title lh-base link-offset-2 link-underline link-underline-opacity-0 '">
                              {{ post.title.length >= 50
                                ? `${post.title.substring(0, 50)}...`
                                : post.title
                              }}
                            </NuxtLink>
                            <div class="article-desc pt-2" v-html="post.excerpt.length >= 70
                                  ? `${post.excerpt.substring(0, 70)}...`
                                  : post.excerpt
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
          <div class="col-xl-4  col-md-6 d-lg-block d-none">
            <article>
              <h1 class="berita-section-title">Terpopuler</h1>
              <div class="line-break"></div>

              <div class="d-flex flex-column pt-4">
                <div class="vstack g-3">

                  <ArticlesArticleRecomended v-for="(post, index) in posts.slice(0, 10)" :key="post.id" :number="index"
                    :postId="post.slug" :title="post.title" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>



    <!-- Section  subcribe start -->
    <section class="position-relative py-5 " style="background-color: #FFF0F2;">
      <div class="container">
        <Subscribe />
      </div>
    </section>

  </NuxtLayout>
</template>

<style scoped>
.berita-section-title {
  color: var(--font-600, #5D5D5D);
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
  border: 1px solid #C70943;
}


.article-title {
  color: #5D5D5D;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  transition: ease-in 300ms;
}

.article-title:hover {
  color: #D71149;
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
  color: var(--font-500, #6D6D6D);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  /* 19.2px */
}

.article-info-tag {
  color: var(--primary-600, #D71149);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 19.2px */
}

.article-list-container {
  border-right: 0
}


.article-list-title {
  margin-top: 5px;
  color: var(--font-600, #5D5D5D);
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
    border-right: 1px solid var(--font-100, #E7E7E7);
  }

  .article-list__thumbnail {
    width: 256px;
    height: 151px;
  }

}

.article-list-title:hover {
  color: #D71149 !important;
}
</style>

<script lang="ts" setup>
import { posts } from '~/utils/data/getInitialData';

// Set Meta SEO
useSeoMeta({
  title: "Berita",
  description: 'Kumpulan Berita dari beberapa Kategori',
  ogTitle: 'Berita',
  ogDescription: 'Kumpulan Berita dari beberapa Kategori',
})


</script>