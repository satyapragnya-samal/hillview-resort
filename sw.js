const cacheName = "hillview-cache-v1";
const assets = [
  "/home.html",
  "/services.html",
  "/accommodation.html",
  "/restaurant.html",
  // Icons
  "/icon-192.png",
  "/icon-512.png",
  // Logos
  "/images/HILL__3_-removebg-preview (1).png",
  "/images/8bf0afd3-db8d-4ea2-95c5-65cb0537b162-291x300.png",
  // Homepage images
  "/images/resort-and-hotel-development-checklist.webp",
  "/images/Image-24.jpg",
  "/images/W1-1-scaled.jpg",
  "/images/W2-scaled.jpg",
  "/images/W3-scaled.jpg",
  "/images/W4-scaled.jpg",
  // Accommodation page images
  "/images/Deluxe-555x400.jpg",
  "/images/Super-deluxe-555x400.jpg",
  "/images/Cabana-555x400.jpg",
  "/images/A01.jpg",
  // Services page images
  "/images/wifi.jpg",
  // Restaurant page images
  "/images/istockphoto-1158623408-612x612.jpg",
  "/images/rest_sec1-960x565.jpg",
  "/images/381d6ce38084f476e4240a495ce46494.jpg",
  "/images/360_F_912102578_dpR2r8IstjbBzQWgn2dAegf6SE2gDPNT.jpg",
  "/images/istockphoto-1158577428-612x612.jpg",
  "/images/37b660cb40988dda83c8d345f62c83da.jpg",
  "/images/delicious-chinese-food.jpg"
];

// Install event - caching all assets
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

// Activate event - clear old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if(key !== cacheName) return caches.delete(key);
      }))
    )
  );
});

// Fetch event - serve cached files offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
