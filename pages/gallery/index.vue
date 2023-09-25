<template>
    <NuxtLayout name="page-layout">

        <template #hero>
            <HeroParallaxBackground text="Galeri Smartnation" background="/images/background/bg-galeri.png" />
        </template>

        <main id="content">
            <section class="berita-section-container position-relative py-5">
                <div data-aos="fade-up" data-aos-duration="1500" class="container">


                    <div class="row justify-content-start g-5 py-3">
                        <div class="col-lg-4 col-md-6">
                            <div class="card album-card">

                                <NuxtLink :to="'/gallery/album-isna-2016'" aria-label="Lihat Selengkapnya"
                                    title="Lihat Selengkapnya">
                                    <NuxtImg class="card-img-top img-fluid album-cover__images"
                                        src="https://s3-alpha-sig.figma.com/img/c88c/15c6/fa61bbeedb8345028255ed3d6c89a9d3?Expires=1696809600&Signature=ckFg5T71GzsfyVbppwEfQ2Z4Q27XEh2uw24sXlGEUe3BaHqzPl1QgqWCzEgEaP3Sr~smQFNMEi3pIC6099QevhADnaT2zzIbgsvtu4Y-ktjclNXya~7tCDzHnqVluzSr~4env7Tpeuqi7JIgDwNa5Bvyetzh1~rr-CVNxyElrn9y0nHT~007fWZPbN2Fmo0dVPUIrFn3STLr7pzzCIeEiHA4x6xXmOHXJS4tY38Efp50mwlmiuqnFm7rP5vEElBjLUqOfKyJ3oVDSy2DtzrpXzGYSOanPOJvkSB7X9uxSm2~ek5Dhd8R7admhy1zQ5~hwV4-EEPK2bEaW46SqYkMtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                        alt="Album 1" loading="lazy" format="webp" />
                                </NuxtLink>


                                <div class="card-body">
                                    <div class="d-flex flex-column justify-content-start align-self-stretch">
                                        <NuxtLink class="album-cover__title" :to="'/gallery/album-isna-2016'"
                                            aria-label="Lihat Selengkapnya" title="Lihat Selengkapnya">
                                            Album ISNA 2016
                                        </NuxtLink>

                                        <h5 class="card-subtitle album-cover__subtitle ">
                                            <div class="d-flex flex-wrap">
                                                <BootstrapIcon name="clock" class="me-1" /> 16 Desember 2022
                                            </div>
                                        </h5>
                                        <p class="album-cover__labels"> <img width="15" height="15" src="/images/photo.svg"
                                                alt="DATE">10
                                            Foto
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card album-card">

                                <NuxtLink :to="'/gallery/album-isna-2016'" aria-label="Lihat Selengkapnya"
                                    title="Lihat Selengkapnya">
                                    <NuxtImg class="card-img-top img-fluid album-cover__images"
                                        src="https://s3-alpha-sig.figma.com/img/c88c/15c6/fa61bbeedb8345028255ed3d6c89a9d3?Expires=1696809600&Signature=ckFg5T71GzsfyVbppwEfQ2Z4Q27XEh2uw24sXlGEUe3BaHqzPl1QgqWCzEgEaP3Sr~smQFNMEi3pIC6099QevhADnaT2zzIbgsvtu4Y-ktjclNXya~7tCDzHnqVluzSr~4env7Tpeuqi7JIgDwNa5Bvyetzh1~rr-CVNxyElrn9y0nHT~007fWZPbN2Fmo0dVPUIrFn3STLr7pzzCIeEiHA4x6xXmOHXJS4tY38Efp50mwlmiuqnFm7rP5vEElBjLUqOfKyJ3oVDSy2DtzrpXzGYSOanPOJvkSB7X9uxSm2~ek5Dhd8R7admhy1zQ5~hwV4-EEPK2bEaW46SqYkMtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                        alt="Album 1" loading="lazy" format="webp" />
                                </NuxtLink>


                                <div class="card-body">
                                    <div class="d-flex flex-column justify-content-start align-self-stretch">
                                        <NuxtLink class="album-cover__title" :to="'/gallery/album-isna-2016'"
                                            aria-label="Lihat Selengkapnya" title="Lihat Selengkapnya">
                                            Album ISNA 2016
                                        </NuxtLink>

                                        <h5 class="card-subtitle album-cover__subtitle ">
                                            <div class="d-flex flex-wrap">
                                                <BootstrapIcon name="clock" class="me-1" /> 16 Desember 2022
                                            </div>
                                        </h5>
                                        <p class="album-cover__labels"> <img width="15" height="15" src="/images/photo.svg"
                                                alt="DATE">10
                                            Foto
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card album-card">

                                <iframe style="border-radius: 8px 0 0 0;" height="250"
                                    src="https://www.youtube.com/embed/kwf-xhrE7nI" frameborder="0"
                                    allowfullscreen></iframe>


                                <div class="card-body">
                                    <div class="d-flex flex-column justify-content-start align-self-stretch">
                                        <NuxtLink class="album-cover__title" :to="'/gallery/album-isna-2016'"
                                            aria-label="Lihat Selengkapnya" title="Lihat Selengkapnya">
                                            INDONESIA SMART NATION AWARD 2015
                                        </NuxtLink>

                                        <h5 class="card-subtitle album-cover__subtitle ">
                                            <div class="d-flex flex-wrap">
                                                <BootstrapIcon name="clock" class="me-1" /> 16 Desember 2022
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    </NuxtLayout>
</template>

<style scoped>
.album-card {
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid var(--font-100, #E7E7E7);
    background: var(--Background, #FFF);
}

.album-cover__images {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 250px;
    border-radius: 8px 8px 0 0;
}

.album-cover__title {
    color: var(--font-600, #5D5D5D);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-decoration: none;
    margin-bottom: 8px;
}

.album-cover__title:hover {
    color: #D71149;
}

.album-cover__subtitle {
    color: var(--font-400, #888);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

.album-cover__labels {
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    position: absolute;
    background-color: rgba(246, 246, 246, 0.8);
    color: #6d6d6d;
    top: 60%;
    right: 5px;
    padding: 8px;
    border-radius: 8px;
    margin: 8px;
}
</style>

<script lang="ts" setup>

// Set Meta SEO
useSeoMeta({
    title: "Galeri Smartnation",
    ogTitle: 'Galeri Smartnation',
    description: 'Kumpulan Galeri Smartnation',
})

</script>