// ---- Configuración del sitio ----
const CHROME_WEB_STORE_URL = "https://chromewebstore.google.com/detail/chat-privacy-blur/gejcelngehokmnpnndflacodglccabki";
const PRO_LIVE = true; // muestra insignias, precios y preguntas de Pro

const root = document.documentElement;
root.dataset.pro = PRO_LIVE ? "on" : "off";

// ---- Idioma ----
const TITLES = {
  es: "Chat Privacy Blur — Tapá tus chats. Leé solo lo que importa.",
  en: "Chat Privacy Blur — Hide your chats. Read only what matters.",
};
function setLang(lang) {
  root.lang = lang;
  const { titleEs, titleEn } = document.body.dataset;
  document.title = (lang === "es" ? titleEs : titleEn) || TITLES[lang];
  for (const b of document.querySelectorAll(".lang button")) b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  try { localStorage.setItem("cpb-lang", lang); } catch {}
}
// Idioma: ingles por defecto; si el visitante eligio ES, se recuerda su eleccion.
let saved = null;
try { saved = localStorage.getItem("cpb-lang"); } catch {}
setLang(saved === "es" ? "es" : "en");
for (const b of document.querySelectorAll(".lang button")) b.addEventListener("click", () => setLang(b.dataset.lang));

// ---- Botón de Chrome Web Store ----
for (const a of document.querySelectorAll("[data-cws]")) {
  if (CHROME_WEB_STORE_URL) {
    a.href = CHROME_WEB_STORE_URL;
    a.target = "_blank";
    a.rel = "noopener";
  } else {
    a.setAttribute("aria-disabled", "true");
    a.removeAttribute("href");
  }
}
for (const n of document.querySelectorAll("[data-cws-soon]")) n.hidden = !!CHROME_WEB_STORE_URL;

// ---- Demo interactiva ----
const demo = document.getElementById("demo");
if (demo) {
  const last = document.getElementById("demoLast");
  const px = document.getElementById("demoPx");
  last.addEventListener("input", () => (demo.dataset.last = last.checked ? "on" : "off"));
  px.addEventListener("input", () => demo.style.setProperty("--px", `${px.value}px`));
  const peek = (on) => demo.classList.toggle("peek", on);
  window.addEventListener("keydown", (e) => e.key === "Alt" && peek(true));
  window.addEventListener("keyup", (e) => e.key === "Alt" && peek(false));
  window.addEventListener("blur", () => peek(false));
}
