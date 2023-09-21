<template>
  <NuxtLayout name="content-layout">
    <section class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start g-3 py-5">
          <div class="col-12 col-lg-8 col-md-12 col-sm-12 ">

            <!-- Article Content Start -->
            <section class="article-details-container">
              <div class="d-grid gap-3">

                <div class="article-details__title__wrapper">
                  <h1 class="article-details__title"> {{ post.title }}</h1>
                </div>

                <div class="article-details__info__wrapper">
                  <div class="d-flex flex-wrap justify-content-start g-2">
                    <div class="article-details__info__created me-3">
                      <BootstrapIcon name="clock" /> {{ useFormatter(post.createdAt) }}
                    </div>
                    <div class="article-details__info__comments me-3">
                      <BootstrapIcon name="chat" /> 10
                    </div>
                    <span class="article-details__info__views me-3">
                      <BootstrapIcon name="eye" /> 10
                    </span>
                  </div>
                </div>

                <div class="article-details__content__wrapper">
                  <div class="article-details__content__cover__wrapper">
                    <NuxtImg class="img-fluid article-details__cover" :src="post.thumbnail" :height="433"
                      :alt="post.title" />
                  </div>
                  <div class="article-details__content__tags">
                    <div class="d-flex flex-wrap justify-content-start g-2 py-3">
                      <button v-for="category in post.categories" :key="category" type="button"
                        class="btn me-2 my-1 btnCategory">{{
                          category }}</button>
                    </div>
                  </div>

                  <div v-html="post.content" class="article-details__content"></div>

                  article-details__content__share__medsos
                  article-details__content__share__medsos
                  article-details__content__share__medsos
                  <div class="article-details__content__share pt-3">
                    <div class="d-flex flex-wrap justify-content-end g-2">
                      <NuxtLink to="/" target="_blank" rel="noopener" title="Bagikan Ke Twitter"
                        aria-label="Bagikan Ke Twiter"
                        class="link-offset-2 link-underline link-underline-opacity-0 me-2 ">
                        <BootstrapIcon name="twitter" class="article-details__content__share__medsos" />
                      </NuxtLink>
                      <NuxtLink to="/" target="_blank" rel="noopener" title="Bagikan Ke Twitter"
                        aria-label="Bagikan Ke Twiter"
                        class="link-offset-2 link-underline link-underline-opacity-0 me-2 ">
                        <BootstrapIcon name="facebook" class="article-details__content__share__medsos" />
                      </NuxtLink>
                      <NuxtLink to="/" target="_blank" rel="noopener" title="Bagikan Ke Twitter"
                        aria-label="Bagikan Ke Twiter"
                        class="link-offset-2 link-underline link-underline-opacity-0 me-2 ">
                        <BootstrapIcon name="instagram" class="article-details__content__share__medsos" />
                      </NuxtLink>
                    </div>


                  </div>

                </div>
              </div>
            </section>
            <!-- Article Content End -->
            <!-- Article Comments Start -->
            <section class="article-comments-container position-relative py-5">

              <div class="d-flex flex-column justify-content-start g-2">
                <div class="container" style="border: 1.5px solid #D1D1D1; padding: 22px 30px; border-radius: 24px;">
                  <p class="titleComment">Komentar</p>
                  <p class="descComment">Alamat Email Anda Tidak Akan Dipublikasikan. Bidang yang Wajib Ditandai *</p>
                  <div class="mb-3">
                    <textarea class="form-control commentTextArea" id="exampleFormControlTextarea1" rows="7"></textarea>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <input type="text" class="form-control text-center nameForm" id="exampleFormControlInput1"
                        placeholder="Nama Lengkap">
                    </div>
                    <div class="col-3">
                      <input type="email" class="form-control text-center emailForm" id="exampleFormControlInput2"
                        placeholder="Alamat Email">
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control text-center webForm" id="exampleFormControlInput3"
                        placeholder="Web URL">
                    </div>
                  </div>
                  <div class="form-check pt-3 pb-2">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label labelCheckBox" for="flexRadioDefault1">
                      Simpan nama, email, dan situs web saya pada peramban ini untuk komentar saya berikutnya.
                    </label>
                  </div>
                  <button type="button" class="btn btnComment">KIRIM</button>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-start g-2 py-5">

                <div class="article-comments-card mb-3">
                  <div class="d-flex justify-content-start align-content-start">
                    <NuxtImg src="/images/user1.png" class="rounded  me-3" :width="70" :height="70" />
                    <div class="d-flex flex-column justify-content-start g-2">
                      <div class="article-comments__name">Atika Putri</div>
                      <div class="article-comments__created">30 Menit yang lalu</div>
                      <div class="article-comments__content">Wahh Sangat Menarik</div>
                      <div class="article-comments__action ">
                        <div class="hstack gap-3">
                          <span class="d-inline">
                            <BootstrapIcon name="hand-thumbs-up" /> 0
                          </span>
                          <span class="d-inline ">
                            <BootstrapIcon name="hand-thumbs-down" /> 0
                          </span>
                          <span class="d-inline ">
                            Balas
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="article-comments-card mb-3">
                  <div class="d-flex justify-content-start align-content-start">
                    <NuxtImg src="/images/user1.png" class="rounded  me-3" :width="70" :height="70" />
                    <div class="d-flex flex-column justify-content-start g-2">
                      <div class="article-comments__name">Atika Putri</div>
                      <div class="article-comments__created">30 Menit yang lalu</div>
                      <div class="article-comments__content">Wahh Sangat Menarik</div>
                      <div class="article-comments__action ">
                        <div class="hstack gap-3">
                          <span class="d-inline">
                            <BootstrapIcon name="hand-thumbs-up" /> 0
                          </span>
                          <span class="d-inline ">
                            <BootstrapIcon name="hand-thumbs-down" /> 0
                          </span>
                          <span class="d-inline ">
                            Balas
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="article-comments-card mb-3">
                  <div class="d-flex justify-content-start align-content-start">
                    <NuxtImg src="/images/user1.png" class="rounded  me-3" :width="70" :height="70" />
                    <div class="d-flex flex-column justify-content-start g-2">
                      <div class="article-comments__name">Atika Putri</div>
                      <div class="article-comments__created">30 Menit yang lalu</div>
                      <div class="article-comments__content">Wahh Sangat Menarik</div>
                      <div class="article-comments__action ">
                        <div class="hstack gap-3">
                          <span class="d-inline">
                            <BootstrapIcon name="hand-thumbs-up" /> 0
                          </span>
                          <span class="d-inline ">
                            <BootstrapIcon name="hand-thumbs-down" /> 0
                          </span>
                          <span class="d-inline ">
                            Balas
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="article-comments-card mb-3">
                  <div class="d-flex justify-content-start align-content-start">
                    <NuxtImg src="/images/user1.png" class="rounded  me-3" :width="70" :height="70" />
                    <div class="d-flex flex-column justify-content-start g-2">
                      <div class="article-comments__name">Atika Putri</div>
                      <div class="article-comments__created">30 Menit yang lalu</div>
                      <div class="article-comments__content">Wahh Sangat Menarik</div>
                      <div class="article-comments__action ">
                        <div class="hstack gap-3">
                          <span class="d-inline">
                            <BootstrapIcon name="hand-thumbs-up" /> 0
                          </span>
                          <span class="d-inline ">
                            <BootstrapIcon name="hand-thumbs-down" /> 0
                          </span>
                          <span class="d-inline ">
                            Balas
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="article-comments-card mb-3">
                  <div class="d-flex justify-content-start align-content-start">
                    <NuxtImg src="/images/user1.png" class="rounded  me-3" :width="70" :height="70" />
                    <div class="d-flex flex-column justify-content-start g-2">
                      <div class="article-comments__name">Atika Putri</div>
                      <div class="article-comments__created">30 Menit yang lalu</div>
                      <div class="article-comments__content">Wahh Sangat Menarik</div>
                      <div class="article-comments__action ">
                        <div class="hstack gap-3">
                          <span class="d-inline">
                            <BootstrapIcon name="hand-thumbs-up" /> 0
                          </span>
                          <span class="d-inline ">
                            <BootstrapIcon name="hand-thumbs-down" /> 0
                          </span>
                          <span class="d-inline ">
                            Balas
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- Article Comments End -->
          </div>
          <div class="col-12 col-lg-4 col-sm-12">
            <div class="d-flex flex-column justify-content-start g-0 px-md-3 mx-md-2 ">
              <HeadingTitle class="text-capitalize fw-bold fs-5 " title="Berita Terpopuler" />
              <div class="d-grid gap-4 py-3 ">
                <PostsPostItem v-for="post in posts.sort().reverse().slice(0, 5)" :key="post.id" :postId="post.slug"
                  :title="post.title" :featured-media="post.thumbnail" :categories="post.categories"
                  :dateTime="post.createdAt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>


  <!-- <div class="border-0 text-center p-2 position-fixed w-100 z-1" style="background-color: #A60B40;">
    <NuxtLink to="/" class="link-offset-2 link-underline link-underline-opacity-0 text-white">{{ post.title.length > 50
      ? `${post.title.substring(0, 50)}...`
      : post.title
    }}

    </NuxtLink>
  </div> -->
</template>

<style scoped>
.article-details__title {
  color: var(--danger-600, #CE2F2F);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 28.8px */
}

.article-details__content {
  color: var(--font-800, #454545);
  text-align: justify;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 21px */
}

.article-details__cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  width: 100%;
  min-height: auto;
}


.article-details__content__wrapper {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}


.article-details__info__created {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 8.992px */
}

.article-details__info__comments {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 8.992px */
}

.article-details__info__views {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 8.992px */
}

.article-details__content__share__medsos {
  font-size: 22px;
  color: #D1D1D1;
}

.article-comments-card {
  border-radius: 16px;
  border: 0.836px solid var(--font-100, #E7E7E7);
  background: var(--font-50, #F6F6F6);
  padding: 20px;
}

.article-comments__name {
  color: var(--font-800, #454545);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 12px */
}

.article-comments__created {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding-top: 5px;
  margin-bottom: 8px;
  /* 9.6px */
}

.article-comments__content {
  color: var(--font-900, #3D3D3D);
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 10px;
  /* 9.6px */
}

.btnCategory {
  color: #6d6d6d;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  border-radius: 5px;
  background-color: #e7e7e7;
}


@media (min-width: 1200px) {
  .article-details__cover {
    min-height: 433.57px;
  }


}
</style>

<script setup>
definePageMeta({
  layoutTransition: {
    name: 'slide-in',
    mode: 'out-in'
  },
  pageTransition: { name: 'fade', mode: 'out-in' }

})

import { posts } from "~/utils/data/getInitialData";

const route = useRoute()

const { postId } = route.params

const post = posts.find((post) => post.slug === postId)



useSeoMeta({
  title: post.title,
  author: 'smartNation',
  description: post.excerpt,
  ogTitle: post.title,
  ogDescription: post.excerpt,
  ogImage: post.thumbnail,
  ogImageAlt: post.title,
  ogImageType: "image/png",
  ogImageWidth: 100,
  ogImageHeight: 443,
  ogImageUrl: 'https://s3-alpha-sig.figma.com'
})


</script>