const CACHE_NAAM = "gouden-ezel-v52";
const BESTANDEN = [
  "./",
  "./index.html",
  "./reparatieverzoek.html",
  "./vraag.html",
  "./zaal.html",
  "./mededeling-plaatsen.html",
  "./manifest.json",
  "./schoonmaakschema.js",
  "./Gouden%20Ezel.png",
  "./Gangster%20Ezel.png",
  "./logo-ezel.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAAM).then((cache) => cache.addAll(BESTANDEN))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((namen) =>
      Promise.all(
        namen.filter((naam) => naam !== CACHE_NAAM).map((naam) => caches.delete(naam))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
