<template>
  <NuxtLayout name="content-layout">
    <section class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start g-3 py-5">
          <div class="col-12 col-lg-8 col-md-12 col-sm-12 ">
            <!-- Article Content Start -->
            <div class="row justify-content-start">
              <div class="col">

                <div class="article-details-container d-grid gap-3">

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

              </div>
            </div>
            <!-- Article Content End -->
            <!-- Article Comments Start -->

            <div class="row justify-content-start">
              <div class="col">
                <div class="article-comments__card">
                  <div class="article-comments__body">
                    <h3 class="article-comments-title">Komentar</h3>
                    <p class="article-comments__text">Alamat Email Anda Tidak Akan Dipublikasikan. Bidang yang Wajib
                      Ditandai <span class="article-comments__text__label">*</span></p>


                    <div class="d-flex flex-column justify-content-start g-2">
                      <form class="article-form__input-container">
                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label" hidden>Example textarea</label>
                          <textarea class="form-control article-form__input__text" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                          <div class="row">
                            <div class="col-sm-6 mb-3">
                              <input type="text" class="form-control article-form__input" placeholder="Nama Lengkap"
                                aria-label="Nama Lengkap">
                            </div>
                            <div class="col-sm-6 mb-3">
                              <input type="text" class="form-control article-form__input" placeholder="Alamat Email"
                                aria-label="Alamat Email">
                            </div>
                          </div>
                        </div>

                        <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input rounded-0" id="exampleCheck1">
                          <label class="form-check-label article-form__input_check__label" for="exampleCheck1">Simpan
                            nama, email, dan situs web saya pada
                            peramban ini untuk komentar saya berikutnya.</label>
                        </div>

                        <div class="mb-3">
                          <button disabled type="submit" class="article-form__button ">Kirim</button>
                        </div>

                      </form>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-start">
              <div class="col">
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

              </div>
            </div>


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


.article-comments__card {
  width: 100%;
  /* height: auto; */
  height: auto;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0.837px solid var(--font-200, #D1D1D1);
  background: var(--Background, #FFF);
  overflow: hidden;
}

.article-comments__card .article-comments__body {
  padding: 20px;
}

.article-comments__card,
.article-comments__title {
  color: var(--font-700, #4F4F4F);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 19.2px */
}

.article-comments__card,
.article-comments__text {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
}

.article-comments__text__label {
  color: #CE2F2F;
}



.article-form__input-container {
  width: 100%;
  height: auto;
}



.article-form__input__text {
  border-radius: 12px;
  border: 0.837px solid #D1D1D1;
  background: #F6F6F6;
  height: 137.268px;
}

.article-form__input {
  height: 40px;
  border-radius: 8px;
  border: 0.837px solid var(--font-100, #E7E7E7);
  background: var(--font-50, #F6F6F6);
  color: var(--font-300, #B0B0B0);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
}

.article-form__button {
  border-radius: 8px;
  background: var(--font-300, #B0B0B0);
  color: var(--Background, #FFF);
  width: 74.687px;
  height: auto;
  padding: 8.37px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  color: var(--font-50, #F6F6F6);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
  transition: ease 300ms;
}

.article-form__button:hover {
  background: var(--font-300, #B0B0B0);
}

.article-form__button:disabled {
  border-radius: 8px;
  background: var(--font-300, #B0B0B0);

}


.article-form__input_check__label {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
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