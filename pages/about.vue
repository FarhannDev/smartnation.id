<template>
  <div>
    <h1 class="text-danger text-capitalize">Tentang Kamu</h1>
    <NuxtLink to="/" class="text-danger">Go Home page</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

useSeoMeta({
  title: "Tentang Kamu",
  ogTitle: 'Tentang Kamu',
  description: 'Ini adalah deskripsi dari halaman Tentang Kamu....',
})

</script>