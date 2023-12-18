<script lang="ts" setup>

defineProps({
  title: { type: String, required: true, default: 'Judul Podcast' },
  date: { type: String, required: true, default: '2023-12-15T14:03:08.321Z' },
  view: { type: Number, required: true, default: 0 },
  thumbnail: { type: String, required: true, default: 'https://s3-alpha-sig.figma.com/img/1097/f19a/df26ef6d586e4e091b3ed0928488eae6?Expires=1703462400&Signature=cbsoco-ZRrw2urXk~88nf5xMRLyNrZQrIZFN4cdGFkKhw6ILrlcvko3R2tGsbGP1e9FpQMEfVNXpe3DiUV1V4uDK9bBDphcZrEGOsxvYRU7YigDoFZIuHOnPIj-mZHZ4pDsxEPdVcbF8aOpqaYq7CSJJKUL6MIqpn6B9H7xkZ7SXDgnP9nrWOXB3yf8sRCf0D72~3lUuMGBmqxORi6s3U1~5gl2OUWXU~NNlfflFn2H-ma6dCP3E-GjGYeIpneM9UiKw1nQ6XP1jAaLtdwXXTaC7~H8D99K7ijVCkeswyjJdFBV-S9fTE7v0kNKrHccAe6MGp~wHZ870f6G6rlMwlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }
})

</script>


<template>
  <div>
    <div class="media-streams-card-podcast">
      <div class="d-flex align-items-center justify-content-arround g-2">
        <NuxtImg class="media-streams-podcast__thumbnail" :src="thumbnail" />

        <div class="d-flex flex-column mx-3">
          <h3 class="media-streams-podcast__title">{{ title }}</h3>
          <div class="media-streams-podcast__info">
            <div class="vstack gap-2">
              <div class="media-streams-podcast__info-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <g clip-path="url(#clip0_4042_2837)">
                    <path
                      d="M6 3V6H8.25M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6Z"
                      stroke="#B3B9C6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4042_2837">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {{ useTimestamps(date) }}
              </div>
              <div class="media-streams-podcast__info-views">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1.01775 6.1612C0.98321 6.05757 0.983177 5.94537 1.01766 5.84171C1.71184 3.75486 3.68037 2.25 6.00038 2.25C8.31931 2.25 10.2871 3.75346 10.9821 5.8388C11.0167 5.94243 11.0167 6.05463 10.9822 6.15829C10.288 8.24514 8.31952 9.75 5.99951 9.75C3.68057 9.75 1.7128 8.24654 1.01775 6.1612Z"
                    stroke="#B3B9C6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M7.49998 6C7.49998 6.82843 6.8284 7.5 5.99998 7.5C5.17155 7.5 4.49998 6.82843 4.49998 6C4.49998 5.17157 5.17155 4.5 5.99998 4.5C6.8284 4.5 7.49998 5.17157 7.49998 6Z"
                    stroke="#B3B9C6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                {{ view }}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* podcats */

.media-streams-card-podcast {
  width: 100%;
  /* min-width: 573px; */
  height: 172px;
  padding: 10px;
  align-items: center;
  border-radius: 8px;
  background: #FFF;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

}

.media-streams-card-podcast .media-streams-podcast__thumbnail {
  width: 150px;
  height: 150px;
  border: 0;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* filter: brightness(75%); */
  backface-visibility: hidden;
  vertical-align: top;
}

.media-streams-card-podcast .media-streams-podcast__title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  align-self: stretch;
  overflow: hidden;
  color: var(--Font-600, #565E73);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* 125% */
  letter-spacing: 0.016px;
}

.media-streams-card-podcast .media-streams-podcast__info .media-streams-podcast__info-date {
  color: var(--Font-400, #8A94A6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 114.286% */
  letter-spacing: 0.07px;
}

.media-streams-card-podcast .media-streams-podcast__info .media-streams-podcast__info-views {
  color: var(--Font-400, #8A94A6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 114.286% */
  letter-spacing: 0.07px;
}

.media-streams-card-podcast *,
.media-streams-card-podcast::before,
.media-streams-card-podcast::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;

}

.media-streams-card-podcast:hover::before,
.media-streams-card-podcast:hover::after {
  opacity: 1;
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
  opacity: 1;
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
}

.media-streams-card-podcast:hover {
  cursor: pointer;
}

.media-streams-card-podcast .media-streams-podcast__thumbnail:hover {
  zoom: 1;
  /* filter: alpha(opacity=20);
  -webkit-opacity: 0.2;
  opacity: 0.1; */
  filter: brightness(75%);
}

.dark-mode .media-streams-card-podcast {
  background-color: #212120;
}

.dark-mode .media-streams-card-podcast .media-streams-podcast__title {
  color: #fff;
}

.dark-mode .media-streams-card-podcast .media-streams-podcast__info-date {
  color: #fff;
}

.dark-mode .media-streams-card-podcast .media-streams-podcast__info-views {
  color: #fff;
}
</style>