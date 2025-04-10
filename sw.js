self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('alphabet-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
