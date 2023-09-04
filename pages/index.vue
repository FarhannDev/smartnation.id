<template>
  <div>
    <h1 class="text-danger text-capitalize">Halaman Utama</h1>
    <NuxtLink to="/about" class="text-danger">Go About page</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

useSeoMeta({
  title: "Halaman Utama",
  ogTitle: 'Halaman Utama',
  description: 'Ini adalah deskripsi dari halaman Halaman Utama....',
})

</script>