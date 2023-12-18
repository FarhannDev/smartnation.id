<script lang="ts" setup>

defineProps({ title: { type: String, required: true, default: 'Judul Tiktok Terbaru' }, date: { type: String, required: true, default: '2023-12-15T14:03:08.321Z' }, thumbnail: { type: String, required: true, default: 'https://s3-alpha-sig.figma.com/img/cafd/2db1/0d8268db15a5de0c4d2c70f97a749793?Expires=1703462400&Signature=OLJJbMqWUi-WKSsjFDqg5wwYa9e5SsO0VvQUt979Smj~xxvhYRvtajcNMTo7l0jqK7S-cznfL6-rwbX2FMZ~WjaWrCuWl1gzTXhS7Yw3CB3DkN~UghUMCnND1hfoX7sLjdmi457--sGjvYRDz0bDxNZPY~O05-uMOlcPU0VlyDhwpDR2IHOMooAoDM3MQ4vEhV1OfDCw0Xh5NWRrzFmNxXR8MAuHu2Rp0K~V9fWnLMn-52ve1~7oARY-Cy0s~80pQlZhTRbbC4V0XWXCdymGaiiXXn8QV8Mq7~SmK5oMjW93JFpJkfvkQ15~wb8tSXGvXTxPHnSaWj13fo~PwkTGIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' } })

</script>



<template>
  <div>
    <div class="media-streams-card-tiktok">
      <NuxtImg class="media-streams-tiktok__thumbnail  card-img-top" :src="thumbnail" :alt="title" loading="lazy" />
      <div class="media-streams-card-tiktok-content">
        <div class="vstack gap-2">
          <h5 class="media-streams-tiktok-content__title">{{ title }} </h5>
          <div class="media-streams-titkok-info">
            <span class="media-streams-titkok-info__date"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_4042_1443)">
                  <path
                    d="M9.99163 1.66699C5.39163 1.66699 1.66663 5.40033 1.66663 10.0003C1.66663 14.6003 5.39163 18.3337 9.99163 18.3337C14.6 18.3337 18.3333 14.6003 18.3333 10.0003C18.3333 5.40033 14.6 1.66699 9.99163 1.66699ZM9.99996 16.667C6.31663 16.667 3.33329 13.6837 3.33329 10.0003C3.33329 6.31699 6.31663 3.33366 9.99996 3.33366C13.6833 3.33366 16.6666 6.31699 16.6666 10.0003C16.6666 13.6837 13.6833 16.667 9.99996 16.667ZM9.81663 5.83366H9.76663C9.43329 5.83366 9.16663 6.10033 9.16663 6.43366V10.367C9.16663 10.6587 9.31663 10.9337 9.57496 11.0837L13.0333 13.1587C13.3166 13.3253 13.6833 13.242 13.85 12.9587C14.025 12.6753 13.9333 12.3003 13.6416 12.1337L10.4166 10.217V6.43366C10.4166 6.10033 10.15 5.83366 9.81663 5.83366Z"
                    fill="#888888" />
                </g>
                <defs>
                  <clipPath id="clip0_4042_1443">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>{{ useTimestamps(date) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tiktok */

.media-streams-card-tiktok {
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--Font-100, #E7E7E7);
  background: #FFF;
  margin-bottom: 13px;
}

.media-streams-card-tiktok .media-streams-card-tiktok-content {
  padding: 16px 16px 20px 16px;
}

.media-streams-card-tiktok .media-streams-tiktok__thumbnail {
  width: 100%;
  height: 250px;
  border-radius: 8px 8px 0px 0px;
  /* border: 1px solid var(--Font-100, #E7E7E7); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(75%);
}

.media-streams-card-tiktok .media-streams-tiktok-content .media-streams-tiktok-content__title {
  color: var(--Font-600, #5D5D5D);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

.media-streams-card-tiktok .media-streams-tiktok-content .media-streams-card-tiktok-content-info__date {
  color: var(--Font-400, #888);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}


.media-streams-card-tiktok *,
.media-streams-card-tiktok::before,
.media-streams-card-tiktok::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.media-streams-card-tiktok:hover::before,
.media-streams-card-tiktok:hover::after {
  opacity: 1;
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
  opacity: 1;
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
}


.media-streams-card-tiktok:hover {
  cursor: pointer;
}

.media-streams-tiktok__thumbnail:hover {
  zoom: 1;
  filter: alpha(opacity=50);
  -webkit-opacity: 0.5;
  opacity: 0.5;
  /* filter: brightness(75%); */
}

.dark-mode .media-streams-card-tiktok {
  background-color: #212120;
  border: 0;
}

.dark-mode .media-streams-card-tiktok .media-streams-tiktok-content .media-streams-tiktok-content__title {
  color: #fff;
}

.dark-mode .media-streams-card-tiktok .media-streams-tiktok-content .media-streams-card-tiktok-content-info__date {
  color: #fff;
}
</style>