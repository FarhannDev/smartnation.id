<template>
  <div class="hero">
    <div class="hero-carousel" ref="carousel">
      <div class="carousel-inner">
        <div
          class="hero-item"
          :class="{ active: index === currentIndex }"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="hero-overlay">
            <img :src="item.image" alt="Hero Image" class="hero-image" />
            <h1 class="hero-title">{{ item.title }}</h1>
          </div>
        </div>
      </div>
      <div class="hero-dots">
        <span
          v-for="(dot, dotIndex) in items"
          :key="dotIndex"
          class="dot"
          :class="{ active: dotIndex === currentIndex }"
          @click="goTo(dotIndex)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Asyik, Teknologi 6G Sudah Disiapkan. Apa Saja Manfaatnya?", // Tambahkan judul untuk setiap item
          image: "/images/hero1.png",
        },
        {
          title: "Judul ",
          image: "/images/hero2.png",
        },
        {
          title: "Judul 3",
          image: "/images/hero3.png",
        },
        {
          title: "Judul 4",
          image: "/images/hero4.png",
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    goTo(index) {
      this.currentIndex = index;
    },
    next() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.items.length - 1;
      }
    },
  },
  created() {
    setInterval(this.next, 1000000);

    // Memperbarui judul di tengah gambar saat berpindah
    this.$watch("currentIndex", (newIndex) => {
      // Anda dapat memilih elemen judul yang sesuai sesuai dengan indeks currentIndex
      const titleElement = document.querySelector(
        ".hero-item.active .hero-title"
      );
      if (titleElement) {
        titleElement.textContent = this.items[newIndex].title;
      }
    });
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero-carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  max-width: 100%;
  margin: 0 auto;
  height: 700px;
}

.hero-item {
  flex: 0 0 100%;
  width: 100%;
  position: absolute;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s;
  height: 100%;
  overflow: hidden;
}

.hero-image {
  width: "1200px";
  height: "690px";
}

.hero-item.active {
  opacity: 1;
}

.hero-overlay {
  position: relative;
  overflow: hidden;
}

.hero-item img {
  width: 100%;
  height: auto;
}

.hero-title {
  text-align: left;
  width: 670px;
  height: 164px;
  flex-shrink: 0;
  color: var(--font-50, #f6f6f6);
  /* Font/Heading 3 Bold */
  font-family: Poppins;
  font-size: 39px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 46.8px */
  position: absolute;
  top: 50%; /* Membuat judul berada di tengah vertikal */
  left: 50%; /* Membuat judul berada di tengah horizontal */
  transform: translate(-50%, -50%);
}

.hero-dots {
  display: flex;
  width: 1440px;
  padding: 19.2px 28.8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 20.6%;
  left: 50.4%;
  gap: 9.6px;
  transform: translateX(-50%);
  z-index: 1;
}

.dot {
  display: inline-block;
  width: 9.6px;
  height: 9.6px;
  background-color: #bdbdbd;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #D71149;
}
</style>
