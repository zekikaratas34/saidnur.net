// Basit Service Worker - Çevrimdışı çalışmayı destekler
const cacheName = 'saidnur-pwa-v1';
const assets = [
  '/',
  '/index.html',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ6v0k2pd3Xlnp2YVJu04q8Dw8eE3Yp2YQRJ3xI5duwwSdi72preFf6cRE1i-x3q4lEnkUY-QEA6ZaBiQqksi8IvhLGzTXD-vAR5YSsJrQSgMGZTARluBDO1eYgT9EJifDZq9le8bWkdl0GzHsOjUWsMsRgnSNsm7g0DFCnTxFS1jwziDLWWxb00Rp/s75/saidnuramblem.gif'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
