/**
 * ============================================
 * Portfolio Main JavaScript
 * Vanilla JS + jQuery | All Interactions
 * ============================================
 */

// ─── Wait for DOM ────────────────────────────────
$(document).ready(function () {

  /* ════════════════════════════════════════════
     1. INITIALIZE AOS (Scroll Reveal)
  ════════════════════════════════════════════ */
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    delay: 0
  });


  /* ════════════════════════════════════════════
     2. CUSTOM CURSOR
  ════════════════════════════════════════════ */
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  // Ring follows with slight lag using RAF
  function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effects for interactive elements
  const hoverTargets = 'a, button, input, textarea, .project-card, .service-card, .tech-card';
  $(document).on('mouseenter', hoverTargets, function () {
    cursor.classList.add('hovering');
    cursorRing.classList.add('hovering');
  });
  $(document).on('mouseleave', hoverTargets, function () {
    cursor.classList.remove('hovering');
    cursorRing.classList.remove('hovering');
  });


  /* ════════════════════════════════════════════
     3. PARTICLES BACKGROUND (Canvas)
  ════════════════════════════════════════════ */
  (function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    const PARTICLE_COUNT = 80;
    const ACCENT_COLOR = '0, 255, 178';

    // Resize canvas to window
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
        this.fadeSpeed = Math.random() * 0.005 + 0.001;
        this.connections = [];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Pulse opacity
        this.opacity += this.fadeSpeed * this.fadeDirection;
        if (this.opacity > 0.6 || this.opacity < 0.05) {
          this.fadeDirection *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_COLOR}, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    // Draw connections between nearby particles
    function drawConnections() {
      const MAX_DIST = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${ACCENT_COLOR}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      requestAnimationFrame(animate);
    }
    animate();
  })();


  /* ════════════════════════════════════════════
     4. TYPING ANIMATION
  ════════════════════════════════════════════ */
  (function initTyping() {
    const phrases = [
      'Fullstack Developer',
      'Backend Developer',
      'Frontend Developer',
      'MERNStack Developer',
      'Developer Tools',
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const el = document.getElementById('typing-text');

    function type() {
      const current = phrases[phraseIndex];

      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 50 : 80;

      if (!isDeleting && charIndex === current.length) {
        delay = 1800; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400;
      }

      setTimeout(type, delay);
    }

    setTimeout(type, 800); // Initial delay
  })();


  /* ════════════════════════════════════════════
     5. NAVBAR SCROLL EFFECTS
  ════════════════════════════════════════════ */
  const navbar = document.getElementById('navbar');

  $(window).on('scroll', function () {
    const scrollY = window.scrollY;

    // Sticky navbar with glassmorphism
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active section highlighting
    updateActiveNavLink();

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  // Active section detection
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`nav a[href="#${id}"]`);

      if (navLink) {
        if (scrollY >= top && scrollY < top + height) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }

  // Back to top
  $('#back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });


  /* ════════════════════════════════════════════
     6. MOBILE MENU
  ════════════════════════════════════════════ */
  const mobileMenu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('menu-toggle');
  const menuBars = document.querySelectorAll('.menu-bar');

  $('#menu-toggle').on('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenu.setAttribute('aria-hidden', !isOpen);

    // Animate hamburger icon
    if (isOpen) {
      menuBars[0].style.transform = 'rotate(45deg) translateY(8px)';
      menuBars[1].style.opacity = '0';
      menuBars[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      menuBars[0].style.transform = '';
      menuBars[1].style.opacity = '';
      menuBars[2].style.transform = '';
    }
  });

  // Close on link click
  $('.mobile-nav-link').on('click', function () {
    mobileMenu.classList.remove('open');
    menuBars[0].style.transform = '';
    menuBars[1].style.opacity = '';
    menuBars[2].style.transform = '';
  });


  /* ════════════════════════════════════════════
     7. DARK MODE TOGGLE
  ════════════════════════════════════════════ */
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Load saved theme
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  function applyTheme(theme) {
    if (theme === 'light') {
      html.classList.add('light');
      html.classList.remove('dark');
      themeIcon.className = 'fas fa-sun text-amber-400 text-sm group-hover:scale-110 transition-transform';
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      themeIcon.className = 'fas fa-moon text-accent text-sm group-hover:scale-110 transition-transform';
    }
    localStorage.setItem('portfolio-theme', theme);
  }

  $('#theme-toggle').on('click', function () {
    const isLight = html.classList.contains('light');
    applyTheme(isLight ? 'dark' : 'light');
  });


  /* ════════════════════════════════════════════
     8. COUNTER ANIMATION
  ════════════════════════════════════════════ */
  function animateCounters() {
    $('.counter').each(function () {
      const el = $(this);
      const target = parseInt(el.data('target'));
      const duration = 1500;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.text(Math.floor(current) + '+');
      }, 16);
    });
  }

  // Trigger counters when hero section is visible
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const heroSection = document.getElementById('hero');
  if (heroSection) heroObserver.observe(heroSection);


  /* ════════════════════════════════════════════
     9. SKILLS DATA & RENDERING
  ════════════════════════════════════════════ */
  const skills = [
    { name: 'JavaScript / TypeScript', level: 95, icon: 'fab fa-js-square' },
    { name: 'React .js', level: 92, icon: 'fab fa-react' },
    { name: 'Node.js / Express', level: 90, icon: 'fab fa-node-js' },
    { name: 'MongoDB', level: 90, icon: 'fas fa-database' },
    { name: 'Tailwind CSS', level: 85, icon: 'devicon-tailwindcss-plain ' },
  ];

  const techStack = [
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#68A063' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#4DB33D' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#563D7C' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', color: '#38B2AC' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored', color: '#3178C6' },
    { name: 'C', icon: 'fab fa-c', color: '#3776AB' },
  ];

  // Render skill bars
  const skillBarsContainer = document.getElementById('skill-bars');
  if (skillBarsContainer) {
    skillBarsContainer.innerHTML = skills.map(skill => `
      <div class="skill-item">
        <div class="flex justify-between items-center mb-2">
          <div class="flex items-center gap-2 text-sm font-display font-medium">
            <i class="${skill.icon} text-accent text-xs"></i>
            <span>${skill.name}</span>
          </div>
          <span class="text-accent font-mono text-xs">${skill.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-width="${skill.level}"></div>
        </div>
      </div>
    `).join('');
  }

  // Render tech cards
  const techCardsContainer = document.getElementById('tech-cards');
  if (techCardsContainer) {
    techCardsContainer.innerHTML = techStack.map(tech => `
      <div class="tech-card" title="${tech.name}">
        <div><i class="${tech.icon}" style="color: ${tech.color}"></i></div>
        <div><span>${tech.name}</span></div>
      </div>
    `).join('');
  }

  // Animate skill bars on scroll into view
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
          const width = bar.dataset.width;
          setTimeout(() => { bar.style.width = width + '%'; }, 200);
        });
        skillObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) skillObserver.observe(skillsSection);


  /* ════════════════════════════════════════════
     10. PROJECTS DATA & RENDERING
  ════════════════════════════════════════════ */
  const projects = [
    {
      id: 1,
      title: 'DentCare – Node.js Backend Project ',
      description: 'A backend-driven dental clinic management system built with Node.js and Express. Features include patient registration, appointment scheduling, secure authentication, and an admin dashboard for efficient clinic management. Designed with a structured MVC architecture and optimized database queries for performance. Ensures smooth data handling and a user-friendly workflow for managing clinic operations.',
      category: 'backend',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Authentication'],
      icon: 'fas fa-tooth',
      iconBg: 'from-blue-500 to-cyan-600',
      live: 'https://your-live-link.com',
      github: 'https://github.com/your-repo-link',
      featured: true
    }, {
      id: 2,
      title: 'Employee Management System – Full Stack MERN Project',
      description: 'A backend-driven employee management system built with Node.js and Express. Features include employee CRUD operations, role-based authentication and an admin dashboard for efficient workforce management. Designed with a structured MVC architecture and optimized database queries for performance. Ensures smooth data handling and streamlined employee and administrative workflows.',
      category: 'backend',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Authentication'],
      icon: 'fas fa-users',
      iconBg: 'from-green-500 to-emerald-600',
      live: 'https://pr-ems.onrender.com/',
      github: 'https://github.com/Dev-Mjarir08/PR-EMS',
      featured: true
    }
  ];

  // Render projects
  function renderProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map((project, idx) => `
      <div class="project-card" data-category="${project.category}" data-aos="fade-up" data-aos-delay="${idx * 80}">
        <!-- Thumbnail -->
        <div class="project-thumbnail">
          <div class="project-thumbnail-bg bg-gradient-to-br ${project.iconBg}"></div>
          <div class="absolute inset-0 bg-gradient-to-br ${project.iconBg} opacity-10"></div>
          <div class="project-thumbnail-icon">
            <i class="${project.icon} text-white/80"></i>
          </div>
          ${project.featured ? '<span class="absolute top-4 right-4 px-2 py-1 bg-accent/20 border border-accent/40 text-accent text-xs font-mono rounded-lg">★ Featured</span>' : ''}
        </div>

        <!-- Content -->
        <div class="p-6 space-y-4">
          <div class="flex items-start justify-between gap-3">
            <h3 class="font-display font-bold text-lg">${project.title}</h3>
            <span class="text-xs font-mono px-2 py-1 rounded-lg bg-surface border border-surface-border text-white/40 flex-shrink-0 capitalize">${project.category}</span>
          </div>

          <p class="text-white/50 text-sm leading-relaxed">${project.description}</p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            ${project.tags.map(tag => `
              <span class="text-xs px-2 py-1 rounded-md bg-surface border border-surface-border text-white/40 font-mono">${tag}</span>
            `).join('')}
          </div>

          <!-- Links -->
          <div class="flex gap-3 pt-2 border-t border-surface-border">
            <a href="${project.live}" target="_blank" rel="noopener"
               class="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors">
              <i class="fas fa-external-link-alt text-xs"></i>
              Live Demo
            </a>
            <a href="${project.github}" target="_blank" rel="noopener"
               class="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors ml-auto">
              <i class="fab fa-github text-sm"></i>
              Source
            </a>
          </div>
        </div>
      </div>
    `).join('');

    // Re-init AOS for new elements
    AOS.refresh();
  }

  renderProjects();

  // Project filter
  $('.filter-btn').on('click', function () {
    const filter = $(this).data('filter');

    // Update active state
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // Re-render with filter
    renderProjects(filter);
  });


  /* ════════════════════════════════════════════
     11. EXPERIENCE & EDUCATION TIMELINE
  ════════════════════════════════════════════ */
  const experiences = [
    {
      role: 'DantCare',
      company: 'Backend Developement',
      period: 'May-2026',
      desc: 'Engineered a clinic management platform with Node.js, featuring secure authentication, appointment handling, and dashboard tools for efficient operations.'
    },
    {
      role: 'Portfolio Website',
      company: 'Frontend Development (React)',
      period: 'Apr-2026',
      desc: 'Developed a responsive portfolio website using React, Tailwind CSS, and JavaScript, focusing on modern UI design, smooth navigation, and optimized performance.'
    },
    {
      role: 'Employee Management System',
      company: 'Full Stack Development',
      period: 'Jun-2026',
      desc: 'Built a full-stack employee management system using Node.js, Express, and MongoDB with React frontend, featuring authentication, CRUD operations, and admin dashboard.'
    }
  ];

  const education = [
    {
      degree: 'Full Stack Web Development',
      institution: 'Red & White Skill Education',
      period: '2024 – 2026',
      desc: 'Pursuing full stack web development with hands-on experience in HTML, CSS, JavaScript, and modern frameworks, focusing on building responsive and scalable web applications.'
    },
    {
      degree: 'Higher Secondary (HSC) - Science',
      institution: 'Arts, Commerce and Science Junior College',
      period: 'Jun 2022 – Jun 2023',
      desc: 'Completed Higher Secondary education in Science with a focus on analytical thinking and problem-solving, achieving a grade of B+.'
    },
    {
      degree: 'Full Stack Web Development Program',
      institution: 'Nihar Skill Education',
      period: '2023',
      desc: 'Completed intensive training in full stack web development, covering frontend, backend, and database technologies with a focus on building scalable and production-ready applications.'
    }
  ];

  // Render timeline items
  function renderTimeline(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map((item, idx) => `
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="${idx * 100}">
        <div class="timeline-dot"></div>
        <div class="mb-1 flex items-center gap-2 flex-wrap">
          <h4 class="font-display font-bold text-base">${item.role || item.degree}</h4>
        </div>
        <div class="flex items-center gap-3 mb-2">
          <span class="text-accent text-sm font-medium">${item.company || item.institution}</span>
          <span class="text-white/20">•</span>
          <span class="text-white/30 text-xs font-mono">${item.period}</span>
        </div>
        <p class="text-white/45 text-sm leading-relaxed">${item.desc}</p>
      </div>
    `).join('');
  }

  renderTimeline(experiences, 'experience-timeline');
  renderTimeline(education, 'education-timeline');


  /* ════════════════════════════════════════════
     12. CONTACT FORM WITH VALIDATION + API
  ════════════════════════════════════════════ */
  const API_BASE = 'http://localhost:5000/api';

  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnLoading = document.getElementById('btn-loading');
  const notification = document.getElementById('form-notification');

  // Character count for message field
  $('#message').on('input', function () {
    const len = $(this).val().length;
    $('#char-count').text(len);

    if (len > 1800) {
      $('#char-count').css('color', '#f87171');
    } else {
      $('#char-count').css('color', '');
    }
  });

  // Validation rules
  const validators = {
    name: {
      validate: (v) => v.trim().length >= 2 && v.trim().length <= 100 && /^[a-zA-Z\s'-]+$/.test(v.trim()),
      message: 'Name must be 2–100 characters (letters only)'
    },
    email: {
      validate: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v.trim()),
      message: 'Please enter a valid email address'
    },
    subject: {
      validate: (v) => v.trim().length >= 5 && v.trim().length <= 200,
      message: 'Subject must be 5–200 characters'
    },
    message: {
      validate: (v) => v.trim().length >= 10 && v.trim().length <= 2000,
      message: 'Message must be 10–2000 characters'
    }
  };

  // Show field error
  function showFieldError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorEl = input.closest('.form-group').querySelector('.field-error');

    input.classList.add('error');
    input.classList.remove('success');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
  }

  // Clear field error
  function clearFieldError(fieldId) {
    const input = document.getElementById(fieldId);
    const errorEl = input.closest('.form-group').querySelector('.field-error');

    input.classList.remove('error');
    input.classList.add('success');
    if (errorEl) errorEl.classList.add('hidden');
  }

  // Validate single field on blur
  ['name', 'email', 'subject', 'message'].forEach(fieldId => {
    $(`#${fieldId}`).on('blur', function () {
      const value = $(this).val();
      const rule = validators[fieldId];
      if (value && !rule.validate(value)) {
        showFieldError(fieldId, rule.message);
      } else if (value) {
        clearFieldError(fieldId);
      }
    });

    $(`#${fieldId}`).on('input', function () {
      const value = $(this).val();
      if ($(this).hasClass('error') && validators[fieldId].validate(value)) {
        clearFieldError(fieldId);
      }
    });
  });

  // Show notification
  function showNotification(message, type = 'success') {
    notification.className = `p-4 rounded-xl text-sm font-mono notification-${type}`;
    notification.innerHTML = `
      <span class="flex items-center gap-2">
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
      </span>
    `;
    notification.classList.remove('hidden');

    // Auto-hide after 6 seconds
    setTimeout(() => notification.classList.add('hidden'), 6000);
  }

  // Form submit
  $(form).on('submit', async function (e) {
    e.preventDefault();

    // Collect values
    const data = {
      name: $('#name').val(),
      email: $('#email').val(),
      subject: $('#subject').val(),
      message: $('#message').val()
    };

    // Validate all fields
    let hasErrors = false;
    Object.entries(validators).forEach(([fieldId, rule]) => {
      if (!data[fieldId] || !rule.validate(data[fieldId])) {
        showFieldError(fieldId, rule.message);
        hasErrors = true;
      } else {
        clearFieldError(fieldId);
      }
    });

    if (hasErrors) {
      showNotification('Please fix the errors above before submitting.', 'error');
      return;
    }

    // Set loading state
    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnLoading.classList.remove('hidden');

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Reset form
        form.reset();
        $('#char-count').text('0');
        document.querySelectorAll('.form-input').forEach(i => {
          i.classList.remove('success', 'error');
        });

        showNotification('✓ Message sent! I\'ll get back to you within 24 hours.', 'success');
      } else {
        // Show API validation errors
        if (result.errors && Array.isArray(result.errors)) {
          result.errors.forEach(err => {
            if (err.field) showFieldError(err.field, err.message);
          });
        }
        showNotification(result.message || 'Failed to send. Please try again.', 'error');
      }
    } catch (error) {
      // Network error fallback
      console.warn('API not available — form submitted locally:', data);
      showNotification('Message queued! (Connect backend to enable email delivery)', 'success');
      form.reset();
      $('#char-count').text('0');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      btnText.classList.remove('hidden');
      btnLoading.classList.add('hidden');
    }
  });


  /* ════════════════════════════════════════════
     13. SMOOTH SCROLL FOR NAV LINKS
  ════════════════════════════════════════════ */
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this).attr('href');
    if (target === '#') return;

    const $target = $(target);
    if ($target.length) {
      e.preventDefault();
      const offset = $target.offset().top - 80;
      $('html, body').animate({ scrollTop: offset }, 600, 'swing');
    }
  });


  /* ════════════════════════════════════════════
     14. INIT COMPLETE — Fade in body
  ════════════════════════════════════════════ */
  $('body').css('opacity', 0).animate({ opacity: 1 }, 400);

  console.log('%c🚀 Portfolio loaded', 'color: #00FFB2; font-size: 14px; font-weight: bold;');
  console.log('%cBuilt with Node.js + MongoDB + Tailwind', 'color: rgba(255,255,255,0.4); font-size: 11px;');
});
