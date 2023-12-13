<template>
  <div :class="colorSchemeClass">
    <div id="google_translate_element"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      initialMode: "dark-mode",
    };
  },
  computed: {
    colorSchemeClass() {
      if (this.isScrolled && process.client) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "light-mode"
          : "dark-mode";
      } else {
        return this.initialMode;
      }
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
            pageLanguage: "id, en",
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

      window.addEventListener("scroll", this.onNavbarScroll);
    }
  },
  methods: {
    onNavbarScroll() {
      const scrollY = window.scrollY;

      if (scrollY > 150) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>

<style>
/* CSS untuk mode terang */
.light-mode .goog-te-gadget-icon {
  background: url("/icons/language1.png") center center no-repeat !important;
  width: 22px !important;
  height: 22px !important;
  background-size: 25px 25px !important;
  margin-right: 4px !important;
  margin-left: 0 !important;
}

.light-mode .goog-te-gadget-simple {
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
}

.VIpgJd-ZVi9od-ORHb-OEVmcd {
  top: -40px !important;
}

.VIpgJd-ZVi9od-ORHb {
  top: -40px !important;
}

.goog-te-banner-frame.skiptranslate {
  display: none !important;
  visibility: hidden !important;
}

.goog-te-banner-frame {
  display: none !important;
}

.light-mode .VIpgJd-ZVi9od-xl07Ob-lTBxed span {
  display: none;
  top: -40px !important;
}

.light-mode .VIpgJd-ZVi9od-xl07Ob-lTBxed {
  margin: 0 !important;
  top: -40px !important;
}

.light-mode .VIpgJd-ZVi9od-xl07Ob-lTBxed::before {
  color: #5d5d5d !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-left: 3px;
  content: "ID";
  top: -40px !important;
}

/* CSS untuk mode gelap */
.dark-mode .goog-te-gadget-icon {
  background: url("/icons/language.png") center center no-repeat !important;
  width: 22px !important;
  height: 22px !important;
  background-size: 25px 25px !important;
  margin-right: 4px !important;
  margin-left: 0 !important;
}

.dark-mode .goog-te-gadget-simple {
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
}

.dark-mode .VIpgJd-ZVi9od-xl07Ob-lTBxed span {
  display: none;
  top: -40px !important;
}

.dark-mode .VIpgJd-ZVi9od-xl07Ob-lTBxed {
  margin: 0 !important;
  top: -40px !important;
}

.dark-mode .VIpgJd-ZVi9od-xl07Ob-lTBxed::before {
  color: #e7e7e7 !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-left: 3px;
  content: "ID";
  top: -40px !important;
}

.goog-te-gadget-icon {
  background: url("/icons/language.png") center center no-repeat !important;
  width: 22px !important;
  height: 22px !important;
  background-size: 25px 25px !important;
  margin-right: 4px !important;
  margin-left: 0 !important;
}

.translated-ltr {
  margin-top: -40px !important;
}

.translated-ltr {
  margin-top: -40px !important;
}

.goog-te-banner-frame {
  display: none;
  visibility: hidden;
  margin-top: -40px !important;
}

.goog-logo-link {
  display: none !important;
}

.goog-te-gadget {
  color: transparent !important;
}
</style>
