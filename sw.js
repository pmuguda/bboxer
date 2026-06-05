const CACHE = 'bboxer-v1';
const PRECACHE = [
  '/bboxer/',
  '/bboxer/index.html',
  '/bboxer/logo.svg',
  '/bboxer/manifest.json',
  '/bboxer/icons/icon-192.png',
  '/bboxer/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for map tiles and APIs; cache-first for app shell
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isExternal = url.origin !== self.location.origin;
  if (isExternal) return; // let CDN/tile requests go straight through
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
