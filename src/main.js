import L from 'leaflet';
import 'leaflet-fullscreen';
import initMapFeatures, { detectMobile } from './scripts.js';

// Détection de l'appareil
const isMobile = detectMobile();
const initialZoom = 2; // Zoom initial faible pour réduire le LCP
const targetZoom = isMobile ? 4 : 3; // Zoom final après chargement
const center = isMobile ? [50, 10] : [20, 0];

// Initialisation de la carte avec un zoom faible
export const map = L.map('map', {
  preferCanvas: true,
  fullscreenControl: true,
  center,
  zoom: initialZoom, // Zoom initial faible
  maxBounds: [[-85, -180], [85, 180]],
  maxBoundsViscosity: 1.0,
  minZoom: 2,
  maxZoom: 6,
});

// Ajout des tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  keepBuffer: 2, // Charge les tuiles autour de la zone visible
}).addTo(map);

// Une fois la carte chargée, ajustez le zoom
map.whenReady(() => {
  map.setZoom(targetZoom, { animate: true }); // Passe au zoom final avec une animation
});

// Initialisation des fonctionnalités supplémentaires
initMapFeatures(map);
