<script lang="ts" setup>
import { CategoryPostsType } from '~/utils/data/getInitialCategoryPostData';

// Set Meta SEO
useSeoMeta({
  title: "Galeri Smartnation",
  ogTitle: 'Galeri Smartnation',
  description: 'Kumpulan Galeri Smartnation',
})


const colorMode = useColorMode()

const { data: categories } = await useAsyncData('category-posts', () => $fetch('/api/categories'), {
  transform: (categories: CategoryPostsType) => {
    return categories.filter(category =>
      category.id === Number(90) ||
      category.id === Number(91) ||
      category.id === Number(92) ||
      category.id === Number(93) ||
      category.id === Number(94) ||
      category.id === Number(155)
    )
      .map(cat => ({ id: cat.id, name: cat.name, slug: cat.slug }))
      .sort((a, b) => b.name.localeCompare(a.name))
  }
})


</script>

<template>
  <LazyHeroParallaxBackground text="Galeri Smartnation" desc="Kumpulan Semua Galeri & Video Smart Nation"
    background="/images/background/bg-galeri.png" />
  <main id="content">

    <section class="albums-section-container py-5">
      <div class="container px-3 px-md-0 px-lg-0">
        <div class="row justify-content-start g-3">
          <div v-for="category in categories" :key="category.id" class="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up"
            data-aos-duration="1500">
            <GalleryCardAlbum :title="category.name" :created="'20 December 2023'"
              :albumImage="'https://s3-alpha-sig.figma.com/img/c88c/15c6/fa61bbeedb8345028255ed3d6c89a9d3?Expires=1699228800&Signature=ZZXbU3ofbW5EIx~mVIDrk-cPom43zL1S2TAVgZAgEARyZ~fDgZGLiZa7aHC-sN9dUL4y4~KRJ~J3H6J7Qi106gy1JvHgIolNOuJbJ-CdEsdJSz6QjRR~j68FF830yhM5UL25sRNFXZ~4ciWZ63KGHpB850AMViJ28yRHM2jrOzsGN-ErJjAMhzqG3W6Zhl86zJNx7b4i0sLRpIZvMJLNTMQzJH1QXjv~YcC89v8tBqkAlpC779brSkFXaD-4Re5TCv2KqRr4gTMD17cfp4tpi8ei1znktV-18~kCT8lLW4khIQpf9MR6QW-1-sYHFB-oqYITMLzmMB5-yfCKi9QSGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'"
              :total="10" :class="'mb-3'" />
          </div>
        </div>
      </div>
    </section>
    <hr v-show="colorMode.preference === 'dark'" />
  </main>
</template>



<style lang="css">
.album-cover__images {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
  border-radius: 8px 8px 0 0;
}
</style>

