<template>
  <HeroParallaxBackground text="Hubungi Kami" desc="Jangan ragu untuk menghubungi kami."
    background="/images/background/bg-contact-me.png" />
  <section class="berita-section-container position-relative py-5">
    <div class="container">
      <div class="row justify-content-start align-content-start g-3">
        <div class="col-xl-8">
          <article class="article-section position-relative mb-5" id="tentang" :hidden="isHidden">
            <h1 class="berita-section-title" style="color: red;">Tentang ISNA</h1>
            <div class="row">
              <div class="col-5">
                <div id="assetTentang"></div>
              </div>
              <div class="col-7">
                <h6 id="explain">Apa itu ISNA?</h6>
                <div id="explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, optio quas dolore ab perspiciatis
                  corporis laboriosam voluptatibus ad minima illo facere quibusdam, odit accusamus laborum rerum hic
                  repellendus similique iste!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, optio quas dolore ab perspiciatis
                  corporis laboriosam voluptatibus ad minima illo facere quibusdam, odit accusamus laborum rerum hic
                  repellendus similique iste!
                </div>
              </div>
            </div>
          </article>

          <article class="article-section position-relative mb-3">
            <div class="d-flex flex-wrap justify-content-between g-0">
              <div>
                <h5 class="berita-section-title" style="color: red;">Postingan Terkini ISNA</h5>
              </div>
              <div class="dropdown" style="width: 150px;">
                <button style="width: 130px; text-align: center; border-radius: 4px; vertical-align:top;"
                  class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Pilih Tahun
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a @click="hide" class="dropdown-item">2015</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a @click="hide" class="dropdown-item">2016</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a @click="hide" class="dropdown-item">2018</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a @click="hide" class="dropdown-item">2020</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-flex flex-column py-3">
              <ul class="list-group list-group-flush">
                <li v-for="post in posts.slice(0, 12)" :key="post.id" class="list-group-item mx-0 px-0 ">
                  <div class="card border-0 rounded-0">
                    <div class="row justify-content-start align-items-center g-2">
                      <div class="col-xl-4 col-lg-4 col-md-4">
                        <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                          <NuxtImg :class="'article-thumbnail__acara'" :src="post.thumbnail" loading="lazy"
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
          </article>
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
        </div>
        <div class="col-xl-4  col-md-6 d-lg-block d-none">
          <article>
            <h5 class="berita-section-title" style="color: #ff0000; text-decoration:underline">Terpopuler</h5>
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
</template>

<script lang="ts">
export default {
  data(){
    return{
      isHidden: false
    }
  },
  methods:{
    hide:function(){
      this.isHidden=true;
    }
  }
}
</script>

<style scoped>
#assetTentang {
  background-color: #5D5D5D;
  z-index: 535;
  width: 100%;
  height: 350px;
}

#explain {
  font-family: Poppins;
  font-style: normal;
}

.dropdown-item {
  margin-top: 25px;
}

a {
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

.article-thumbnail__acara {
  width: 100%;
  height: auto;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
}

.berita-section-title {
  color: var(--font-600, #5D5D5D);
  font-family: Poppins;
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
// Set Meta SEO
useSeoMeta({
})
</script>