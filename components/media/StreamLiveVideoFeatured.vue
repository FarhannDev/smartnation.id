<script lang="ts" setup>

const videoTitle: string = 'NASA Live: Official Stream of NASA TV'
const videos: string = 'https://www.youtube.com/embed/21X5lGlDOfg?si=XkeXjXl6d7JOLV12&autoplay=1'

defineProps({
  title: { type: String, required: true, default: videoTitle },
  description: { type: String, required: true },
  video: { type: String, required: true, default: videos }
})

</script>



<template>
  <div>
    <div class="media-stream-live">
      <iframe class="media-stream-live__iframe" :src="video" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <div class="media-stream-live__info">
        <h1 class="media-stream-live__info-heading">{{ title }}</h1>
        <p class="media-stream-live__info-description " v-html="description">
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.media-stream-live .media-stream-live__iframe {
  /* min-width: 100%; */
  width: 100%;
  height: 400px;
  border-radius: 4px;
  background: #D9D9D9;
}


.media-stream-live__info {
  width: 100%;
  height: auto;
  padding-top: 20px;
}

.media-stream-live__info .media-stream-live__info-heading {
  color: var(--Font-600, #5D5D5D);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

.media-stream-live__info .media-stream-live__info-description {
  overflow: hidden;
  color: var(--Font-400, #888);
  text-align: justify;
  /* text-overflow: ellipsis;
  white-space: nowrap; */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 18px */
}

.dark-mode .media-stream-live__info .media-stream-live__info-heading {
  color: #fff;
}

.dark-mode .media-stream-live__info .media-stream-live__info-description {
  color: #fff;
}
</style>