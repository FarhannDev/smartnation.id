<script lang="ts" setup>

// Set Meta SEO
useSeoMeta({
    title: "Galeri Smartnation",
    ogTitle: 'Galeri Smartnation',
    description: 'Kumpulan Galeri Smartnation',
})



const colorMode = useColorMode()

</script>

<template>
    <NuxtLayout name="page-layout">
        <template #hero>
            <HeroParallaxBackground text="Galeri Smartnation" desc="Kumpulan Semua Galeri & Video Smart Nation"
                background="/images/background/bg-galeri.png" />
        </template>
        <main id="content">
            <section class="berita-section-container position-relative py-5">
                <div data-aos="fade-up" data-aos-duration="1500" class="container px-3 px-md-0 px-lg-0">
                    <HeadingTitle class="text-start text-capitalize fw-bold fs-3 " title="Galeri Smart Nation" />
                    <div class="row justify-content-start g-3 py-3">
                        <div class="col-lg-4 col-md-6 ">
                            <GalleryCardAlbum title="Album ISNA 2015" :created="new Date().toISOString()"
                                albumImage="https://s3-alpha-sig.figma.com/img/c88c/15c6/fa61bbeedb8345028255ed3d6c89a9d3?Expires=1698019200&Signature=cY7PRonqN1jcP~qQyuep4Vf9cauv206LS51B7td7Pi~wCU9yLz0tSRdfcHdgK~-M7C9RHx3gCX~RFdY9slhgFYqk1Qaif1tk4O8415xLXIJ~po8FG8EvJJaRms-6J0jKLa-3zQqNIJV~T5DnHHekwZ~-OfKwhNlpAS6GqiaWUWpwqzVmhCGdodwIHeb3N7Yhm0p5LeTWPwJRoSa9omcGsEVpIefhZsIzHUKHkRdk~fvAZbf4y8nd~KDBepx05FiBasbnF~dMlr-rm1nhYpRo1bhnj3hdMu94Vj1HaRH8S187aLirC~goM6eQ6vfew7Peza80Su3R2fbCtrQnyLA3pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                :total="10" :redirect="'/gallery/album-isna-2016'" />
                        </div>
                        <div class="col-lg-4 col-md-6 ">
                            <GalleryCardAlbum title="Album ISNA 2016" :created="new Date().toISOString()"
                                albumImage="https://s3-alpha-sig.figma.com/img/829b/6ae3/bd3b09b4cf8a490d789c2b47fd0d93bb?Expires=1698019200&Signature=dPEE5ZyHOCU4gCHIOo32AzIUr9cZUNEr8zfpkb8nN1urj~3MfO4ckvDpgghPvnaulOQ9zYObPu7uEgGI78q9zhaApv11uR3NJdckmZ-Fz8NvX5Kjygaxg-hhzZTxQNxDyTO7uI2wFlr-2TzDZ0FrU2tgxlnzmg3jWruFHdyFeQYwY7LIGGNwTQbbTASxcXB06iIXwgMq5Ry6i~tvc61i6aj37KqEjygIC3B4sA2YChhXhMRCQniECzMzRO9yaP5ZXywtT9daYoa4YaDpVcpumtJTn~h9WWdBfWcOoMb0SUr9YmztVCSccTP9dkr5Z-egr1aZHD6AKZXDn~6bEjRPXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                :total="20" :redirect="'/gallery/album-isna-2016'" />
                        </div>
                        <div class="col-lg-4 col-md-6 ">
                            <GalleryCardVideo title="INDONESIA SMART NATION AWARD 2015" :created="new Date().toISOString()"
                                albumEmbed="https://www.youtube.com/embed/kwf-xhrE7nI" :total="10"
                                :redirect="'/gallery/album-isna-2016'" />
                        </div>
                    </div>
                </div>
            </section>

            <hr v-show="colorMode.preference === 'dark'" />
        </main>
    </NuxtLayout>
</template>



