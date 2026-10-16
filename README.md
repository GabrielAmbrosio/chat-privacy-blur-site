# Chat Privacy Blur — sitio web

Landing, política de privacidad y términos de [Chat Privacy Blur](./), extensión de Chrome que desenfoca WhatsApp Web.

HTML/CSS/JS estáticos, para GitHub Pages. Sin build, sin rastreo. Bilingüe (ES/EN) con selector; el idioma por defecto es el del navegador.

- `index.html` — portada con demo interactiva
- `privacy.html` — política de privacidad (esta es la URL para la ficha del Chrome Web Store)
- `terms.html` — términos de uso
- `site.js` — configuración y comportamiento (idioma, demo, botón del store)
- `style.css`, `assets/` — estilos, ícono, capturas, imagen para compartir

## Antes de publicar

En `site.js`, arriba:

- `CHROME_WEB_STORE_URL`: pegar la URL de la ficha cuando esté publicada. Mientras esté vacía, el botón "Agregar a Chrome" queda deshabilitado y aparece "Disponible muy pronto".
- `PRO_LIVE`: dejar en `false` si la primera versión sale sin Pro (todo gratis). Pasar a `true` cuando exista Pro: muestra la tarjeta de precios Pro y las insignias "Pro" en las funciones.

## Publicar en GitHub Pages

1. Crear un repo (p. ej. `chat-privacy-blur-site`) y subir el contenido de esta carpeta a la raíz.
2. Settings → Pages → "Deploy from a branch" → `main` / `(root)`.
3. La política queda en `https://<usuario>.github.io/<repo>/privacy.html`. Esa es la URL para el Developer Dashboard.

## Mantener sincronizado

Las capturas de `assets/` salen de `chat-privacy-blur-store/screenshots`. Para regenerarlas: `node tools/make-shots.mjs` y luego `node tools/make-site-assets.mjs` (en esa carpeta `chat-privacy-blur-store`).
