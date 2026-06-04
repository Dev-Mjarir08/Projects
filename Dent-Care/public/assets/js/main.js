/* ============================================================
   DentaCare – main.js
   Custom Cursor | Sticky Navbar | Scroll-to-top | AOS Init
   ============================================================ */

$(document).ready(function () {

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 60) {
      $('#navbar').addClass('nav-scrolled shadow-2xl');
    } else {
      $('#navbar').removeClass('nav-scrolled shadow-2xl');
    }

    // Scroll-to-top button
    if ($(this).scrollTop() > 300) {
      $('#scrollTop').fadeIn(300);
    } else {
      $('#scrollTop').fadeOut(300);
    }
  });

  /* ── Mobile Menu Toggle ────────────────────────────────── */
  $('#menuBtn').on('click', function () {
    $('#mobileMenu').slideToggle(300);
    $(this).find('svg').toggleClass('rotate-90');
  });

  /* ── Scroll-to-top ─────────────────────────────────────── */
  $('#scrollTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });

  /* ── Smooth Scroll for anchor links ───────────────────── */
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 80 }, 700);
    }
  });

  /* ── AOS Init ──────────────────────────────────────────── */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }

  /* ── Active nav link highlight ─────────────────────────── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  $('#navbar a, #mobileMenu a').each(function () {
    const href = $(this).attr('href');
    if (href === page) {
      $(this).addClass('text-cyan-400 font-semibold');
    }
  });

});
 function closeFlash(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.style.opacity = "0";
  el.style.transform = "translateY(-20px)";
  setTimeout(() => el.remove(), 300);
}

// Auto hide ONLY if flash exists
window.addEventListener('DOMContentLoaded', () => {
  const successEl = document.getElementById('flashSuccess');

  if (successEl) {
    setTimeout(() => {
      closeFlash('flashSuccess');
    }, 3000);
  }
});;

const profileBtn = document.getElementById("profileBtn");
const dropdown = document.getElementById("profileDropdown");

// Toggle
profileBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});