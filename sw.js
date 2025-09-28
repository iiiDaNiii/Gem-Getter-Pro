// sw.js (basic empty service worker to enable PWA)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
