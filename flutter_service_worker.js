'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cc17771b156c2dc733ec97ac3133115b",
"version.json": "1739e604970a6a003806efc335a90e15",
"favicon.ico": "886cf65d0fcaf9071656623cf838941e",
"index.html": "4f5992d128615e46ea3dac88eed6bbaf",
"/": "4f5992d128615e46ea3dac88eed6bbaf",
"main.dart.js": "92f1049543d84efca29245cf334efa21",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"icons/Icon-192.png": "1f1d9d288b93228f9b85341b307026ee",
"icons/Icon-maskable-192.png": "1f1d9d288b93228f9b85341b307026ee",
"icons/Icon-maskable-512.png": "03957bd487e546d1d2bb8961a9892d71",
"icons/Icon-512.png": "03957bd487e546d1d2bb8961a9892d71",
"manifest.json": "f8cb7ac272c7c126ff8c4e65d1931822",
".git/config": "9d56c9270636a17dd8ccc4101b154583",
".git/objects/95/b38d6d8eb3589e8e668d0582a8f48afbdf95fe": "b4f8270630b6695d74e618b673b979b7",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/829b6fc2572eeaedcd56c3faaf64eb724630ff": "278ddcbaf54a48fe41bafa7ea5ee52fd",
".git/objects/68/a61ad8e7efbe2089edd0109fd8fd320ff55be8": "693d3922e2fec513e3914fcc0baecd0c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/51/bacd783a971befde6609eadc73b93d95f5ce40": "e0026920c63532c77e22385507e043c3",
".git/objects/94/22951e1d2def89e2c0bac7c8dd93a159866803": "f9986a28f447ee114d7dc1754764e0d9",
".git/objects/0e/dbc8749d8b0fd67843252e52a067d231a63411": "a0fd7268baaee24ff82d07966601e273",
".git/objects/34/8817d576f0f63d464e63aca4d2094ae2f08705": "c5ae083153d774bfaf23e7c29c54db00",
".git/objects/a4/31a792668a18a284852a93f0d93a89caf37669": "53d99a4c860ebaeb39c45d7b2342ea93",
".git/objects/a3/dc45012b8e755a07691ce0d6f77fb27088280d": "86a1e0383de0dd575c7dfae92f2d9438",
".git/objects/b5/2a42964779fe92dae03b2eb4771477b86f7a84": "7029aa2fcb70f5ae5e60820d9cc49b10",
".git/objects/b2/2fbc3744b2b52ea7328b72457fa8bad1565e4b": "b3a828d64d4c15ecff4d4281c18a053d",
".git/objects/d7/f0d3476ab5d1db05767381f4afc2b2f346fc63": "90c26616078f81f7098a87dc293f2659",
".git/objects/b4/e3f00ae60f8fb273e20775ed4079687062dde8": "649197046e69c73626dc3a4d71c097b5",
".git/objects/b4/725816a6d90a94e3efd152f5dbdd1eb16c1282": "92e4377eccb5903bd9bcc95520587160",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ca404e1c75050a80686eea0dccbecd1419130c": "1be6343e3e05d359dbb29401637c0460",
".git/objects/ab/b30f6dc78285d0aab95fea8b42aff71d766ef1": "8af84bb95de02b3a1c0a11bd544d2e98",
".git/objects/ab/a962a4c10e39eac23e3e2dd0631db207474258": "fd909d3edb1af0f821809228f2d5b3a4",
".git/objects/f3/d7f079010ed3b3fc1baa57cd82f84e1ae49fb9": "eb934c01591c8bc2c89e8db0ef49a2a2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/aef6093587cfc9b616da61f1a5525cd00635a7": "32f10a901bbe8901b4871fe481cbc053",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6c0d6e60eda4fddca231f842fa8291a8467e70": "4e127726ffce9eff72f59e317bd1e734",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e3/fbc742602f55c3f06f6fe9b19a5d04c94a75a0": "fad8e4647028a75e3eb94cdf2934afbc",
".git/objects/cf/4ad8d63ee57c8da30792364b6304bfd57d16f1": "14f9291313b37495c9beeb9cf8ea80bc",
".git/objects/ec/d8f42dd933c5f8b0660e3c82e6233652de7aa3": "b0d7cc2aeb5348e2ac1cae12feefbbb3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/bfb3727fb4d9a0a68a0aab37a72badfa9ace95": "365e2213ff05b2ab81f3f11e5d89f7bd",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/89/603c4c31c52763db4c36e3a49af3af71eb6598": "9da98bf71a6bbe546fc421f67c712504",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/1888ea40c6ee80c98d060cd7f6a5de51479174": "37e624d9f928156cc8a5815d6f558089",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/0cac835f623e3efdd6520517e9f666bdad77c9": "58ec94a8c53407435aa824b91e4d1c94",
".git/objects/43/7a804a77e7ce3f634e4dbc4b0da892f318ef95": "d98352bbc0c85e2932b8485170668269",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/f4bfde35d436db3b9882431fd178e61ab9e53d": "a01927d5462b6ded9a52011178c707b6",
".git/objects/09/19a7acecb5f848cef04c56f7b22bb848e08413": "36206749518372b63a5cddc42b59abf1",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/63/3619b6fc29eb741ce587ed42702ecbaa82435a": "f548ea82bcce6cf5362371e128be5d6a",
".git/objects/63/ad1c2cf35cf1853c4c7a19eac5eee74991cb80": "51400d0f376818a8d4ad5fc417d486ec",
".git/objects/63/ff47a0209364905083b2e6f14bf7bc6b9f2694": "0aaacd11a94068050db99ba992ff3c95",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/8fe90a56aa6f4c47066520aeeebc5b07264ba1": "b9214dfd983ed52711ccfe6e1128f6a6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d2/37660201709104c7c70178ea53f53c470230ce": "d417d08c2ec9576fcf4b20bbb3245f76",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7e8a58316c8fd34c769b0ee5896fb602b87614": "f82e89ae295f14784e0d24d118ca8268",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/fa/5c81f1dd6e0937d925560b688d7130ed656a69": "0f15fb959a2e8c0f4db07694d23b512f",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/cb/e1946259f0c525a652f9ac42820dfd88c8af57": "3d3f4aa1cb3a782ef35161da30671d68",
".git/objects/ce/0d05c929157f28e62c2ea6077d210baa07b78c": "e6c4da0176c42621950fab3f7da5c7ca",
".git/objects/41/a70bb92d8f9f4c20f38dd1d358b35fe521d143": "7f54cb7ebf9a08e4d523e55f45e2bc08",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/154801a872b76500c6f791aa101ffb8aedc190": "a06d3021422fcad2e280d407ae4a9022",
".git/objects/24/eef89c7577b64ee545bb5281a13fec0dea2436": "9ef4a0eaf10f5ad105883b567214bae9",
".git/objects/8d/017529a4189671c3fb5b5ceebc9e1cd2b2347d": "407950b9a0dcfb49ffc409fb4fe85115",
".git/objects/85/acf05728bbc38f2fe877f4666d21ee007fa69a": "560a1ba37d58f21e5238b7aa727804b7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1c/e186509b3e1e185665b5e19621a5221b3a567c": "09327ce58aa80ef17bfde0f8dceea938",
".git/objects/2e/2b3bf689922540bd75c9c58761b0b0318e06f2": "9298b641b1e739dcacc29d0f33866cfd",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "897040e7a34e1da3d0831fcd4ff20ae4",
".git/logs/refs/heads/main": "c7b14448b7c0bbf2e70f4d6bd41207b2",
".git/logs/refs/remotes/origin/main": "31c7b7f9089e00d382f0656413a246a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "18b38b7b5c2708860ebef15b0c1c149d",
".git/refs/remotes/origin/main": "18b38b7b5c2708860ebef15b0c1c149d",
".git/index": "9502d95e410052c04017b4baf009382a",
".git/COMMIT_EDITMSG": "415fb7afe2e0856d880dadf635d981a7",
".git/FETCH_HEAD": "ea1f3dacfb669aa32e0f9aa63cf70798",
"assets/AssetManifest.json": "6321bc3f286e15d49a773eb0db2f8e7c",
"assets/NOTICES": "199aa9afcd8d51672fffadd99b7b2fdb",
"assets/FontManifest.json": "5a098192420ca24c90e6e10e57248e0d",
"assets/AssetManifest.bin.json": "58d765391b42306300f053a989d85f9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "85c8590eb99d9f4d54eb931d4b855d87",
"assets/fonts/MaterialIcons-Regular.otf": "89794ebfd1acc7c3cbd414345cec9df1",
"assets/assets/account_circle.png": "1265eb4c6bc8f2214a83bc96922febb8",
"assets/assets/favicon.ico": "886cf65d0fcaf9071656623cf838941e",
"assets/assets/nothing_serch.png": "b0c2946b0cfdac456301ff5e4bb84aa7",
"assets/assets/adminLoginIcon.png": "61c6def3f6fbbf0cf89fd74c2f0f4e20",
"assets/assets/generateReport.png": "9b9beb5795061f7d1178639b3a4e2e9f",
"assets/assets/hackerspace-logo.jpg": "f277e0aa900d887c7497426d07223c7e",
"assets/assets/logo.png": "3eb1bc311a9a9c1bebf9ccdf5232dd6d",
"assets/assets/AttendWise2.png": "8f1c369ea230f560f8529c5794e920c8",
"assets/assets/Audiowide-Regular.ttf": "b32da0c186225df40f7e9dc2d5bccc38",
"assets/assets/AttendWise1.png": "3eb1bc311a9a9c1bebf9ccdf5232dd6d",
"assets/assets/classroom.png": "1199ab6804b377db31a13c0f0dd64206",
"assets/assets/nothing_found.png": "956087fadf66dd90811a7f44634cdd83",
"assets/assets/hackerspace-logo2.png": "5328fb2fc89230e7f58bcdd00c72dac4",
"assets/assets/AttendWise.jpeg": "18c429299473ea4c96bec63f2034189f",
"assets/assets/hackerspace-logo1.png": "4f05afe1a4c1df8859099b3f4abdd45f",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
