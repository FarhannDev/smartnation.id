<template>
  <button class="scroll-to-top-button" @click="scrollToTop" v-if="showButton">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    scrollToTop() {
      const scrollOptions = {
        top: 0,
        behavior: "smooth",
      };
      document.documentElement.scrollTo(scrollOptions);
      document.body.scrollTo(scrollOptions);
    },
    toggleButton() {
      this.showButton = document.documentElement.scrollTop >= 650;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.toggleButton);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.toggleButton);
  },
};
</script>

<style scoped>
.fas {
  width: 11px;
  height: 18px;
}

.scroll-to-top-button {
  position: fixed;
  z-index: 1000;
  bottom: 15px;
  right: 15px;
  background-color: #d71149;
  color: #fff;
  border: none;
  padding: 8px 14.5px;
  border-radius: 5px;
  cursor: pointer;
  animation: bounce 1s infinite;
  /* Animasi gerakan */
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
    /* Menggerakkan tombol ke atas saat animasi berada di titik 40% */
  }
}</style>
