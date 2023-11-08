<script lang="ts" setup>
import { categories } from '~/utils/data/getInitialCategoryPostData';

// Set Meta SEO
useSeoMeta({
    title: "Galeri Smartnation",
    ogTitle: 'Galeri Smartnation',
    description: 'Kumpulan Semua Galeri & Video Smart Nation',
})


const colorMode = useColorMode()


const categoriesData = categories.filter(category =>
    category.id === Number(90) ||
    category.id === Number(91) ||
    category.id === Number(92) ||
    category.id === Number(93) ||
    category.id === Number(94) ||
    category.id === Number(155) ||
    category.id === Number(89) ||
    category.id === Number(129)
)
    .sort((a, b) => b.name.localeCompare(a.name))

</script>

<template>
    <LazyHeroParallaxBackground text="Galeri Smartnation" desc="Kumpulan Semua Galeri & Video Smart Nation"
        background="/images/background/bg-galeri.png" />
    <main id="content">

        <section class="albums-section-container py-5">
            <div class="container px-3 px-md-0 px-lg-0">
                <div class="row justify-content-start g-3">
                    <div v-for="category in categoriesData" :key="category.id" class="col-xl-4 col-lg-4 col-md-6"
                        data-aos="fade-up" data-aos-duration="1500">
                        <GalleryCardAlbum :title="category.name" :created="new Date().toISOString()"
                            :albumImage="'https://drive.google.com/uc?export=download&id=1cDzj6ZUrHyGEAeXzh2P-3AjWwUonmtqc'"
                            :total="category.count" :class="'mb-3'" :redirect="category.slug" />
                    </div>
                </div>
            </div>
        </section>
        <hr v-if="colorMode.preference === 'dark'" class="text-secondary" />
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

