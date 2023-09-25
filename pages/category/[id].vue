<template>
  <NuxtLayout name="page-layout">

    <template #hero>
      <HeroParallaxBackground text="Daftar Berita" :desc="`Daftar berita dari kategori ${id}`"
        background="/images/background/bg-berita.png" />
    </template>


    <main id="content">
      <!-- Section berita start -->
      <section data-aos="fade-up" data-aos-duration="1500" class="berita-section-container position-relative py-5">
        <div class="container">
          <div class="row justify-content-start align-content-start g-3">
            <div class="col-lg-8 col-md-10">
              <article class="article-section position-relative mb-3">
                <div class="d-flex flex-wrap justify-content-between g-0">
                  <div>
                    <h1 class="berita-section-title">{{ id }}</h1>
                  </div>
                </div>

                <div class="d-flex flex-column py-3">
                  <ul class="list-group list-group-flush">
                    <li v-for="post in posts.slice(0, 12)" :key="post.id" class="list-group-item mx-0 px-0 ">
                      <div class="card border-0 rounded-0">
                        <div class="row justify-content-start align-items-center g-2">
                          <div class="col-xl-4 col-lg-4 col-md-4">
                            <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                              <NuxtImg :class="'article-thumbnail'" :src="post.thumbnail" loading="lazy"
                                :alt="post.title" />
                            </NuxtLink>
                          </div>

                          <div class="col-xl-8 col-lg-8 col-md-8">
                            <div class="card-body px-0 mx-0 px-md-2 mx-md-2 ">
                              <div class="d-flex justify-content-between g-2 mb-3">
                                <span class="article-info-tag ">{{ id }}</span>
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
                <!-- Pagination start -->
                <div class="d-flex justify-content-center g-2 pt-3 ">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item mx-2">
                        <a class="page-link border-0 text-dark" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item mx-1 "><a class="page-link text-center text-white border-0 rounded bg-danger"
                          href="#">1</a></li>
                      <li class="page-item mx-1"><a class="page-link text-center text-dark border-0 rounded bg-none"
                          href="#">2</a>
                      </li>
                      <li class="page-item mx-1"><a class="page-link text-center text-dark border-0 rounded bg-none"
                          href="#">3</a>
                      </li>
                      <li class="page-item  mx-2">
                        <a class="page-link   border-0 text-dark" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!-- Pagination end -->
              </article>
            </div>
            <div class="col-lg-4">
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
      <!-- Section berita end -->

    </main>

  </NuxtLayout>
</template>



<style scoped>
.berita-section-title {
  color: var(--primary-600, #D71149);
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
  border: 1px solid #C70943;
}

.hero-image-parallax {
  position: relative;
  background-image: url('/images/background/bg-berita.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  width: 100%;
  height: 500px;
  scroll-behavior: smooth;
}



.hero-image-bg__gradient {
  padding: 0;
  height: 500px;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(102deg,
      rgba(166, 11, 64, 0.75) 16.57%,
      rgba(217, 217, 217, 0) 95.59%);
}

.hero-heading-container {
  position: absolute;
  top: 45%;
  z-index: 1000;
}

.hero-heading__title {
  color: var(--font-50, #F6F6F6);
  /* Font/Heading 1 Bold */
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 73.2px */
}

.hero-heading__desc {
  color: var(--Background, #FFF);

  /* Font/Title 1 */
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 37.2px */
}


@media (min-width: 992px) {
  .hero-image-parallax {
    min-height: 100vh;
    background-attachment: fixed;
  }

  .hero-image-bg__gradient {
    min-height: 100vh;
  }

  .hero-heading__title {
    font-size: 61px;
  }

  .hero-heading__desc {
    font-size: 31px;
  }

}

.hero-social-media-container {
  position: absolute;
  top: 37%;
  right: 10%;

}

.hero-social-media-container .social-media__icons {
  width: 32.567px;
  height: 30.588px;
}


.berita-section-title {
  color: var(--font-600, #D71149);
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
  overflow: hidden;
  color: var(--font-600, #5D5D5D);
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
  color: #D71149;
}

.article-desc {
  overflow: hidden;
  color: var(--font-600, #5D5D5D);
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

.article-thumbnail {
  width: 100%;
  height: auto;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
}


.hero-image-parallax {
  position: relative;
  background-image: url('/images/hero1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  width: 100%;
  height: 500px;
  scroll-behavior: smooth;
}



.hero-image-bg__gradient {
  padding: 0;
  height: 500px;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(102deg,
      rgba(166, 11, 64, 0.75) 16.57%,
      rgba(217, 217, 217, 0) 95.59%);
}

.hero-heading-container {
  position: absolute;
  top: 45%;
  z-index: 1000;
}

.hero-heading__title {
  color: var(--font-50, #F6F6F6);
  /* Font/Heading 1 Bold */
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 73.2px */
}

.hero-heading__desc {
  color: var(--Background, #FFF);

  /* Font/Title 1 */
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 37.2px */
}


@media (min-width: 992px) {
  .hero-image-parallax {
    min-height: 100vh;
    background-attachment: fixed;
  }

  .hero-image-bg__gradient {
    min-height: 100vh;
  }

  .hero-heading__title {
    font-size: 61px;
  }

  .hero-heading__desc {
    font-size: 31px;
  }

  .article-thumbnail {
    width: 256px;
    height: 151px;
  }


}

.hero-social-media-container {
  position: absolute;
  top: 45%;
  right: 10%;
}


.hero-social-media-container .social-media__icons {
  width: 32.567px;
  height: 30.588px;
}

.article-list-container {
  border-right: 0
}

@media (min-width: 992px) {
  .article-list-container {
    border-right: 1px solid var(--font-100, #E7E7E7);
  }

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

.article-list-title:hover {
  color: #D71149 !important;
}
</style>


<script lang="ts" setup>
import { posts } from '~/utils/data/getInitialData';

const route = useRoute()

const { id } = route.params
// Set Meta SEO
useSeoMeta({
  title: `Berita Kategori ${id}`,
  description: `Daftar berita dari kategori Citiasia inc ${id}`,
  author: "SmartNation",
  ogTitle: `Berita Kategori ${id}`,
  ogDescription: `Daftar berita dari kategori Citiasia inc ${id}`,
  ogType: "website",
  ogSiteName: "https://smartnation.vercel.app",
  ogUrl: 'https://smartnation.vercel.app',
})
</script>
