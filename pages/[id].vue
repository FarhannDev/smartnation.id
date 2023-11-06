<script setup>

definePageMeta({ layout: "content-layout" })

import { posts } from "~/utils/data/getInitialPostsData"


const route = useRoute();

const postId = String(route.params.id)

const post = posts.find(post => post.slug === postId)

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}


useSeoMeta({
  title: post.title.rendered,
  description: post.excerpt.rendered,
  author: 'Smart Nation',
  articleAuthor: 'Smart Nation',
  articlePublishedTime: useFormatter(post.date_gmt),
  articleModifiedTime: useFormatter(post.date_gmt),
  articleSection: 'Smart City',
  articleTag: post.categories,
  ogType: 'article',
  ogTitle: post.title.rendered,
  ogDescription: post.excerpt.rendered,
  ogImage: post.featured_media,
  ogSiteName: 'SmartNation.id',
  ogUrl: 'https://smartnation.vercel.app/',
  ogLocale: "ID",
  ogImageUrl: `https://smartnation.vercel.app/${post.featured_media}`,
})

</script>

<template>
  <!-- rendered content main -->
  <main id="content">
    <!-- section berita detail start -->
    <section class="berita-section-container position-relative py-5 mt-5">
      <div class="container">
        <div class="row justify-content-start g-3 pt-3">

          <div class="col-lg-12 col-xl-8 col-md-auto">
            <!-- Article Content Start -->
            <PostsPostContentDetails :post="post" />
            <!-- Article Content End -->
            <!-- Article Comments Start -->
            <PostsPostComments />
            <PostsPostUserComments />

            <!-- Article Comments End -->
          </div>
          <div class="col-lg-auto col-xl-4 col-md-auto">
            <div class="px-md-3 mx-md-2">
              <HeadingTitle class="text-capitalize fw-bold fs-5" title="Berita Terpopuler" />
              <PostsPostItem
                :posts="posts.sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString())).slice(0, 5)" />
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
