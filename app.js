(() => {
  const media = Array.isArray(window.ALBUM_MEDIA) ? window.ALBUM_MEDIA : [];
  const translations = {
    pt: {
      skip: "Pular para o álbum", collection: "Memórias do Paraguai", collectionSub: "Álbum do Serviço Especial",
      eyebrow: "Serviço Especial no Paraguai", period: "Setembro de 1998 — Agosto de 1999", openAlbum: "Abrir o álbum",
      chapterOne: "Primeira designação", storyTitle: "Um ano guardado em fotografias",
      storyBody: "Entre setembro de 1998 e agosto de 1999, a Colônia San Alberto foi a base desta designação. As imagens registram a casa, a cidade, a pregação, as reuniões e as viagens realizadas durante esse período.",
      place: "Lugar", duration: "Período", records: "Registros", periodShort: "set. 1998 — ago. 1999",
      cityLabel: "A cidade", cityBody: "San Alberto está no norte de Alto Paraná, junto à Ruta PY07, a cerca de 411 km de Asunción. Antiga Gleba 6, tornou-se distrito em 1991 e é conhecida como “Capital do Agro” pela presença marcante da agricultura na economia local.",
      placeSource: "Fonte sobre a localidade", geo: "Geolocalização", openMap: "Abrir no mapa", approximate: "Localização aproximada", locationLabel: "Localidade destas lembranças",
      photoArchive: "Arquivo fotográfico", albumTitle: "Cenas desta designação", albumHelp: "Cada pasta aparece como um álbum separado. Escolha um capítulo e toque em uma fotografia para ampliá-la.",
      all: "Todas", city: "Cidade", home: "Casa", ministry: "Pregação", hall: "Vivienda e Salão", journeys: "Viagens", loadMore: "Ver mais fotografias",
      travelLabel: "Viagens durante o período", travelTitle: "Outros lugares destas lembranças",
      asuncion: "Capital do Paraguai, situada às margens do rio Paraguai. As fotografias registram visitas e um casamento no Club Nacional de Regatas El Mbiguá.",
      capiata: "Cidade do Departamento Central, na área metropolitana de Asunción. Aqui ficam os registros da Escola do Serviço de Pioneiro em Betel, em abril de 1999.",
      hernandarias: "Cidade de Alto Paraná próxima ao rio Paraná e à região de Itaipu. O capítulo reúne visitas, encontros e despedidas.",
      itaipuTitle: "Usina de Itaipu", itaipu: "Usina hidrelétrica binacional no rio Paraná, na fronteira entre Paraguai e Brasil. As fotografias registram uma visita realizada durante esta designação.",
      oleary: "Cidade de Alto Paraná situada junto à Ruta PY02, aproximadamente 80 km de Ciudad del Este. As imagens registram uma visita a um casal de pioneiros.",
      minga: "Município de Alto Paraná ligado ao corredor da Ruta PY02. As lembranças desta viagem pertencem à Assembleia de Circuito de 1999.",
      limoy: "Localidade rural do distrito de Minga Porã, no norte de Alto Paraná. Este mapa situa o lugar correspondente às fotografias deste capítulo.",
      mingaPora: "Município do norte de Alto Paraná, próximo de San Alberto. As fotografias deste grupo pertencem à Colônia Minga Porã.",
      generalDiaz: "Colônia rural de Alto Paraná. A marcação cartográfica ajuda a situar o território visitado durante esta designação.",
      lote8: "Localidade rural vinculada ao distrito de Minga Porã, em Alto Paraná. A busca cartográfica indica a área correspondente a estas lembranças.",
      lote9: "Localidade rural da região de San Alberto, em Alto Paraná. As fotografias deste capítulo foram preservadas como um grupo próprio.",
      mbaracayu: "Município de Alto Paraná, ao norte de Hernandarias. Este capítulo reúne lembranças da pregação nessa localidade.",
      sanFrancisco: "Localidade rural do distrito de San Alberto, em Alto Paraná. O mapa abre a área associada às fotografias deste capítulo.",
      sanRamon: "Localidade rural do distrito de San Alberto, em Alto Paraná. O mapa marca sua posição a leste da cidade de San Alberto.",
      sanAlbertoFolder: "Cidade que serviu como base desta designação, no norte de Alto Paraná. Este mapa acompanha o grupo de fotografias feitas na própria localidade.",
      footerTitle: "Serviço Especial no Paraguai", backTop: "Voltar ao início ↑", photos: "fotografias", videos: "vídeos", photo: "fotografia", video: "vídeo"
    },
    es: {
      skip: "Ir al álbum", collection: "Memorias de Paraguay", collectionSub: "Álbum del Servicio Especial",
      eyebrow: "Servicio Especial en Paraguay", period: "Septiembre de 1998 — Agosto de 1999", openAlbum: "Abrir el álbum",
      chapterOne: "Primera asignación", storyTitle: "Un año guardado en fotografías",
      storyBody: "Entre septiembre de 1998 y agosto de 1999, la Colonia San Alberto fue la base de esta asignación. Las imágenes conservan escenas de la casa, la ciudad, la predicación, las reuniones y los viajes realizados durante ese período.",
      place: "Lugar", duration: "Período", records: "Registros", periodShort: "sep. 1998 — ago. 1999",
      cityLabel: "La ciudad", cityBody: "San Alberto se encuentra en el norte de Alto Paraná, junto a la Ruta PY07, a unos 411 km de Asunción. La antigua Gleba 6 se convirtió en distrito en 1991 y es conocida como la “Capital del Agro” por la fuerte presencia de la agricultura en la economía local.",
      placeSource: "Fuente sobre la localidad", geo: "Geolocalización", openMap: "Abrir en el mapa", approximate: "Ubicación aproximada", locationLabel: "Localidad de estos recuerdos",
      photoArchive: "Archivo fotográfico", albumTitle: "Escenas de esta asignación", albumHelp: "Cada carpeta aparece como un álbum separado. Elija un capítulo y pulse una fotografía para ampliarla.",
      all: "Todas", city: "Ciudad", home: "Casa", ministry: "Predicación", hall: "Vivienda y Salón", journeys: "Viajes", loadMore: "Ver más fotografías",
      travelLabel: "Viajes durante el período", travelTitle: "Otros lugares de estos recuerdos",
      asuncion: "Capital de Paraguay, situada a orillas del río Paraguay. Las fotografías registran visitas y una boda en el Club Nacional de Regatas El Mbiguá.",
      capiata: "Ciudad del Departamento Central, en el área metropolitana de Asunción. Aquí se conservan los registros de la Escuela del Servicio de Precursor en Betel, en abril de 1999.",
      hernandarias: "Ciudad de Alto Paraná próxima al río Paraná y a la zona de Itaipú. El capítulo reúne visitas, encuentros y despedidas.",
      itaipuTitle: "Central Hidroeléctrica de Itaipú", itaipu: "Central hidroeléctrica binacional sobre el río Paraná, en la frontera entre Paraguay y Brasil. Las fotografías registran una visita realizada durante esta asignación.",
      oleary: "Ciudad de Alto Paraná situada junto a la Ruta PY02, aproximadamente a 80 km de Ciudad del Este. Las imágenes registran una visita a una pareja de precursores.",
      minga: "Municipio de Alto Paraná conectado con el corredor de la Ruta PY02. Los recuerdos de este viaje pertenecen a la Asamblea de Circuito de 1999.",
      limoy: "Localidad rural del distrito de Minga Porã, en el norte de Alto Paraná. Este mapa sitúa el lugar correspondiente a las fotografías de este capítulo.",
      mingaPora: "Municipio del norte de Alto Paraná, próximo a San Alberto. Las fotografías de este grupo pertenecen a la Colonia Minga Porã.",
      generalDiaz: "Colonia rural de Alto Paraná. La referencia cartográfica ayuda a situar el territorio visitado durante esta asignación.",
      lote8: "Localidad rural vinculada al distrito de Minga Porã, en Alto Paraná. La búsqueda cartográfica indica el área correspondiente a estos recuerdos.",
      lote9: "Localidad rural de la región de San Alberto, en Alto Paraná. Las fotografías de este capítulo se conservaron como un grupo propio.",
      mbaracayu: "Municipio de Alto Paraná, al norte de Hernandarias. Este capítulo reúne recuerdos de la predicación en esta localidad.",
      sanFrancisco: "Localidad rural del distrito de San Alberto, en Alto Paraná. El mapa abre el área asociada a las fotografías de este capítulo.",
      sanRamon: "Localidad rural del distrito de San Alberto, en Alto Paraná. El mapa marca su posición al este de la ciudad de San Alberto.",
      sanAlbertoFolder: "Ciudad que sirvió como base de esta asignación, en el norte de Alto Paraná. Este mapa acompaña el grupo de fotografías tomadas en la propia localidad.",
      footerTitle: "Servicio Especial en Paraguay", backTop: "Volver al inicio ↑", photos: "fotografías", videos: "videos", photo: "fotografía", video: "video"
    },
    en: {
      skip: "Skip to the album", collection: "Memories of Paraguay", collectionSub: "Special Service Album",
      eyebrow: "Special Service in Paraguay", period: "September 1998 — August 1999", openAlbum: "Open the album",
      chapterOne: "First assignment", storyTitle: "A year preserved in photographs",
      storyBody: "From September 1998 to August 1999, Colonia San Alberto was the base for this assignment. The images preserve scenes from home, the town, the ministry, meetings, and journeys made during that period.",
      place: "Place", duration: "Period", records: "Records", periodShort: "Sep. 1998 — Aug. 1999",
      cityLabel: "The town", cityBody: "San Alberto lies in northern Alto Paraná along Route PY07, about 411 km from Asunción. Formerly known as Gleba 6, it became a district in 1991 and is known as the “Capital of Agriculture” because farming is central to the local economy.",
      placeSource: "Source about the locality", geo: "Geolocation", openMap: "Open map", approximate: "Approximate location", locationLabel: "Location in these memories",
      photoArchive: "Photographic archive", albumTitle: "Scenes from this assignment", albumHelp: "Each folder appears as a separate album. Choose a chapter and tap a photograph to enlarge it.",
      all: "All", city: "Town", home: "Home", ministry: "Ministry", hall: "Home and Kingdom Hall", journeys: "Journeys", loadMore: "View more photographs",
      travelLabel: "Journeys during the period", travelTitle: "Other places in these memories",
      asuncion: "Paraguay’s capital, located on the Paraguay River. The photographs record visits and a wedding at Club Nacional de Regatas El Mbiguá.",
      capiata: "A city in the Central Department, within the Asunción metropolitan area. These photographs preserve the Pioneer Service School at Bethel in April 1999.",
      hernandarias: "A city in Alto Paraná near the Paraná River and the Itaipu area. This chapter brings together visits, gatherings, and farewells.",
      itaipuTitle: "Itaipu Hydroelectric Plant", itaipu: "A binational hydroelectric plant on the Paraná River, along the Paraguay–Brazil border. The photographs record a visit made during this assignment.",
      oleary: "A city in Alto Paraná on Route PY02, about 80 km from Ciudad del Este. The photographs record a visit to a pioneer couple.",
      minga: "A municipality in Alto Paraná linked to the Route PY02 corridor. These travel memories come from the 1999 Circuit Assembly.",
      limoy: "A rural locality in the Minga Porã district of northern Alto Paraná. This map places the location represented by the photographs in this chapter.",
      mingaPora: "A municipality in northern Alto Paraná near San Alberto. The photographs in this group belong to Colonia Minga Porã.",
      generalDiaz: "A rural colony in Alto Paraná. The map reference helps place the territory visited during this assignment.",
      lote8: "A rural locality associated with the Minga Porã district in Alto Paraná. The map search indicates the area connected with these memories.",
      lote9: "A rural locality in the San Alberto area of Alto Paraná. The photographs in this chapter have been preserved as their own group.",
      mbaracayu: "A municipality in Alto Paraná, north of Hernandarias. This chapter gathers ministry memories from this locality.",
      sanFrancisco: "A rural locality in the San Alberto district of Alto Paraná. The map opens the area associated with the photographs in this chapter.",
      sanRamon: "A rural locality in the San Alberto district of Alto Paraná. The map marks its position east of the town of San Alberto.",
      sanAlbertoFolder: "The town that served as the base for this assignment in northern Alto Paraná. This map accompanies the group of photographs taken in the locality itself.",
      footerTitle: "Special Service in Paraguay", backTop: "Back to top ↑", photos: "photographs", videos: "videos", photo: "photograph", video: "video"
    }
  };

  const groupWords = {
    pt: [["Ciudad", "Cidade"], ["Fora do Território", "Fora do território"], ["Predicación", "Pregação"], ["Reunión", "Reunião"], ["Reuniões", "Reuniões"], ["Despedida", "Despedida"], ["Casamento", "Casamento"], ["Bodas", "Casamento"], ["Escuela del Servicio de Precursor en Betel", "Escola do Serviço de Pioneiro em Betel"], ["Congregación Alemana", "Congregação Alemã"]],
    es: [["Fora do Território", "Fuera del territorio"], ["Reuniões", "Reuniones"], ["Casamento", "Boda"]],
    en: [["Ciudad", "Town"], ["Casa", "Home"], ["Fora do Território", "Outside the territory"], ["Predicación", "Ministry"], ["Vivienda y Salón del Reino", "Home and Kingdom Hall"], ["Reunión", "Meeting"], ["Reuniões", "Meetings"], ["Despedida", "Farewell"], ["Casamento", "Wedding"], ["Bodas", "Wedding"], ["Escuela del Servicio de Precursor en Betel", "Pioneer Service School at Bethel"], ["Congregación Alemana", "German Congregation"], ["Asamblea de Circuito", "Circuit Assembly"]]
  };

  const captionWords = {
    pt: [["Calle principal", "Rua principal"], ["Calles", "Ruas"], ["Caminos", "Caminhos"], ["Entrada de la ciudad", "Entrada da cidade"], ["Frente al banco", "Em frente ao banco"], ["Frente al supermercado", "Em frente ao supermercado"], ["Vivienda y el banco", "Moradia e o banco"], ["Salida para", "Saída para"], ["Casa de", "Casa de"], ["Visita a la pareja de precursores", "Visita ao casal de pioneiros"], ["Familia", "Família"], ["Limpieza del patio", "Limpeza do quintal"], ["Cena en casa de", "Jantar na casa de"], ["Almuerzo con", "Almoço com"], ["Discurso público", "Discurso público"], ["Visita de los alemanes", "Visita dos alemães"], ["Visita del Superitendente", "Visita do superintendente"], ["Salón y Vivienda", "Salão e moradia"], ["Mudanza", "Mudança"], ["Boda", "Casamento"], ["Escuela", "Escola"], ["Grupo Alemán", "Grupo alemão"]],
    es: [],
    en: [["Calle principal", "Main street"], ["Calles", "Streets"], ["Caminos", "Roads"], ["Entrada de la ciudad", "Entrance to the town"], ["Frente al banco", "In front of the bank"], ["Frente al supermercado", "In front of the supermarket"], ["Vivienda y el banco", "Home and bank"], ["Salida para", "Road to"], ["Casa de", "Home of"], ["Visita a la pareja de precursores", "Visit to the pioneer couple"], ["Familia", "Family"], ["Limpieza del patio", "Cleaning the yard"], ["Cena en casa de", "Dinner at the home of"], ["Almuerzo con", "Lunch with"], ["Discurso público", "Public talk"], ["Visita de los alemanes", "Visit from the German group"], ["Visita del Superitendente", "Visit of the circuit overseer"], ["Salón y Vivienda", "Kingdom Hall and home"], ["Mudanza", "Moving"], ["Boda", "Wedding"], ["Escuela", "School"], ["Grupo Alemán", "German group"], ["Reunión", "Meeting"], ["Despedida", "Farewell"]]
  };

  const journeyPlaces = [
    {
      number: "01",
      match: "Fora do Território/Asunción - Departamento Central",
      title: "Asunción",
      textKey: "asuncion",
      coordinates: "25.3007° S · 57.6359° W",
      region: "Capital · Paraguay",
      query: "Asunción, Paraguay"
    },
    {
      number: "02",
      match: "Fora do Território/Capiatá - Departamento Central",
      title: "Capiatá",
      textKey: "capiata",
      coordinates: "25.3552° S · 57.4454° W",
      region: "Departamento Central · Paraguay",
      query: "Capiatá, Departamento Central, Paraguay"
    },
    {
      number: "03",
      match: "Fora do Território/Hernandárias - Departamento Alto Paraná",
      title: "Hernandarias",
      textKey: "hernandarias",
      coordinates: "25.4069° S · 54.6424° W",
      region: "Alto Paraná · Paraguay",
      query: "Hernandarias, Alto Paraná, Paraguay"
    },
    {
      number: "03A",
      match: "Fora do Território/Hernandárias - Departamento Alto Paraná/Usina de Itaipú",
      titleKey: "itaipuTitle",
      title: "Usina de Itaipu",
      textKey: "itaipu",
      coordinates: "25.4078° S · 54.5892° W",
      region: "Hernandarias · Alto Paraná",
      query: "-25.4078,-54.5892"
    },
    {
      number: "04",
      match: "Fora do Território/Juan Emilio O'Leary - Departamento Alto Paraná",
      title: "Juan E. O’Leary",
      textKey: "oleary",
      coordinates: "25.4200° S · 55.3900° W",
      region: "Alto Paraná · Paraguay",
      query: "Juan E. O'Leary, Alto Paraná, Paraguay"
    },
    {
      number: "05",
      match: "Fora do Território/Minga Guazú - Departamento Alto Paraná",
      title: "Minga Guazú",
      textKey: "minga",
      coordinates: "25.4846° S · 54.7669° W",
      region: "Alto Paraná · Paraguay",
      query: "Minga Guazú, Alto Paraná, Paraguay"
    },
    {
      number: "",
      match: "Predicación/Colonia Limoy",
      title: "Colonia Limoy",
      textKey: "limoy",
      labelKey: "locationLabel",
      coordinates: "24.7833° S · 54.8667° W",
      region: "Minga Porã · Alto Paraná",
      query: "-24.78333,-54.86667"
    },
    {
      number: "",
      match: "Predicación/Colonia Minga Porã",
      title: "Colonia Minga Porã",
      textKey: "mingaPora",
      labelKey: "locationLabel",
      coordinates: "24.8736° S · 54.9352° W",
      region: "Alto Paraná · Paraguay",
      query: "-24.873637,-54.935172"
    },
    {
      number: "",
      match: "Predicación/General Diaz",
      title: "Colonia General Díaz",
      textKey: "generalDiaz",
      labelKey: "locationLabel",
      coordinates: "24.7000° S · 54.9500° W",
      region: "Alto Paraná · Paraguay",
      query: "-24.7000,-54.9500"
    },
    {
      number: "",
      match: "Predicación/Lote 8",
      title: "Lote 8",
      textKey: "lote8",
      labelKey: "locationLabel",
      approximate: true,
      region: "Minga Porã · Alto Paraná",
      query: "Lote 8, Minga Porã, Alto Paraná, Paraguay"
    },
    {
      number: "",
      match: "Predicación/Lote 9",
      title: "Lote 9",
      textKey: "lote9",
      labelKey: "locationLabel",
      coordinates: "24.9297° S · 54.8341° W",
      region: "San Alberto · Alto Paraná",
      query: "-24.929697,-54.834144"
    },
    {
      number: "",
      match: "Predicación/Mbaracayú",
      title: "Mbaracayú",
      textKey: "mbaracayu",
      labelKey: "locationLabel",
      coordinates: "25.0230° S · 54.8309° W",
      region: "Alto Paraná · Paraguay",
      query: "-25.022990,-54.830927"
    },
    {
      number: "",
      match: "Predicación/San Franscisco",
      title: "San Francisco",
      textKey: "sanFrancisco",
      labelKey: "locationLabel",
      approximate: true,
      region: "San Alberto · Alto Paraná",
      query: "San Francisco, San Alberto, Alto Paraná, Paraguay"
    },
    {
      number: "",
      match: "Predicación/San Alberto",
      title: "San Alberto",
      textKey: "sanAlbertoFolder",
      labelKey: "locationLabel",
      coordinates: "24.9735° S · 54.9144° W",
      region: "Alto Paraná · Paraguay",
      query: "-24.9735,-54.9144"
    },
    {
      number: "",
      match: "Predicación/San Ramón",
      title: "San Ramón",
      textKey: "sanRamon",
      labelKey: "locationLabel",
      coordinates: "24.8833° S · 54.7667° W",
      region: "San Alberto · Alto Paraná",
      query: "-24.88333,-54.76667"
    }
  ];

  let lang = localStorage.getItem("album-lang") || "pt";
  let filter = "all";
  let activeMedia = [];
  let lightboxIndex = -1;
  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxVideo = document.getElementById("lightbox-video");

  function replaceWords(text, rules) {
    return rules.reduce((value, [from, to]) => value.replaceAll(from, to), text);
  }

  function captionFor(item) { return replaceWords(item.caption, captionWords[lang] || []); }
  function groupFor(item) { return replaceWords(item.group, groupWords[lang] || []); }

  function folderPathFor(item) {
    const parts = String(item.originalPath || "").split("/");
    parts.pop();
    return parts.join("/") || item.group;
  }

  function translatedFolderPath(path) {
    return replaceWords(path.replaceAll("/", " / "), groupWords[lang] || []);
  }

  function folderParts(path) {
    const translated = translatedFolderPath(path).split(" / ");
    return {
      title: translated.at(-1),
      parent: translated.slice(0, -1).join(" / ")
    };
  }

  function journeyPlaceFor(path) {
    return journeyPlaces
      .filter((place) => path.startsWith(place.match))
      .sort((a, b) => b.match.length - a.match.length)[0];
  }

  function createJourneyContext(place) {
    const article = document.createElement("article");
    article.className = "journey-context";
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.query)}`;
    const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(place.query)}&output=embed`;
    const placeTitle = place.titleKey ? translations[lang][place.titleKey] : place.title;
    article.innerHTML = `
      <div class="journey-copy">
        <p class="kicker">${escapeHtml(translations[lang][place.labelKey || "travelLabel"])}</p>
        <div class="journey-title">${place.number ? `<span>${place.number}</span>` : ""}<h3>${escapeHtml(placeTitle)}</h3></div>
        <p>${escapeHtml(translations[lang][place.textKey])}</p>
      </div>
      <div class="journey-map">
        <iframe src="${embedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${escapeHtml(translations[lang].geo)} — ${escapeHtml(placeTitle)}"></iframe>
        <div class="journey-map-meta">
          <span>${escapeHtml(translations[lang].geo)}</span>
          <b>${escapeHtml(place.coordinates || translations[lang].approximate)}</b>
          <small>${escapeHtml(place.region)}</small>
          <a href="${mapUrl}" target="_blank" rel="noopener">${escapeHtml(translations[lang].openMap)} <i aria-hidden="true">↗</i></a>
        </div>
      </div>`;
    return article;
  }

  function setLanguage(next) {
    lang = next;
    localStorage.setItem("album-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = translations[lang][node.dataset.i18n];
      if (value) node.textContent = value;
    });
    document.querySelectorAll("[data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));
    updateRecordCount();
    renderGallery();
    if (lightbox.open && lightboxIndex >= 0) showLightbox(lightboxIndex);
  }

  function updateRecordCount() {
    const images = media.filter((item) => item.type === "image").length;
    const videos = media.filter((item) => item.type === "video").length;
    document.getElementById("record-count").textContent = videos ? `${images} ${translations[lang].photos} · ${videos} ${translations[lang].videos}` : `${images} ${translations[lang].photos}`;
  }

  function renderGallery() {
    const filtered = media.filter((item) => filter === "all" || item.category === filter);
    const folders = new Map();
    filtered.forEach((item) => {
      const path = folderPathFor(item);
      if (!folders.has(path)) folders.set(path, []);
      folders.get(path).push(item);
    });

    const introducedPlaces = new Set();
    const albumSections = [...folders.entries()].flatMap(([path, items], albumIndex) => {
      const blocks = [];
      const place = journeyPlaceFor(path);
      if (place && !introducedPlaces.has(place.title)) {
        introducedPlaces.add(place.title);
        blocks.push(createJourneyContext(place));
      }
      const section = document.createElement("section");
      section.className = "folder-album";
      section.dataset.folder = path;
      const labels = folderParts(path);
      const imageCount = items.filter((item) => item.type === "image").length;
      const videoCount = items.filter((item) => item.type === "video").length;
      const countText = [
        imageCount ? `${imageCount} ${translations[lang][imageCount === 1 ? "photo" : "photos"]}` : "",
        videoCount ? `${videoCount} ${translations[lang][videoCount === 1 ? "video" : "videos"]}` : ""
      ].filter(Boolean).join(" · ");

      const heading = document.createElement("header");
      heading.className = "folder-heading";
      heading.innerHTML = `${labels.parent ? `<p>${escapeHtml(labels.parent)}</p>` : ""}<div><h3>${escapeHtml(labels.title)}</h3><span>${escapeHtml(countText)}</span></div>`;

      const grid = document.createElement("div");
      grid.className = "gallery folder-gallery";
      grid.replaceChildren(...items.map((item, itemIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "photo-card";
        button.dataset.album = String(albumIndex);
        button.dataset.index = String(itemIndex);
        const visual = item.type === "video" ? `<video src="${item.src}" preload="metadata" muted></video>` : `<img src="${item.thumb}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async" alt="${escapeHtml(captionFor(item))}">`;
        button.innerHTML = `${visual}<span class="caption"><b>${escapeHtml(captionFor(item))}</b></span>`;
        button.addEventListener("click", () => {
          activeMedia = items;
          openLightbox(itemIndex);
        });
        return button;
      }));

      section.append(heading, grid);
      blocks.push(section);
      return blocks;
    });

    gallery.replaceChildren(...albumSections);
    document.getElementById("load-more").hidden = true;
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[char]);
  }

  function openLightbox(index) {
    lightbox.showModal();
    showLightbox(index);
  }

  function showLightbox(index) {
    lightboxIndex = (index + activeMedia.length) % activeMedia.length;
    const item = activeMedia[lightboxIndex];
    if (item.type === "video") {
      lightboxImage.hidden = true;
      lightboxVideo.style.display = "block";
      lightboxVideo.src = item.src;
    } else {
      lightboxVideo.pause();
      lightboxVideo.removeAttribute("src");
      lightboxVideo.style.display = "none";
      lightboxImage.hidden = false;
      lightboxImage.src = item.src;
      lightboxImage.alt = captionFor(item);
    }
    document.getElementById("lightbox-caption").textContent = captionFor(item);
    document.getElementById("lightbox-group").textContent = translatedFolderPath(folderPathFor(item));
  }

  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((node) => node.classList.toggle("active", node === button));
    renderGallery();
  }));
  document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  document.querySelector(".previous").addEventListener("click", () => showLightbox(lightboxIndex - 1));
  document.querySelector(".next").addEventListener("click", () => showLightbox(lightboxIndex + 1));
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener("close", () => { lightboxVideo.pause(); });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.open) return;
    if (event.key === "ArrowLeft") showLightbox(lightboxIndex - 1);
    if (event.key === "ArrowRight") showLightbox(lightboxIndex + 1);
  });

  const categoryCounts = media.reduce((counts, item) => ({...counts, [item.category]: (counts[item.category] || 0) + 1}), {});
  document.getElementById("count-all").textContent = media.length;
  Object.entries(categoryCounts).forEach(([key, count]) => { const node = document.getElementById(`count-${key}`); if (node) node.textContent = count; });
  setLanguage(lang);
})();
