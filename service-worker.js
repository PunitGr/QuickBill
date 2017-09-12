let CACHE_NAME = 'QuickBill';

let urlsToCache = [
    './index.html',
    './404.html',
    '/assets/css/styles.css',
    '/assets/images/**.*',
    '/dist/index-bundle.js'
];

self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("install", function(event) {
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
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then(function(response) {
            return response || fetch(event.request);
        })
    );
});