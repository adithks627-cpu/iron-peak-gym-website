/* ==========================================================
   IRON PEAK FITNESS - script.js
   ========================================================== */

/* >>> REPLACE THIS: gym's WhatsApp number.
   Format: country code + number, digits only. No +, spaces or dashes.
   Example for an Indian number 98765 43210  ->  "919876543210"
   The placeholder below will NOT work until you change it. */
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

/* >>> REPLACE THIS: the message customers will see pre-filled. */
const WHATSAPP_MESSAGE = "Hi, I would like to know about membership at IRON PEAK FITNESS.";

// Build the WhatsApp link and apply it to both WhatsApp buttons
const waLink = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
["waCta", "waFloat"].forEach(function (id) {
  const el = document.getElementById(id);
  if (el) el.href = waLink;
});

// Mobile menu open / close
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
menuBtn.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
menu.querySelectorAll("a").forEach(function (a) {   // close menu after tapping a link
  a.addEventListener("click", function () { setMenu(false); });
});
document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();