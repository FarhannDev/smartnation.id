<script lang="ts" setup>
const props = defineProps({ title: { type: String }, created: { type: String }, albumImage: { type: String }, total: { type: Number }, redirect: { type: String } })


</script>

<template>
  <div class="card album-card">
    <NuxtLink :to="redirect" aria-label="Lihat Selengkapnya" title="Lihat Selengkapnya">
      <NuxtImg class="card-img-top img-fluid album-cover__images" :src="albumImage" alt="Album 1" loading="lazy"
        format="webp" />
    </NuxtLink>


    <div class="card-body">
      <div class="d-flex flex-column justify-content-start align-self-stretch">
        <NuxtLink class="album-cover__title" :to="'/gallery/album-isna-2016'" aria-label="Lihat Selengkapnya"
          title="Lihat Selengkapnya">
          {{ title }}
        </NuxtLink>

        <h5 class="card-subtitle album-cover__subtitle ">
          <div class="d-flex flex-wrap">
            <BootstrapIcon name="clock" class="me-1" /> {{ useFormatter(created) }}
          </div>
        </h5>
        <p class="album-cover__labels"> <img width="15" height="15" src="/images/photo.svg" alt="DATE">{{ total }}
          Foto
        </p>
      </div>
    </div>
  </div>
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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

.dark-mode .album-card {
  background-color: #262626;
  border: 0;
}

.dark-mode .album-card:hover {
  border: 1px solid #D71149;
}

.dark-mode .album-card .album-cover__title {
  color: #fafafa;
}

.dark-mode .album-card .album-cover__labels {
  color: rgba(255, 255, 255, 0.80);
}
</style>