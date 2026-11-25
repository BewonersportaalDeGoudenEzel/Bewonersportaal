// Servicewerker van Bewonersportaal De Gouden Ezel
// ------------------------------------------------
// Verhoog VERSIE bij elke wijziging aan het portaal. Dan haalt elke
// telefoon de nieuwe versie op en ruimt de oude kopie op.
const VERSIE = 'v89';
const CACHE = 'gouden-ezel-' + VERSIE;

// Nieuwe versie: niet wachten tot alle tabbladen dicht zijn, meteen actief.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Oude kopieën weggooien en direct alle open pagina's overnemen.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(
        namen.filter((n) => n !== CACHE).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;            // formulieren e.d. gewoon doorlaten
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Google-scripts, agenda, lettertypes: niet aankomen

  const isPagina = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html') ||
    url.pathname.endsWith('.html') || url.pathname.endsWith('/');

  if (isPagina) {
    // Pagina's: eerst vers van internet, kopie alleen als er geen verbinding is.
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then((antwoord) => {
          if (antwoord && antwoord.ok) {
            const kopie = antwoord.clone();
            caches.open(CACHE).then((c) => c.put(req, kopie));
          }
          return antwoord;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('index.html')))
    );
    return;
  }

  // Plaatjes, iconen en dergelijke: snel uit de kopie, op de achtergrond verversen.
  event.respondWith(
    caches.open(CACHE).then((c) =>
      c.match(req).then((bewaard) => {
        const vers = fetch(req)
          .then((antwoord) => {
            if (antwoord && antwoord.ok) c.put(req, antwoord.clone());
            return antwoord;
          })
          .catch(() => bewaard);
        return bewaard || vers;
      })
    )
  );
});
