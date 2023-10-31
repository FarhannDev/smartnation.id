<template>
  <div>
    <div id="google_translate_element"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      // Load the Google Translate script
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.type = "text/javascript";
      document.body.appendChild(script);

      // Initialize the Google Translate button
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "id, en", // Set bahasa default menjadi ID
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            includedLanguages: "en,id",
          },
          "google_translate_element"
        );

        // Menghapus teks "Pilih Bahasa"
        const dropdownContainer = document.querySelector(".goog-te-combo");
        if (dropdownContainer) {
          dropdownContainer.addEventListener("DOMNodeInserted", () => {
            const options = dropdownContainer.querySelectorAll("option");
            options.forEach((option) => {
              if (option.value === "id") {
                option.textContent = "ID";
              } else if (option.value === "en") {
                option.textContent = "EN";
              }
            });
          });
        }
      };
    }
  },
};
</script>

<style>

.goog-te-gadget-icon {
  background: url('public/icons/language1.png') center center no-repeat !important;
  /* Ganti '/path/to/your-new-image.png' dengan URL gambar baru */
}
/* CSS untuk mengganti teks "Pilih Bahasa" menjadi "ID/EN" */
.google_translate_element select.goog-te-combo {
  font-size: 0; /* Mengatur ukuran font ke 0 untuk menyembunyikan teks asli */
}


.google_translate_element select.goog-te-combo option[value="id"]::before {
  content: "ID/";
}

.google_translate_element select.goog-te-combo option[value="en"]::before {
  content: "EN/";
}

.div {
  width: 19%;
}

.google_translate_element {
  background: transparent !important;
  position: static;
  top: 0;
  right: 0;
  left: 0;
  transform: scale(0.9);
  z-index: 1000;
}

.goog-te-gadget-simple {
  background: transparent !important;
}

.VIpgJd-ZVi9od-xl07Ob-lTBxed {
  visibility: hidden;
  content: "Teks Baru:";
}
</style>
