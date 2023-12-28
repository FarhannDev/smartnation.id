<script lang="ts" setup>


onMounted(() => {
  window.addEventListener("scroll", modalPopupShow);

});

onBeforeMount(() => {
  window.removeEventListener("scroll", modalPopupShow);

});


const modalPopupShow = () => {
  const scrollY = window.scrollY;
  if (scrollY >= 650) {
    return document.querySelector('.advertising-container-modal')
      ?.classList.add('show')
  }

  return

}


const closePopupModal = () => {
  return document.querySelector('.advertising-container-modal')
    ?.classList.remove('show');
}

</script>


<template>
  <div>
    <div class="advertising-container-modal" data-aos="fade-up" data-aos-duration="1000">
      <div class="advertising-icon-close-container" @click="closePopupModal">
        <svg class="advertising-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none">
          <g clip-path="url(#clip0_3548_13491)">
            <path
              d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.11 5.69997C6.72 5.30997 6.09 5.30997 5.7 5.69997C5.31 6.08997 5.31 6.71997 5.7 7.10997L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
              fill="#323232" />
          </g>
          <defs>
            <clipPath id="clip0_3548_13491">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="advertising-modal-title">Ads</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.advertising-container-modal {
  width: 100%;
  height: 486px;
  margin: 0 auto;
  flex-shrink: 0;
  background: var(--Primary-200, #FFCAD4);
  display: none;
}

.advertising-container-modal.show {
  widows: 100%;
  height: 486px;
  flex-shrink: 0;
  background: var(--Primary-200, #FFCAD4);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 10000;

}


.advertising-container-modal .advertising-modal-title {
  color: var(--Font-400, #888);
  font-family: Inter;
  font-size: 70.037px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.advertising-container-modal .advertising-icon-close-container {
  position: absolute;
  right: 20px;
  top: 15px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.advertising-container-modal .advertising-icon-close-container .advertising-icon-close {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

@media (min-width: 1200px) {
  .advertising-container-modal.show {
    width: 796px;
    height: 486px;
    position: absolute;
    top: 55px;
    left: 25%;
    right: 25%;
  }

}
</style>