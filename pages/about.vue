<template>
  <div>
    <h1>
      About page
    </h1>
    <NuxtLink to="/">Back To Homepage</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

useSeoMeta({
  title: "About page",
  ogTitle: 'About page',
  description: 'Ini adalah deskripsi dari halaman about page....',
})

</script>