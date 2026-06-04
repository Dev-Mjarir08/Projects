/* ============================================================
   DentaCare – layout.js
   Injects shared navbar + footer into every page
   ============================================================ */

const NAV_HTML = `
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 lg:px-16">
  <div class="max-w-7xl mx-auto flex items-center justify-between">

    <!-- Logo -->
    <a href="/" class="flex items-center gap-2 group">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
      </div>
      <span class="text-xl font-bold text-white tracking-wide" style="font-family:'Playfair Display',serif;">Denta<span class="text-cyan-400">Care</span></span>
    </a>

    <!-- Desktop Links -->
    <div class="hidden relative lg:flex items-center gap-5">
      <a href="/" class="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide">Home</a>
      <a href="about.html" class="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide">About</a>
      <a href="services.html" class="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide">Services</a>
      <a href="blog.html" class="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide">Blog</a>
      <a href="contact.html" class="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide">Contact</a>

    </div>
 <div class="flex items-center gap-3">
  


  <button id="profileBtn"
    class="flex items-center gap-2 px-3 py-1.5 rounded-full
           bg-white/5 border border-white/10
           hover:bg-white/10 hover:border-white/20
           transition-all duration-300">

    <img src=""
         class="w-8 h-8 rounded-full object-cover border border-white/20" />

    <div class="text-left leading-tight">
      <p class="text-white text-sm font-semibold">My Profile</p>
      <p class="text-white/50 text-xs">Dashboard</p>
    </div>

  </button>

</div>
    </div>

    <!-- Hamburger -->
    <button id="menuBtn" class="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div id="mobileMenu" class="hidden lg:hidden mt-4 pb-4 border-t border-white/10">
    <div class="flex flex-col gap-4 pt-4 px-2">
      <a href="/" class="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Home</a>
      <a href="about.html" class="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">About</a>
      <a href="services.html" class="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Services</a>
      <a href="blog.html" class="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Blog</a>
      <a href="contact.html" class="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Contact</a>
      <a href="/user/appointment" class="w-full text-center px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">Book Appointment</a>
    </div>
  </div>
</nav>
<!-- PROFILE DROPDOWN -->
<div id="profileDropdown" class="absolute right-6 top-20 w-72 bg-[#020617]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hidden z-50">

  <!-- USER INFO -->
  <div class="flex items-center gap-3 p-4 border-b border-white/10">
    <img src="<%= user.image %>" class="w-10 h-10 rounded-full border border-cyan-400">
    <div>
      <p class="text-white font-semibold text-sm"><%= user.name %></p>
      <p class="text-cyan-400 text-xs">Dashboard</p>
    </div>
  </div>

  <!-- LINKS -->
  <div class="p-2 space-y-1 text-sm">

    <a href="/user/profile" class="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:bg-cyan-500/10 hover:text-cyan-400 transition">
      👤 Profile
    </a>

    <a href="/user/appointment" class="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:bg-cyan-500/10 hover:text-cyan-400 transition">
      📅 Appointments
    </a>

    <a href="/user/change-password" class="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:bg-cyan-500/10 hover:text-cyan-400 transition">
      🔒 Change Password
    </a>

  </div>

  <!-- DIVIDER -->
  <div class="border-t border-white/10 my-1"></div>

  <!-- AUTH LINKS -->
  <div class="p-2 space-y-1 text-sm">

    <a href="/user/login" class="block px-3 py-2 rounded-lg text-white/80 hover:bg-cyan-500/10 hover:text-cyan-400 transition">
      Login
    </a>

    <a href="/user/register" class="block px-3 py-2 rounded-lg text-white/80 hover:bg-cyan-500/10 hover:text-cyan-400 transition">
      Sign Up
    </a>

    <a href="/user/logout" class="block px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition">
      Logout
    </a>

  </div>

</div>
`;

const FOOTER_HTML = `
<footer class="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-6 lg:px-16">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

      <!-- Brand -->
      <div>
        <a href="/" class="flex items-center gap-2 mb-4">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <span class="text-xl font-bold text-white" style="font-family:'Playfair Display',serif;">Denta<span class="text-cyan-400">Care</span></span>
        </a>
        <p class="text-slate-400 text-sm leading-relaxed">Delivering world-class dental care with compassion, precision, and the latest technology since 2005.</p>
        <div class="flex gap-3 mt-5">
          <a href="#" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors duration-300">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors duration-300">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors duration-300">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Quick Links</h4>
        <ul class="space-y-2.5">
          <li><a href="/" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Home</a></li>
          <li><a href="about.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>About Us</a></li>
          <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Services</a></li>
          <li><a href="/user/appointment" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Appointment</a></li>
          <li><a href="blog.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Blog</a></li>
          <li><a href="contact.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Contact</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Our Services</h4>
        <ul class="space-y-2.5">
          <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Teeth Cleaning</a></li>
          <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Root Canal</a></li>
          <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Dental Braces</a></li>
          <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Teeth Whitening</a></li>
          <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Dental Implants</a></li>
          <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-500 rounded-full"></span>Orthodontics</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Contact</h4>
        <ul class="space-y-3">
          <li class="flex items-start gap-3 text-slate-400 text-sm">
            <svg class="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            123 Smile Avenue, Dental District, NY 10001
          </li>
          <li class="flex items-center gap-3 text-slate-400 text-sm">
            <svg class="w-4 h-4 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +1 (555) 123-4567
          </li>
          <li class="flex items-center gap-3 text-slate-400 text-sm">
            <svg class="w-4 h-4 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            hello@dentacare.com
          </li>
          <li class="flex items-center gap-3 text-slate-400 text-sm">
            <svg class="w-4 h-4 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Mon–Sat: 9 AM – 7 PM
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-slate-500 text-sm">© 2024 DentaCare. All rights reserved.</p>
      <div class="flex gap-6">
        <a href="#" class="text-slate-500 hover:text-cyan-400 text-xs transition-colors">Privacy Policy</a>
        <a href="#" class="text-slate-500 hover:text-cyan-400 text-xs transition-colors">Terms of Service</a>
        <a href="#" class="text-slate-500 hover:text-cyan-400 text-xs transition-colors">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
`;

/* Inject shared layout */
document.getElementById('nav-placeholder')?.insertAdjacentHTML('afterbegin', NAV_HTML);
document.getElementById('footer-placeholder')?.insertAdjacentHTML('afterbegin', FOOTER_HTML);