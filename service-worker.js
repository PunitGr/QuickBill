let doCache = false;

let CACHE_NAME = 'quickbill-cache-v1';

let urlsToCache = [
  '/',
  '/assets/styles/css/styles.css',
  '/assets/styles/images/*',
  '/dist/index-bundle.js'
];

self.addEventListener("activate", event => {
    const cacheWhiteList = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList => 
                Promise.all(keyList.map(key => {
                    if (!cacheWhiteList.includes(key)) {
                        console.log('Deleting Cache: ' + key);
                        return caches.delete(key);
                    }
                }))
            )
    );
});

self.addEventListener("install", function(event) {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function(cache) {
                    fetch("manifest.json")
                        .then(resp => {
                            resp.json();
                        })
                        .then(() => {
                            cache.addAll(urlsToCache);
                            console.log('cached');
                        })
                })
        )
    }
})

self.addEventListener('fetch', function(event) {
    if (doCache) {
      event.respondWith(
          caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
          })
      );
    }
});