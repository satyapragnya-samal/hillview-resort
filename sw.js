const CACHE_NAME = "hillview-cache-v1";
const urlsToCache = [
  // HTML pages
  "/index.html",
  "/services.html",
  "/accommodation.html",
  "/restaurant.html",

  // Logo & footer
  "/HILL__3_-removebg-preview (1).png",
  "/8bf0afd3-db8d-4ea2-95c5-65cb0537b162-291x300.png",

  // Homepage image
  "/resort-and-hotel-development-checklist.webp",

  // Accommodation images
  "/Deluxe-555x400.jpg",
  "/Super-deluxe-555x400.jpg",
  "/Cabana-555x400.jpg",
  "/A01.jpg",

  // Services image
  "/wifi.jpg",

  // Restaurant images
  "/istockphoto-1158623408-612x612.jpg",
  "/rest_sec1-960x565.jpg",
  "/381d6ce38084f476e4240a495ce46494.jpg",
  "/360_F_912102578_dpR2r8IstjbBzQWgn2dAegf6SE2gDPNT.jpg",
  "/istockphoto-1158577428-612x612.jpg",
  "/37b660cb40988dda83c8d345f62c83da.jpg",
  "/delicious-chinese-food.jpg"
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event - serve from cache first
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
