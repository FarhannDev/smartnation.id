<script lang="ts" setup>
import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
import { RouteLocationNormalizedLoaded } from "vue-router";


definePageMeta({ layout: 'content-layout' })

useSeoMeta({
  title: "Media Podcast",
  description: "Kumpulan Media Podscast Smart Nation",
})

const route: RouteLocationNormalizedLoaded = useRoute()
const colorMode: ColorModeInstance = useColorMode()

</script>

<template>
  <div>
    <section id="media-podcast-detail">
      <div class="container">
        <div class="row justify-content-start g-2 pt-5">
          <div class="col">
            <div class="vstack gap-4">
              <MediaPodcastFeatured />
              <MediaStreamContentHeading title="Semua" />
              <div class="row justify-content-arround g-3 px-0 mx-0">
                <MediaPodcastThumbnailCardItem v-for="(loop, idx) in 100" :key="idx"
                  class="col-lg-6 col-xl-6 col-md-12 col-sm-12" :title="`Judul Podcast Ke-${idx + 1}`"
                  :date="new Date().toISOString()" thumbnail="/images/social-media/follow-tt-1.jpeg"
                  :link="`podcast-${idx + 1}`" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr v-if="colorMode.preference === 'dark'" class="text-secondary" />
  </div>
</template>

<style scoped>
#media-podcast-detail {
  width: 100%;
  height: auto;
  padding: 7em 0 7em 0;
  overflow: hidden;
}
</style>