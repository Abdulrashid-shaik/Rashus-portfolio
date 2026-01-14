'use strict';

/* ===============================
   NAVIGATION TABS FIX (SAFE)
================================ */

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    const targetPage = link.textContent.trim().toLowerCase();

    // Remove active state from all
    navLinks.forEach(btn => btn.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // Activate clicked tab
    link.classList.add("active");

    // Activate matching page
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      }
    });

    // Scroll to top (original behavior)
    window.scrollTo(0, 0);
  });
});

/* ===============================
   SIDEBAR TOGGLE (UNCHANGED)
================================ */

const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const sidebar = document.querySelector("[data-sidebar]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}
