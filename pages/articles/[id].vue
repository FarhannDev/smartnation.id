<script setup>

definePageMeta({ layout: "content-layout" })


const route = useRoute();

const postId = String(route.params.id)


const { data: post } = await useAsyncData('post', () => $fetch('/api/posts'), {
  transform: (posts) => {
    return posts.find(post => post.slug === postId)
  }
})


const { data: postsData } = await useFetch('/api/posts')

// const { data: posts } = await useAsyncData('posts', () => $fetch('/api/posts'))


// useSeoMeta({
//   title: post.title.rendered,
//   author: "Smart Nation",
//   description: post.excerpt.rendered,
//   ogTitle: post.title.rendered,
//   ogDescription: post.excerpt.rendered,
//   ogImage: post.featured_media,
//   ogImageAlt: post.title.rendered,
//   ogImageType: "image/png",
//   ogImageWidth: 100,
//   ogImageHeight: 443,
//   ogImageUrl: "https://smartnation.id/",
// });

</script>

<template>
  <!-- rendered content main -->
  <main id="content">
    <!-- section berita detail start -->
    <section class="berita-section-container position-relative py-5">
      <div class="container">
        <div class="row justify-content-start g-3 pt-3">

          <div class="col-lg-8 col-md-auto">
            <!-- Article Content Start -->
            <div class="row justify-content-start">
              <div class="col">
                <div class="article-details-container d-grid gap-3">
                  <div class="article-details__title__wrapper">
                    <h1 class="article-details__title">{{ post.title.rendered }}</h1>
                  </div>

                  <div class="article-details__info__wrapper">
                    <div class="d-flex flex-wrap justify-content-start g-2">
                      <div class="article-details__info__created me-3">
                        <BootstrapIcon name="clock" />
                        {{ useFormatter(post.date_gmt) }}
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
                      <NuxtImg class="img-fluid article-details__cover" :src="post.featured_media" :height="433"
                        :alt="post.title.rendered" />
                    </div>
                    <div class="article-details__content__tags py-3">
                      <ArticlesArticleCategories v-for="(category, index) in post.categories" :key="index"
                        :categoryId="category" />
                    </div>

                    <div class="article-details__content" v-html="post.content.rendered"></div>

                    <div class="article-details__content__share pt-3">
                      <div class="d-flex flex-wrap justify-content-end g-2">
                        <NuxtLink to="/" target="_blank" rel="noopener" title="Bagikan Ke Twitter"
                          aria-label="Bagikan Ke Twiter"
                          class="link-offset-2 link-underline link-underline-opacity-0 me-2">
                          <BootstrapIcon name="twitter" class="article-details__content__share__medsos" />
                        </NuxtLink>
                        <NuxtLink to="/" target="_blank" rel="noopener" title="Bagikan Ke Twitter"
                          aria-label="Bagikan Ke Twiter"
                          class="link-offset-2 link-underline link-underline-opacity-0 me-2">
                          <BootstrapIcon name="facebook" class="article-details__content__share__medsos" />
                        </NuxtLink>
                        <NuxtLink to="/" target="_blank" rel="noopener" title="Bagikan Ke Twitter"
                          aria-label="Bagikan Ke Twiter"
                          class="link-offset-2 link-underline link-underline-opacity-0 me-2">
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
                    <p class="article-comments__text">
                      Alamat Email Anda Tidak Akan Dipublikasikan. Bidang yang
                      Wajib Ditandai
                      <span class="article-comments__text__label">*</span>
                    </p>

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
                                aria-label="Nama Lengkap" />
                            </div>
                            <div class="col-sm-6 mb-3">
                              <input type="text" class="form-control article-form__input" placeholder="Alamat Email"
                                aria-label="Alamat Email" />
                            </div>
                          </div>
                        </div>

                        <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input rounded-0" id="exampleCheck1" checked />
                          <label class="form-check-label article-form__input_check__label" for="exampleCheck1">Simpan
                            nama, email, dan situs web saya pada
                            peramban ini untuk komentar saya
                            berikutnya.</label>
                        </div>

                        <div class="mb-3">
                          <button disabled type="submit" class="article-form__button">
                            Posting
                          </button>
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
                      <NuxtImg src="/images/user1.png" class="rounded me-3" :width="70" :height="70" />
                      <div class="d-flex flex-column justify-content-start g-2">
                        <div class="article-comments__name">Atika Putri</div>
                        <div class="article-comments__created">
                          30 Menit yang lalu
                        </div>
                        <div class="article-comments__content">
                          Wahh Sangat Menarik
                        </div>
                        <div class="article-comments__action">
                          <div class="hstack gap-3">
                            <span class="d-inline">
                              <BootstrapIcon name="hand-thumbs-up" /> 0
                            </span>
                            <span class="d-inline">
                              <BootstrapIcon name="hand-thumbs-down" /> 0
                            </span>
                            <span class="d-inline"> Balas </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="article-comments-card mb-3">
                    <div class="d-flex justify-content-start align-content-start">
                      <NuxtImg src="/images/user1.png" class="rounded me-3" :width="70" :height="70" />
                      <div class="d-flex flex-column justify-content-start g-2">
                        <div class="article-comments__name">Atika Putri</div>
                        <div class="article-comments__created">
                          30 Menit yang lalu
                        </div>
                        <div class="article-comments__content">
                          Wahh Sangat Menarik
                        </div>
                        <div class="article-comments__action">
                          <div class="hstack gap-3">
                            <span class="d-inline">
                              <BootstrapIcon name="hand-thumbs-up" /> 0
                            </span>
                            <span class="d-inline">
                              <BootstrapIcon name="hand-thumbs-down" /> 0
                            </span>
                            <span class="d-inline"> Balas </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="article-comments-card mb-3">
                    <div class="d-flex justify-content-start align-content-start">
                      <NuxtImg src="/images/user1.png" class="rounded me-3" :width="70" :height="70" />
                      <div class="d-flex flex-column justify-content-start g-2">
                        <div class="article-comments__name">Atika Putri</div>
                        <div class="article-comments__created">
                          30 Menit yang lalu
                        </div>
                        <div class="article-comments__content">
                          Wahh Sangat Menarik
                        </div>
                        <div class="article-comments__action">
                          <div class="hstack gap-3">
                            <span class="d-inline">
                              <BootstrapIcon name="hand-thumbs-up" /> 0
                            </span>
                            <span class="d-inline">
                              <BootstrapIcon name="hand-thumbs-down" /> 0
                            </span>
                            <span class="d-inline"> Balas </span>
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
          <div class="col-lg-4 col-md-auto">
            <div class="px-md-3 mx-md-2">
              <HeadingTitle class="text-capitalize fw-bold fs-5" title="Berita Terpopuler" />
              <PostsPostItem :posts="postsData.slice(0, 5)" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section berita detail end -->
  </main>
</template>

<style scoped>
.article-details__title {
  color: var(--danger-600, #ce2f2f);
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
  color: #d1d1d1;
}

.article-comments-card {
  border-radius: 16px;
  border: 0.836px solid var(--font-100, #e7e7e7);
  background: var(--font-50, #f6f6f6);
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
  color: var(--font-900, #3d3d3d);
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
  border: 0.837px solid var(--font-200, #d1d1d1);
  background: var(--Background, #fff);
  overflow: hidden;
}

.article-comments__card .article-comments__body {
  padding: 20px;
}

.article-comments__card,
.article-comments__title {
  color: var(--font-700, #4f4f4f);
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
  color: #ce2f2f;
}

.article-form__input-container {
  width: 100%;
  height: auto;
}

.article-form__input__text {
  border-radius: 12px;
  border: 0.837px solid #d1d1d1;
  background: #f6f6f6;
  height: 137.268px;
}

.article-form__input {
  height: 40px;
  border-radius: 8px;
  border: 0.837px solid var(--font-100, #e7e7e7);
  background: var(--font-50, #f6f6f6);
  color: var(--font-300, #b0b0b0);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
}

.article-form__button {
  border-radius: 8px;
  background: var(--font-300, #b0b0b0);
  color: var(--Background, #fff);
  width: 74.687px;
  height: auto;
  padding: 8.37px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  color: var(--font-50, #f6f6f6);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
  transition: ease 300ms;
}

.article-form__button:hover {
  background: var(--font-300, #b0b0b0);
}

.article-form__button:disabled {
  border-radius: 8px;
  background: var(--font-300, #b0b0b0);
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

.article-comments__empty {
  border-radius: 16px;
  border: 0.836px solid var(--font-100, #e7e7e7);
  background: var(--font-50, #f6f6f6);
  height: 397px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
}

.article-comments__empty .article-comments__empty__text {
  color: var(--font-800, #454545);
  /* Font/Title 2 */
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 30px */
}

@media (min-width: 1200px) {
  .article-details__cover {
    min-height: 433.57px;
  }
}

.dark-mode .article-details__content {
  color: #fff;
}

.dark-mode .article-comments__card {
  background-color: #262626;
  border: 1px solid #454545;
}

.dark-mode .article-comments__card,
.article-comments__title {
  color: var(--font-700, #fff);
}

.dark-mode .article-comments__card,
.article-comments__text {
  color: var(--font-400, #fff);
}

.dark-mode .article-form__input__text {
  background-color: #262626;
  border: 1px solid #454545;
  color: #fff;
}

.dark-mode .article-form__input__text::placeholder {
  color: #fff;
}

.dark-mode .article-form__input {
  background-color: #262626;
  border: 1px solid #454545;
  color: #fff;
}

.dark-mode .article-form__input::placeholder {
  color: #fff;
}

.dark-mode .article-form__input_check__label {
  color: #fff;
}

.dark-mode .article-comments-card {
  background-color: #262626;
  border: 1px solid #454545;
}

.dark-mode .article-comments-card .article-comments__name {
  color: #fff;
}

.dark-mode .article-comments-card .article-comments__created {
  color: #fff;
}

.dark-mode .article-comments-card .article-comments__content {
  color: #fff;
}

.dark-mode .article-details__info__created {
  color: #fff;
}

.dark-mode .article-details__info__views {
  color: #fff;
}

.dark-mode .article-details__info__comments {
  color: #fff;
}
</style>
