<template>

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
