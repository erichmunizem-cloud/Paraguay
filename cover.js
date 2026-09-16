(() => {
  const translations = {
    pt: { collection: "Memórias do Paraguai", collectionSub: "Álbum do Serviço Especial", eyebrow: "Serviço Especial no Paraguai", title: "Memórias do Paraguai", subtitle: "Um álbum de fotografias, lugares e lembranças", enter: "Entrar no álbum" },
    es: { collection: "Memorias de Paraguay", collectionSub: "Álbum del Servicio Especial", eyebrow: "Servicio Especial en Paraguay", title: "Memorias de Paraguay", subtitle: "Un álbum de fotografías, lugares y recuerdos", enter: "Entrar al álbum" },
    en: { collection: "Memories of Paraguay", collectionSub: "Special Service Album", eyebrow: "Special Service in Paraguay", title: "Memories of Paraguay", subtitle: "An album of photographs, places, and memories", enter: "Enter the album" }
  };

  function setLanguage(lang) {
    localStorage.setItem("album-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = translations[lang][node.dataset.i18n];
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  setLanguage(localStorage.getItem("album-lang") || "pt");
})();
