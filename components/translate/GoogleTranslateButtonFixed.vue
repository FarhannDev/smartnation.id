<template>
  <div>
    <div :class="colorSchemeClass">
      <div id="google_translate_element"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    colorSchemeClass() {
      if (process.client) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark-mode"
          : "light-mode";
      }
      return ""; // Return an empty class on the server-side
    },
  },
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

<style scoped>
/* CSS untuk mode terang */
.light-mode .goog-te-gadget-icon {
  background: url("public/icons/language1.png") center center no-repeat !important;
  width: 22px !important;
  height: 22px !important;
  background-size: 25px 25px !important;
  margin-right: 4px !important;
  margin-left: 0 !important;
}
/* CSS untuk mengganti teks "Pilih Bahasa" menjadi "ID/EN" */
.light-mode .google_translate_element select.goog-te-combo {
  font-size: 0; /* Mengatur ukuran font ke 0 untuk menyembunyikan teks asli */
}

.light-mode
  .google_translate_element
  select.goog-te-combo
  option[value="id"]::before {
  content: "ID/";
}

.light-mode
  .google_translate_element
  select.goog-te-combo
  option[value="en"]::before {
  content: "EN/";
}

.light-mode .div {
  width: 19%;
}

.light-mode .google_translate_element {
  background: transparent !important;
  position: static;
  top: 0;
  right: 0;
  left: 0;
  transform: scale(0.9);
  z-index: 1000;
}

.light-mode .goog-te-gadget-simple {
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
}

.light-mode .VIpgJd-ZVi9od-xl07Ob-lTBxed span {
  display: none;
}

.light-mode .VIpgJd-ZVi9od-xl07Ob-lTBxed {
  margin: 0 !important;
  margin-left: 3px !important;
}

.light-mode .VIpgJd-ZVi9od-xl07Ob-lTBxed::before {
  color: #5d5d5d !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-left: 3px;
  content: "ID";
}
/* CSS untuk mode gelap */
@media (prefers-color-scheme: dark) {
  .goog-te-gadget-icon {
    background: url("public/icons/language.png") center center no-repeat !important;
    width: 22px !important;
    height: 22px !important;
    background-size: 25px 25px !important;
    margin-right: 4px !important;
    margin-left: 0 !important;
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
    padding: 0 !important;
    border: 0 !important;
    background: transparent !important;
  }

  .VIpgJd-ZVi9od-xl07Ob-lTBxed span {
    display: none;
  }

  .VIpgJd-ZVi9od-xl07Ob-lTBxed {
    margin: 0 !important;
    margin-left: 3px !important;
  }

  .VIpgJd-ZVi9od-xl07Ob-lTBxed::before {
    color: #e7e7e7 !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-left: 3px;
    content: "ID";
  }
}
</style>
