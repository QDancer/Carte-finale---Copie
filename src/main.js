import L from 'leaflet';
import 'leaflet-fullscreen';
// Une seule importation de tout ce dont tu as besoin
import initMapFeatures, { detectMobile } from './scripts.js';

// Ensuite tu peux appeler detectMobile() et initMapFeatures(map)…
const center = detectMobile() ? [50,10] : [20,0];
const zoom   = detectMobile() ? 4      : 3;

export const map = L.map('map', {
  preferCanvas: true,
  fullscreenControl: true,
  center,
  zoom,
  maxBounds: [[-85,-180],[85,180]],
  maxBoundsViscosity: 1.0,
  minZoom: 3,
  maxZoom: 6,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  keepBuffer: 2 // Charge les tuiles autour de la zone visible
}).addTo(map);

initMapFeatures(map);
