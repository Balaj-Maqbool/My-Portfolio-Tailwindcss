const CACHE_NAME = 'balaj-maqbool-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'assets/Helmet-Bzf6KLJL.js',
  'assets/index-BFNeS964.js',
  'assets/Home-wdtik-Sw.js',
  '/assets/index-Doicjg6h.css',          // your CSS file paths
  '/assets/PageNotFound-GEeLUo75.js',      // usually bundle file, confirm this
  '/letter-b.webp',
  '/letter-b.jpg',
  
];

// Install event - cache static and dynamic assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache static files
      await cache.addAll(urlsToCache);

      // Cache dynamic assets from assets-list.json
      try {
        const response = await fetch('/assets-list.json');
        const assets = await response.json();
        const imageAssets = assets.filter(url =>
          url.match(/\.(png|webp|jpg|jpeg|pdf)$/i)
        );
        await cache.addAll(imageAssets);
      } catch (err) {
        console.warn('Failed to cache dynamic assets:', err);
        // continue without failing install
      }
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event - serve cached assets if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => caches.match('/'))
      );
    })
  );
});
