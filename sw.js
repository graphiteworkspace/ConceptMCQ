// ConceptMCQ Service Worker for Offline Assessment & App Caching
const CACHE_NAME = 'conceptmcq-v2.9-vocab-final';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css?v=20261125_vocab_final',
  './js/app.js?v=20261125_vocab_final',
  './js/config.js',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
  'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Cache addAll non-critical error:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Purging old service worker cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  const url = e.request.url;

  // Network-first for HTML, JS and API routes to ensure live updates
  if (e.request.destination === 'document' || url.includes('/js/') || url.includes('/css/') || url.includes('app.js')) {
    e.respondWith(
      fetch(e.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(e.request).then(cached => cached || (e.request.destination === 'document' ? caches.match('./index.html') : null));
        })
    );
    return;
  }

  // Cache-first for static CDN / fonts / icons
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(e.request).then((networkResponse) => {
        return networkResponse;
      });
    })
  );
});
