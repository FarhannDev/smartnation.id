<script lang="ts" setup>
import { posts, categories } from "~/utils/data/getInitialData";

const route = useRoute();
const { id } = route.params;
const categoryPostName: globalThis.Ref<string> = ref("");
// const categoryId: globalThis.Ref<number> = ref(83)
// const pageParams: globalThis.Ref<number> = ref(1)
// const per_page: globalThis.Ref<number> = ref(18)
// const imageSourceUrl: globalThis.Ref = ref("");

onBeforeMount(() => {
  function getCategoriesData() {
    return categories.find((category) => {
      const categoryId: string = id.toString();

      return category.slug === categoryId
        ? (categoryPostName.value = category.name)
        : null;
    });
  }

  getCategoriesData();
});

/*
 * Uncomment code fetching data from APImobile
 *
 */

// const config = useRuntimeConfig()

// const apiBaseUrl = config.public.apiBase;

// const { data: posts } = await useFetch(`/posts`, {
//   baseURL: apiBaseUrl,
//   transform: (posts: Posts[]) => {
//     return Array.from(new Map(posts.map(post => [post.title.rendered, post])).values())
//   }
// })

// const { data: categories } = await useFetch(`/categories`, {
//   baseURL: apiBaseUrl,
//   transform: (categories: Categories[]) => {
//     return categories.find(category => {
//       const initialCategory = id.toString()
//       if (category.slug === initialCategory) {
//         categoryId.value = category.id
//         categoryPostName.value = category.name
//       }
//     })
//   }
// })

// const { data: postsCategories } = await useFetch(`/posts?categories=${categoryId.value}&page?=${pageParams.value}&per_page=${per_page.value}`, {
//   baseURL: apiBaseUrl,
//   transform: (posts: Posts[]) => {
//     return posts.map(post => ({
//       id: post.id, slug: post.slug, title: post.title.rendered, excerpt: post.excerpt.rendered,
//       featured_media: post.featured_media, categories: post.categories, tags: post.tags, date: post.date,
//       modified: post.modified,
//     }))
//   }
// })

// const { data: postsMedia } = await useFetch(`/media`, {
//   baseURL: apiBaseUrl,
//   transform: (mediaImage: Media[]) => {
//     return postsCategories?.value.forEach(post => {
//       const mediaImageId: number = post.featured_media
//       if (mediaImageId) {
//         mediaImage.map((media) => {
//           imageSourceUrl.value = media.source_url
//         })
//       }
//     })
//   }
// })

useSeoMeta({
  title: `Berita Kategori ${categoryPostName.value}`,
  description: ``,
});
</script>

<template>
  <NuxtLayout name="page-layout">
    <template #hero>
      <HeroParallaxBackground v-for="(post, index) in posts.slice(0, 1)" :key="index" :text="'Daftar Berita'"
        :desc="`Daftar berita dari kategori ${categoryPostName}`" :background="post.thumbnail" />
    </template>

    <main id="content">
      <!-- Section berita start -->
      <section data-aos="fade-up" data-aos-duration="1500" class="berita-section-container position-relative py-5">
        <div class="container">
          <div class="row justify-content-start align-content-start g-5 py-5">
            <div class="col-lg-8 col-md-auto">
              <article class="article-section position-relative mb-3">
                <h1 class="berita-section-title">{{ categoryPostName }}</h1>

                <div class="d-flex flex-column py-3">
                  <ul class="list-group list-group-flush">
                    <li v-for="post in posts
                      .sort((a, b) => b.title.localeCompare(a.title))
                      .slice(0, 12)" :key="post.id" class="list-group-item mx-0 px-0">
                      <div class="card border-0 rounded-0">
                        <div class="row justify-content-start align-items-center g-0 g-lg-4">
                          <div class="col-lg-4 col-md-5">
                            <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                              <NuxtImg :class="'article-thumbnail'" :src="post.thumbnail" loading="lazy"
                                :alt="post.title" />
                            </NuxtLink>
                          </div>

                          <div class="col-lg-8 col-md-7 col-sm-auto">
                            <div class="card-body px-0 mx-0 px-md-2 mx-md-2">
                              <div class="d-flex justify-content-between g-2 mb-3">
                                <span class="article-info-tag">{{
                                  categoryPostName
                                }}</span>
                                <span class="article-info-tag text-start text-secondary">{{ useFormatter(post.createdAt)
                                }}</span>
                              </div>

                              <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                                :class="'article-title lh-base link-offset-2 link-underline link-underline-opacity-0 '">
                                {{
                                  post.title.length >= 60
                                  ? `${post.title.substring(0, 60)}...`
                                  : post.title
                                }}
                              </NuxtLink>
                              <div class="article-desc pt-2" v-html="post.excerpt.length >= 150
                                    ? `${post.excerpt.substring(0, 150)}...`
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
                <div v-show="posts.length >= 12" class="d-flex justify-content-center g-2 pt-3">
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
            <div class="col-lg-4 col-md-auto">
              <article>
                <h1 class="berita-section-title text-decoration-underline">
                  Terpopuler
                </h1>

                <div class="d-flex flex-column pt-4">
                  <div class="vstack g-3">
                    <ArticlesArticleRecomended v-for="(post, index) in posts
                      .sort((a, b) => a.title.localeCompare(b.title))
                      .slice(0, 10)" :key="post.id" :number="index" :postId="post.slug" :title="post.title" />
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
