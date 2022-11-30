var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        
        './index.html',
        './cadastro.html',
        './duvidas.html',
        './perfilusina.html',
        './perguntas.html',
        './ranking.html',
        './resultado.html',
        './selectusinas.html',
        './areas.html',

        './assets/css/main.css',
        './assets/css/media-query.css',

        './assets/js/mainscript.js',

        './images/icons/20.png',
        './images/icons/29.png',
        './images/icons/40.png',
        './images/icons/50.png',
        './images/icons/57.png',
        './images/icons/58.png',
        './images/icons/60.png',
        './images/icons/72.png',
        './images/icons/76.png',
        './images/icons/80.png',
        './images/icons/87.png',
        './images/icons/100.png',
        './images/icons/114.png',
        './images/icons/120.png',
        './images/icons/144.png',
        './images/icons/152.png',
        './images/icons/167.png',
        './images/icons/180.png',
        './images/icons/512.png',
        './images/icons/1024.png',
        './images/icons/appstore.png',
        './images/icons/playstore.png',

        './images/icons/add-pngrepo-com.png',
        './images/icons/boss-laranja.png',
        './images/icons/boss-svgrepo-com.png',
        './images/icons/business-card-svgrepo-com.png',
        './images/icons/correct.png',
        './images/icons/edit-svgrepo-com-2.png',
        './images/icons/edit-svgrepo-com.png',
        './images/icons/engineer-svgrepo-com.png',
        './images/icons/engineer-verde.png',
        './images/icons/eye-rosa.png',
        './images/icons/eye-svgrepo-com.png',
        './images/icons/home-svgrepo-com.png',
        './images/icons/key-sroxo.png',
        './images/icons/key-svgrepo-com.png',
        './images/icons/line847.png',
        './images/icons/logotipo.png',
        './images/icons/padlock-pngrepo-com.png',
        './images/icons/raio-usina.png',
        './images/icons/safety-azul-claro.png',
        './images/icons/safety-svgrepo-com.png',
        './images/icons/seta.png',
        './images/icons/stock-azul.png',
        './images/icons/stock-svgrepo-com.png',
        './images/icons/tables.png',
        './images/icons/usina-eletrica.png',
        './images/icons/wrong.png',
        './images/icons/x-saida.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});