<script lang="ts" setup>
import { posts } from "~/utils/data/getInitialPostsData";


// Set Meta SEO
useSeoMeta({
  title: "Kumpulan Acara ISNA",
  ogTitle: "Kumpulan Acara ISNA",
  description: "Kumpulan Acara ISNA dari beberapa Kategori",
});

const postsData = posts.filter(post => post.categories.find(category => category === Number(90) || category === Number(91) || category === Number(92)))
  .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))

</script>

<template>
  <HeroParallaxBackground text="Kumpulan Acara ISNA" desc="Kumpulan Acara ISNA dari beberapa Kategori"
    background="/images/background/bg-isna.png" />

  <main id="content">

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-start align-content-start g-5">
          <div class="col-xl-8 col-xxl-8 col-lg-12 col-md-auto">
            <div class="d-flex flex-column">
              <LazyHeadingTitle title="Tentang ISNA" />

              <div class="row justify-content-start g-2">
                <div class="col-lg-4">
                  <NuxtImg :src="'/images/event_isna.png'" class="isna-images__logo" loading="lazy" />
                </div>
                <div class="col-lg-8">
                  <div class="d-flex flex-column">
                    <h3 class='isna-heading__title'>Apa itu ISNA?</h3>
                    <p> Indonesia Smart Nation Award (ISNA) merupakan acara dwi tahunan yang digelar oleh Citiasia, Inc. sejak 2015. ISNA bertujuan untuk memberikan penghargaan yang diberikan kepada Kota/Kabupaten yang inovasinya memberikan dampak secara luas kepada masyarakat. Melalui ISNA, Citiasia, Inc. berkomitmen untuk mendorong pertumbuhan dan pengembangan konsep kota cerdas dalam pengelolaan perkotaan demi kepentingan seluruh masyarakat Indonesia dan mewujudkan Indonesia Maju menjadi Smart Nation.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="d-flex justify-content-between">
              <div>
                <LazyHeadingTitle title="ISNA" />
              </div>

              <div class="dropdown" style="width: 150px">
                <button style="
                        width: 130px;
                        text-align: center;
                        border-radius: 4px;
                        vertical-align: top;
                      " class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Pilih Tahun
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item">2015</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item">2016</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item">2018</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item">2020</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-flex flex-column ">
              <ul class="list-group list-group-flush">
                <li v-for="post in postsData" :key="post.id" class="list-group-item mx-0 px-0">
                  <div class="card border-0 rounded-0">
                    <div class="row justify-content-start align-items-center g-3">
                      <div class="col-xl-5 col-xxl-4 col-lg-4  col-md-12 ">
                        <NuxtLink :to="`/events/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
                          <NuxtImg :class="'article-thumbnail'" :src="post.featured_media" loading="lazy"
                            :alt="post.title.rendered" />
                        </NuxtLink>
                      </div>

                      <div class="col-xl-7 col-xxl-8 col-lg-8 col-md-12">
                        <div class="card-body px-0 mx-0 px-md-2 mx-md-2">
                          <div class="d-flex justify-content-between g-3 mb-3">
                            <span class="article-info-tag">ISNA</span>
                            <span class="article-info-tag text-start text-secondary">{{ useFormatter(post.date_gmt)
                            }}</span>
                          </div>

                          <NuxtLink :to="`/events/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
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
          </div>

          <div class="col-xl-4 col-xxl-4 col-lg-12 ">
            <article>

              <LazyHeadingTitle class="text-decoration-underline" title="Terpopuler" />
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

  </main>
</template>


<style scoped>
#assetTentang {
  background-color: #5d5d5d;
  z-index: 535;
  width: 100%;
  height: 350px;
}

#explain {
  font-family: Poppins;
  font-style: normal;
}
.text-decoration-underline {
  margin-bottom: 25px !important;
}
p {
  text-align: justify;
}
.dropdown-item {
  margin-top: 25px;
  font-family: Poppins;
  font-style: normal;
  font-size: 20px;
  text-align: center;
  line-height: 15px;
  margin-bottom: 10px;
}

.dropdown-divider {
  width: 95px;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
}

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
