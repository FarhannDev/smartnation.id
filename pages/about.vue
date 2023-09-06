<template>
  <div>
    <div class="container py-5">
      <h1 class="text-danger text-capitalize">Halaman Tentang Kami </h1>
      <NuxtLink to="/"
        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-danger">
        Kembali ke halaman Utama
        <BootstrapIcon name="arrow-right" />
      </NuxtLink>

      <div class="d-flex flex-wrap py-3">
        <div v-show="isLoading" class="text-start text-dark fst-normal fs-6 mb-3">Sedang memuat...</div>

        <button v-for="category in categories" :key="category" type="button"
          class="btn btn-outline-danger btn-md rounded text-center text-dark me-2">{{ category }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { categoriesData } from "../utils/data/categories"

useSeoMeta({
  title: "Tentang Kami",
  ogTitle: 'Tentang Kami',
  description: 'Ini adalah deskripsi dari halaman Tentang Kami....',
})


const categories = ref([])
const isLoading = ref(false)

const getCategoryData = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false

    categories.value = categoriesData
  }, 300);
}


onMounted(() => getCategoryData())


</script>