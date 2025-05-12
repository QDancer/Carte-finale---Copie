// sw.js
const CACHE_NAME = 'tiles-cache-v1';

self.addEventListener('install', () => {
  // active immédiatement ce SW
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Ne mettre en cache que les tuiles Carto
  if (url.origin === 'https://b.basemaps.cartocdn.com') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(cached =>
          cached || fetch(event.request).then(resp => {
            cache.put(event.request, resp.clone());
            return resp;
          })
        )
      )
    );
  }
});
