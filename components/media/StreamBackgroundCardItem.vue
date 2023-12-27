<script lang="ts" setup>


defineProps({
  title: { type: String, required: true, default: 'Judul Live Streaming' },
  description: { type: String, required: true, default: 'Deskripsi Live Streaming' },
  thumbnail: { type: String, required: true, default: 'https://s3-alpha-sig.figma.com/img/b5b3/81e1/003f4e27072680372aae5be30b0f1640?Expires=1703462400&Signature=FPhtUtqEczbMfuGUe~R~v01OCB9mKdWgHe82w047Qx5vlXMMikCs1lPIoqr3ElImM3hsewHcKmxmBkd9jziZ0XyNkaNsExJwkBBgagmIF82L4KZQOY2lV~NBJEFU3us-vbb4ax5CsGWpJ3YuviMM3KWmfpBgrfKyra5DqPda1OqTfrZd6CyC6yt1i~gDLvvrftzX8YTGTuvTcJAN5MqtGefdfo3LGMxP7tPPVN2jMxno1Yhu9iIcU2UlJ-isB9shVC0DaCZPE1WZjHoHD3z9XIWhekRtXr7xPPnOO3eQeoTDPkjkdHpH79yBel8DLb4yM7tUCC-mqVuL9T3fDyilbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  link: { type: String, required: true }
})
</script>



<template>
  <div>
    <figure class="figure media-streams-card__live">
      <NuxtLink :to="link" aria-label="Selengkapnya">
        <img :src="thumbnail" class="media-streams-card__live-thumbnail" :alt="title">
        <figcaption class="figure-caption media-streams-card__live-caption">
          <div class="d-block w-100">
            <h3 class=" media-streams-card__live-caption__title">{{ title }}</h3>
            <p class=" media-streams-card__live-caption__description">{{ description }}</p>
          </div>
        </figcaption>
      </NuxtLink>

    </figure>
  </div>
</template>

<style scoped>
/*
   Custom Style Live
*/
.media-streams__heading {
  color: var(--Primary-600, #D71149);

  /* Font/Tittle 2 SemiBold */
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 30px */
}

.media-streams-card__live {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
}

.media-streams-card__live .media-streams-card__live-thumbnail {
  width: 100%;
  min-width: 430px;
  height: 250px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(50%);

}

.media-streams-card__live .media-streams-card__live-caption {
  position: absolute;
  top: 140px;
  left: 30px;
  right: 30px;
}

.media-streams-card__live .media-streams-card__live-caption .media-streams-card__live-caption__title {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.80);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: -webkit-box;
  width: 228.681px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.media-streams-card__live .media-streams-card__live-caption .media-streams-card__live-caption__description {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.80);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: -webkit-box;
  width: fit-content;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>