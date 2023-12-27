<template>
  <div>
    <div class="media-streams-feature-podcast-card">
      <div class="d-flex">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <g clip-path="url(#clip0_3893_9351)">
              <path
                d="M29.42 13.42C28.64 12.64 27.38 12.64 26.6 13.42L17.42 22.6C16.64 23.38 16.64 24.64 17.42 25.42L26.6 34.6C27.38 35.38 28.64 35.38 29.42 34.6C30.2 33.82 30.2 32.56 29.42 31.78L21.66 24L29.42 16.24C30.2 15.46 30.18 14.18 29.42 13.42Z"
                fill="#323232" />
            </g>
            <defs>
              <clipPath id="clip0_3893_9351">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
      <div class="d-flex justify-content-center mx-auto">
        <audio controls class="media-streams-feature-podcast__audio">
          <source src="/audio/podcast_example_audio.mp3" type="audio/ogg">
          <source src="/audio/podcast_example_audio.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>

      <div class="d-flex justify-content-start">
        <div class="media-streams-feature-podcast__action">
          <div class="d-flex justify-content-between flex-wrap">
            <div>
              <span class="media-streams-feature-podcast__action-like">
                <button type="button" class="btn btn-outline-none border-0">
                  <div class="vstack">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <g clip-path="url(#clip0_3894_9418)">
                        <path
                          d="M16.4 2.57521L9.475 9.50021C9.0125 9.96271 8.75 10.6002 8.75 11.2627V23.7502C8.75 25.1252 9.875 26.2502 11.25 26.2502H22.5C23.5 26.2502 24.4 25.6502 24.8 24.7377L28.875 15.2252C29.925 12.7502 28.1125 10.0002 25.425 10.0002H18.3625L19.55 4.27521C19.675 3.65021 19.4875 3.01271 19.0375 2.56271C18.3 1.83771 17.125 1.83771 16.4 2.57521ZM3.75 26.2502C5.125 26.2502 6.25 25.1252 6.25 23.7502V13.7502C6.25 12.3752 5.125 11.2502 3.75 11.2502C2.375 11.2502 1.25 12.3752 1.25 13.7502V23.7502C1.25 25.1252 2.375 26.2502 3.75 26.2502Z"
                          fill="#323232" />
                      </g>
                      <defs>
                        <clipPath id="clip0_3894_9418">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Suka
                  </div>
                </button>
              </span>
              <span class="media-streams-feature-podcast__action-volume">
                <button type="button" class="btn btn-outline-none border-0">
                  <div class="vstack">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M3.75 12.5001V17.5001C3.75 18.1876 4.3125 18.7501 5 18.7501H8.75L12.8625 22.8626C13.65 23.6501 15 23.0876 15 21.9751V8.01261C15 6.90011 13.65 6.33761 12.8625 7.12511L8.75 11.2501H5C4.3125 11.2501 3.75 11.8126 3.75 12.5001ZM20.625 15.0001C20.625 12.7876 19.35 10.8876 17.5 9.96261V20.0251C19.35 19.1126 20.625 17.2126 20.625 15.0001ZM17.5 5.56261V5.81261C17.5 6.28761 17.8125 6.70011 18.25 6.87511C21.475 8.16261 23.75 11.3251 23.75 15.0001C23.75 18.6751 21.475 21.8376 18.25 23.1251C17.8 23.3001 17.5 23.7126 17.5 24.1876V24.4376C17.5 25.2251 18.2875 25.7751 19.0125 25.5001C23.25 23.8876 26.25 19.8001 26.25 15.0001C26.25 10.2001 23.25 6.11261 19.0125 4.50011C18.2875 4.21261 17.5 4.77511 17.5 5.56261Z"
                        fill="#323232" />
                    </svg>
                    Volume
                  </div>
                </button>
              </span>
            </div>

            <div>
              <span class="media-streams-feature-podcast__action-share">
                <button type="button" class="btn btn-outline-none border-0">
                  <div class="vstack">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <g clip-path="url(#clip0_3894_9461)">
                        <path
                          d="M22.5 20.1C21.55 20.1 20.7 20.475 20.05 21.0625L11.1375 15.875C11.2 15.5875 11.25 15.3 11.25 15C11.25 14.7 11.2 14.4125 11.1375 14.125L19.95 8.9875C20.625 9.6125 21.5125 10 22.5 10C24.575 10 26.25 8.325 26.25 6.25C26.25 4.175 24.575 2.5 22.5 2.5C20.425 2.5 18.75 4.175 18.75 6.25C18.75 6.55 18.8 6.8375 18.8625 7.125L10.05 12.2625C9.375 11.6375 8.4875 11.25 7.5 11.25C5.425 11.25 3.75 12.925 3.75 15C3.75 17.075 5.425 18.75 7.5 18.75C8.4875 18.75 9.375 18.3625 10.05 17.7375L18.95 22.9375C18.8875 23.2 18.85 23.475 18.85 23.75C18.85 25.7625 20.4875 27.4 22.5 27.4C24.5125 27.4 26.15 25.7625 26.15 23.75C26.15 21.7375 24.5125 20.1 22.5 20.1Z"
                          fill="#323232" />
                      </g>
                      <defs>
                        <clipPath id="clip0_3894_9461">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Bagikan
                  </div>
                </button>
              </span>
              <span class="media-streams-feature-podcast__action-download">
                <button type="button" class="btn btn-outline-none border-0">
                  <div class="vstack">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <g clip-path="url(#clip0_3894_9464)">
                        <path
                          d="M23.75 16.25V22.5C23.75 23.1875 23.1875 23.75 22.5 23.75H7.5C6.8125 23.75 6.25 23.1875 6.25 22.5V16.25C6.25 15.5625 5.6875 15 5 15C4.3125 15 3.75 15.5625 3.75 16.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V16.25C26.25 15.5625 25.6875 15 25 15C24.3125 15 23.75 15.5625 23.75 16.25ZM16.25 15.8375L18.6 13.4875C19.0875 13 19.875 13 20.3625 13.4875C20.85 13.975 20.85 14.7625 20.3625 15.25L15.875 19.7375C15.3875 20.225 14.6 20.225 14.1125 19.7375L9.625 15.25C9.1375 14.7625 9.1375 13.975 9.625 13.4875C10.1125 13 10.9 13 11.3875 13.4875L13.75 15.8375V5C13.75 4.3125 14.3125 3.75 15 3.75C15.6875 3.75 16.25 4.3125 16.25 5V15.8375Z"
                          fill="#323232" />
                      </g>
                      <defs>
                        <clipPath id="clip0_3894_9464">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Unduh
                  </div>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.media-streams-feature-podcast-card {
  width: 100%;
  height: 400px;
  border-radius: 4px;
  background-color: #E7E7E7;
  padding: 20px;
  position: relative;
}

.media-streams-feature-podcast-card .media-streams-feature-podcast__audio {
  position: absolute;
  top: 250px;
  width: 80%;
}

.media-streams-feature-podcast-card .media-streams-feature-podcast__action {
  position: absolute;
  top: 320px;
  left: 40px;
  right: 40px;
  /* width: 100%; */
}
</style>