self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static-v1').then(cache => {
            return cache.addAll([
                '/index.html',
                '/style.css',
                '/app.js',
                '/images/icon-192x192.png',
                '/images/icon-512x512.png',
                '/favicon.ico',
                '/manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
