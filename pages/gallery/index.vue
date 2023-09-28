<script lang="ts" setup>

// Set Meta SEO
useSeoMeta({
    title: "Galeri Smartnation",
    ogTitle: 'Galeri Smartnation',
    description: 'Kumpulan Galeri Smartnation',
})

</script>

<template>
    <NuxtLayout name="page-layout">
        <template #hero>
            <HeroParallaxBackground text="Galeri Smartnation" desc="Kumpulan Semua Galeri & Video Smart Nation"
                background="/images/background/bg-galeri.png" />
        </template>
        <main id="content">
            <section class="berita-section-container position-relative py-5">
                <div data-aos="fade-up" data-aos-duration="1500" class="container">
                    <HeadingTitle class="text-start text-capitalize fw-bold fs-3 " title="Galeri Smart Nation" />
                    <div class="row justify-content-start g-5 py-3">
                        <div class="col-lg-4 col-md-6">
                            <GalleryCardAlbum title="Album ISNA 2015" :created="new Date().toISOString()"
                                albumImage="https://s3-alpha-sig.figma.com/img/c88c/15c6/fa61bbeedb8345028255ed3d6c89a9d3?Expires=1696809600&Signature=ckFg5T71GzsfyVbppwEfQ2Z4Q27XEh2uw24sXlGEUe3BaHqzPl1QgqWCzEgEaP3Sr~smQFNMEi3pIC6099QevhADnaT2zzIbgsvtu4Y-ktjclNXya~7tCDzHnqVluzSr~4env7Tpeuqi7JIgDwNa5Bvyetzh1~rr-CVNxyElrn9y0nHT~007fWZPbN2Fmo0dVPUIrFn3STLr7pzzCIeEiHA4x6xXmOHXJS4tY38Efp50mwlmiuqnFm7rP5vEElBjLUqOfKyJ3oVDSy2DtzrpXzGYSOanPOJvkSB7X9uxSm2~ek5Dhd8R7admhy1zQ5~hwV4-EEPK2bEaW46SqYkMtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                :total="10" :redirect="'/gallery/album-isna-2016'" />
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <GalleryCardAlbum title="Album ISNA 2016" :created="new Date().toISOString()"
                                albumImage="https://s3-alpha-sig.figma.com/img/c88c/15c6/fa61bbeedb8345028255ed3d6c89a9d3?Expires=1696809600&Signature=ckFg5T71GzsfyVbppwEfQ2Z4Q27XEh2uw24sXlGEUe3BaHqzPl1QgqWCzEgEaP3Sr~smQFNMEi3pIC6099QevhADnaT2zzIbgsvtu4Y-ktjclNXya~7tCDzHnqVluzSr~4env7Tpeuqi7JIgDwNa5Bvyetzh1~rr-CVNxyElrn9y0nHT~007fWZPbN2Fmo0dVPUIrFn3STLr7pzzCIeEiHA4x6xXmOHXJS4tY38Efp50mwlmiuqnFm7rP5vEElBjLUqOfKyJ3oVDSy2DtzrpXzGYSOanPOJvkSB7X9uxSm2~ek5Dhd8R7admhy1zQ5~hwV4-EEPK2bEaW46SqYkMtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                :total="20" :redirect="'/gallery/album-isna-2016'" />
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <GalleryCardVideo title="INDONESIA SMART NATION AWARD 2015" :created="new Date().toISOString()"
                                albumEmbed="https://www.youtube.com/embed/kwf-xhrE7nI" :total="10"
                                :redirect="'/gallery/album-isna-2016'" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>



