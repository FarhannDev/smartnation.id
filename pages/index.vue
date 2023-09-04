<template>
  <div>
    <div class="container py-3">
      <h1 class="text-danger text-capitalize">Halaman Utama </h1>
      <NuxtLink to="/about"
        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-danger">
        Lanjutkan ke halaman Tentang Kami
        <BootstrapIcon name="arrow-right" />
      </NuxtLink>

      <div class="px-3 mx-3 bg-white shadow-sm rounded">
        <h1 class="text-start text-capitalize fst-normal fs-3 pt-3">Daftar Berita</h1>
        <hr class="text-dark" />
        <div v-show="isLoading" class="text-start text-dark fst-normal fs-6 mb-3">Sedang memuat...</div>

        <ul class="list-group list-group-flush">
          <li v-for="(article, index ) in articles?.sort((a, b) => {
            return b.title.localeCompare(a.title)
          })" :key="index" class="list-group-item px-0 mx-0">

            <!-- <NuxtImg :src="article.cover" :width="250" :height="250" :alt="article.title" loading="lazy"
              class="img-fluid rounded" /> -->
            <h3 class="text-start text-dark-50 fs-5 fst-normal">{{ article.title }}</h3>
            <span v-for="category in article.category" :key="category">{{ category }}</span>

            <div v-html="article.content.substring(0, 250)"></div>
          </li>
        </ul>

      </div>

    </div>



  </div>
</template>

<script setup>
import { articlesData } from "../utils/data/articles"

// Set Meta SEO
useSeoMeta({
  title: "Beranda",
  ogTitle: 'Beranda',
  description: 'Selamat datang di smartnation.id',
})

// Initialize state
const articles = ref([])
const isLoading = ref(false)

// Handler
const getArticleData = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    articles.value = articlesData
  }, 500);

}

// Method
// Dijalankan ketika komponent pertama kali dirender
onMounted(() => { getArticleData() })

console.log({ articles })

</script>
