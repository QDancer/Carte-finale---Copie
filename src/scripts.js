// src/scripts.js
import {
  attentionIcon,
  dangerIcon,
  getCountryCategory,
  countryIcons,
  iso3to2,
  countryMessages,
  detailedInfo
} from './countries.js';

// === Détection mobile ===
export function detectMobile() {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i
    .test(navigator.userAgent)
    || window.innerWidth <= 768;
  document.body.classList.toggle('is-mobile', isMobile);
  console.log(isMobile ? 'Mode mobile' : 'Mode desktop');
  return isMobile;
}

// === Fonction principale d'initialisation ===
export default function initMapFeatures(map) {
  const isMobile = detectMobile();
  window.addEventListener('resize', () => {
    const mobile = detectMobile();
    // ici si tu veux adapter zoom/center dynamiquement…
  });

  // Gestion des popups/tooltips pendant le drag or click
  function hideTooltipUI() {
    map.closePopup();
    document.body.classList.remove('tooltip-open');
    document.getElementById('fullscreen-tooltip')?.style?.setProperty('display','none');
    document.getElementById('close-tooltip')?.style?.setProperty('display','none');
  }
  ['dragstart','click'].forEach(evt => map.on(evt, hideTooltipUI));

  // GeoJSON
  function style(feature) {
    const code = feature.properties.shapeGroup || feature.properties.GID_0;
    const cat = getCountryCategory(code);
    return { fillColor:cat.color, color:'black', weight:1, fillOpacity:0.7 };
  }
  fetch('all_countries.geojson')
    .then(r => r.json())
    .then(data => {
      L.geoJSON(data, {
        style,
        onEachFeature(feature, layer) {
          const code = feature.properties.shapeGroup || feature.properties.GID_0;
          if (countryMessages[code]) {
            layer.bindPopup(
              countryMessages[code]
                .replace('<h3>', `<h3><img src="https://flagcdn.com/32x24/${iso3to2[code]}.png" class="flag-icon"> `),
              { className:'custom-tooltip', maxWidth:250 }
            );
          }
        }
      }).addTo(map);
    })
    .catch(err => console.error('Erreur GeoJSON', err));

  // Marqueurs spécifiques
  Object.keys(countryIcons).forEach(code => {
    const [lat,lng] = countryIcons[code];
    const { icon } = getCountryCategory(code);
    if (!icon) return;
    const marker = L.marker([lat,lng], { icon }).addTo(map);
    marker.bindPopup(
      (countryMessages[code] || "Pas de message")
        .replace('<h3>', `<h3><img src="https://flagcdn.com/32x24/${iso3to2[code]}.png" class="flag-icon"> `),
      { className:'custom-tooltip', maxWidth:250 }
    );
    marker.on('click', () => marker.openPopup());
  });

  // Légende
 const legend = L.control({ position: 'bottomright' });

legend.onAdd = () => {
  const div = L.DomUtil.create('div', 'info legend');
  div.innerHTML = `
    <button id="legend-toggle">Afficher légende</button>
    <div id="legend-content" style="display: none;">
      <div><i style="background-color: green;"></i>Aucune restriction</div>
      <div><i style="background-color: orange;"></i>Certaines restrictions</div>
      <div><i style="background-color: red;"></i>Interdictions</div>
    </div>
  `;

  // Ajoutez un gestionnaire d'événements pour le bouton
  setTimeout(() => {
    const legendContent = document.getElementById('legend-content');
    const toggleButton = document.getElementById('legend-toggle');

    toggleButton.onclick = () => {
      const isHidden = legendContent.style.display === 'none';
      legendContent.style.display = isHidden ? 'block' : 'none';
      toggleButton.textContent = isHidden ? 'Masquer légende' : 'Afficher légende';
    };
  }, 0);

  return div;
};

legend.addTo(map);

  // Tooltips en plein écran
  document.addEventListener('click', e => {
    if (e.target.matches('.more-info')) {
      e.preventDefault();
      const code = e.target.dataset.code;
      const content = detailedInfo[code] || "<p>Pas de détails</p>";
      if (map.isFullscreen()) map.toggleFullscreen();
      document.getElementById('tooltip-content').innerHTML = content;
      ['fullscreen-tooltip','close-tooltip'].forEach(id =>
        document.getElementById(id)?.style?.setProperty('display','block')
      );
      document.body.classList.add('tooltip-open');
    }
  });
  document.getElementById('close-tooltip')?.addEventListener('click', ()=>{
    document.getElementById('fullscreen-tooltip').style.display = 'none';
    document.getElementById('close-tooltip').style.display = 'none';
    document.body.classList.remove('tooltip-open');
  });
}
