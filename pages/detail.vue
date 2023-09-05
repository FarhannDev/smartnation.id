<template>
  <div>
    <div class="container py-5">
      <h1 class="text-danger text-capitalize">Halaman Detail</h1>
      <NuxtLink to="/"
        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-danger">
        Kembali ke halaman Utama
        <BootstrapIcon name="arrow-right" />
      </NuxtLink>

      <div class="row">
          <div class="col-8">
            <h1 class="text-danger text-capitalize fw-bolder fs-3 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolores inventore.</h1>
            <div class="row pb-2">
              <div class="col">28 December 2022</div>
              <div class="col">2 Comments</div>
              <div class="col">383</div>
            </div>
            <img class="img-fluid" src="https://smartnation.id/wp-content/uploads/2022/12/web-3-des-2048x1195.png" alt="image-content">
            <div class="d-flex flex-wrap py-3">
            <div v-show="isLoading" class="text-start text-dark fst-normal fs-6 mb-3">Sedang memuat...</div>

              <button v-for="category in categories" :key="category" type="button"
                class="btn btn-outline-danger btn-md rounded text-center text-dark me-2 my-1">{{ category }}</button>
            </div>
            <div class="container p-0">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus consequuntur ab aperiam provident ratione qui consectetur sed quas sapiente necessitatibus iste quibusdam recusandae sequi corporis dolore quia earum laudantium, enim culpa aliquam! Ipsa dicta ex hic vero error modi debitis soluta facere repellendus fugit, reprehenderit, itaque provident laborum illo suscipit facilis voluptatum. Laudantium incidunt explicabo impedit voluptates. Libero, explicabo corporis, iste magni porro nesciunt dicta alias officiis soluta dignissimos repudiandae accusantium eveniet voluptate? Doloremque ducimus ex aut accusamus quidem nemo tempore eaque pariatur repudiandae facilis, ratione, doloribus magni. Assumenda, fuga rem! Id error eius ducimus molestias modi quasi quia?</p>
            </div>
          </div>
          <div class="col-4">
            Column
          </div>
        </div>

    <div class="container text-center">
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