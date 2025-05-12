const CACHE_NAME = 'osm-tiles-cache-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin === 'https://a.tile.openstreetmap.org' || 
      url.origin === 'https://b.tile.openstreetmap.org' || 
      url.origin === 'https://c.tile.openstreetmap.org') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((cached) => {
          const fetchPromise = fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          });
          return cached || fetchPromise;
        })
      )
    );
  }
});
