<script lang="ts" setup>

import { categories } from '~/utils/data/getInitialCategoryPostData';
import { posts } from "~/utils/data/getInitialPostsData"

// Set Meta SEO
useSeoMeta({
  title: "Beranda",
  description:
    "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
  author: "Smart Nation",
  ogTitle: "Beranda",
  ogDescription:
    "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
  ogType: "website",
  ogSiteName: "https://smartnation.vercel.app",
  ogUrl: "https://smartnation.vercel.app",
});

</script>

<template>
  <div>
    <HeroBackgroundSwiperParallax :posts="posts" />
    <ContentNewArticle title="Postingan Terbaru" :posts="posts" />
    <ContentLatestArticle title="Berita Terkini" :posts="posts" />
    <ContentLatestEvents title="Acara" :posts="posts.filter(post => post.categories.find(category => category === Number(88) || category === Number(90)))
      .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
      .slice(0, 4)" />

    <ContentLatestArticleCategory :posts="posts"
      :categories="categories.filter(category => category.id === 84 || category.id === 85 || category.id === 86).slice(0, 3)" />

    <ContactSubscribe title="Berlangganan Buletin Kami"
      description="Dapatkan pembaruan terbaru kami dengan info terbaru" />
  </div>
</template>
  
