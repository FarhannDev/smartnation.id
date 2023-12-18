<script lang="ts" setup>

const thumbnail: string = 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2020/11/b960fb_e982b0db7259429eb70df65bc477eb60mv2-scaled.jpg?fit=2560%2C1422&quality=89&ssl=1'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true, default: thumbnail },
  link: { type: String, required: true },
})
</script>


<template>
  <div>
    <div class="d-flex flex-column">
      <div class="media-stream-live-related pt-3">
        <ul class="list-group list-group-flush">
          <li class="list-group-item px-0 mx-0">
            <div class="d-flex justify-content-start g-5">
              <NuxtImg class="media-streams-live-related__thumbnail" :src="thumbnail" loading="lazy" alt="Thumbnail" />
              <div class="media-stream-live-related__info">
                <NuxtLink class="media-stream-live-related__info-title stretched-link" :to="link">{{ title }}</NuxtLink>
                <p class="media-stream-live-related__info-description" v-html="description"></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.media-stream-live-related .list-group .list-group-item {
  background-color: transparent;
}

.media-stream-live-related .media-stream-live-related__info .media-stream-live-related__info-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  align-self: stretch;
  overflow: hidden;
  color: var(--Font-600, #5D5D5D);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
  /* 18px */
}

.media-stream-live-related .media-stream-live-related__info .media-stream-live-related__info-description {
  overflow: hidden;
  color: var(--Font-400, #888);
  text-align: justify;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 286px;
  height: 36px;
}

.media-stream-live-related .media-streams-live-related__thumbnail {
  width: 81px;
  height: 54px;
  border-radius: 4px;
  background: #D9D9D9;
  margin-right: 13px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* filter: brightness(50%); */
}

.dark-mode .media-stream-live-related .media-stream-live-related__info .media-stream-live-related__info-title {
  color: #fff;
}

.dark-mode .media-stream-live-related .media-stream-live-related__info .media-stream-live-related__info-description {
  color: #f1f1f1;
}
</style>