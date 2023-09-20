<template>
    <hero-konstan />
    <section class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start align-content-start g-3">
          <div class="col-xl-8">
            <article class="article-section position-relative mb-5">
              <h1 class="berita-section-title" style="color: red;">Tentang ISNA</h1>
              <div class="row">
                <div class="col-5">
                  <div id="tentang"></div>
                </div>            
                <div class="col-7">
                  <h6 id="explain">Apa itu ISNA?</h6>
                  <div id="explain">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, optio quas dolore ab perspiciatis corporis laboriosam voluptatibus ad minima illo facere quibusdam, odit accusamus laborum rerum hic repellendus similique iste!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, optio quas dolore ab perspiciatis corporis laboriosam voluptatibus ad minima illo facere quibusdam, odit accusamus laborum rerum hic repellendus similique iste!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, optio quas dolore ab perspiciatis corporis laboriosam voluptatibus ad minima illo facere quibusdam, odit accusamus laborum rerum hic repellendus similique iste!
                  </div>
                </div>            
              </div>
            </article>
            
            <article class="article-section position-relative mb-3">
              <div class="d-flex flex-wrap justify-content-between g-0">
                <div>
                  <h5 class="berita-section-title" style="color: red;">Postingan Terkain ISNA</h5>
                </div>
                <div class="btn-group">
                  <button id="pilihTahun" aria-controls="pilihTahun" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pilih Tahun
                  </button>
                  <div class="dropdown-menu" aria-labelledby="pilihTahun">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column py-3">
                <ul class="list-group list-group-flush">
                  <li v-for="post in posts.slice(0, 5)" :key="post.id" class="list-group-item mx-0 px-0 ">
                    <div class="card border-0 rounded-0">
                      <div class="row justify-content-start align-items-start g-2">
                        <div class="col-lg-6 col-md-6">
                          <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
                            <NuxtImg :class="'card-img-top img-fluid rounded'" :src="post.thumbnail" :width="256"
                            :height="151" loading="lazy" :alt="post.title" />
                          </NuxtLink>
                        </div>
                        
                        <div class="col-lg-6 col-md-6">
                          <div class="card-body px-0 mx-0 px-md-1 mx-md-1 ">
                            <div class="d-flex justify-content-between g-2 mb-2">
                              <span class="article-info-tag ">Berita</span>
                              <span class="article-info-tag text-start text-secondary">{{
                                useFormatter(post.createdAt) }}</span>
                              </div>
                              
                              <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
                              :class="'article-title lh-base link-offset-2 link-underline link-underline-opacity-0 '">
                              {{ post.title.length >= 80
                                ? `${post.title.substring(0, 80)}...`
                                : post.title
                              }}
                            </NuxtLink>
                            <div class="article-desc mb-3" v-html="post.excerpt"></div>
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
  
  <style scoped>
  
  #tentang{
    background-color: #5D5D5D;
    z-index: 535;
    width: 100%;
    height: 350px;
  }
  
  #explain{
    font-family: Poppins;
    font-style: normal;
  }
  
  #pilihTahun{
    
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
// Set Meta SEO
useSeoMeta({
})
</script>