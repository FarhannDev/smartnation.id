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

const albumsTitleName: (title: string) => string = (title: string) => `Album ${title}`

</script>

<template>
    <LazyHeroParallaxBackground text="Galeri Smartnation" desc="Kumpulan Semua Galeri & Video Smart Nation"
        background="/images/background/bg-galeri.png" />
    <main id="content">

        <section class="albums-section-container">
            <div class="container px-3 px-md-0 px-lg-0">


                <div v-for="category in categories" :key="category.id" class="row justify-content-start g-2 py-4"
                    data-aos="fade-up" data-aos-duration="1500">
                    <div class="col">
                        <div class="d-flex flex-column">
                            <LazyHeadingTitle :title="albumsTitleName(category.name)" />
                            <Albums :categoryId="category.id" />

                        </div>
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

