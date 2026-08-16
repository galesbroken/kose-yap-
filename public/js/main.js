/**
 * KÖSE YAPI DEKORASYON - MAIN JAVASCRIPT
 * Controls Lucide icons, Lenis smooth scroll, GSAP animations, and Header interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Initialize Lenis Smooth Scroll
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // 3. Header Scroll Transformation
  const siteHeader = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 4. Mobile Menu Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileMenu) {
    const toggleMenu = () => {
      const isActive = mobileToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', toggleMenu);

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  }

  // 5. GSAP Scroll Animations
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    gsap.from('.animate-badge', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2
    });

    gsap.from('.animate-heading', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.4
    });

    gsap.from('.animate-body', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.6
    });

    gsap.from('.animate-actions', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.8
    });

    // Features Bar Reveal
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.hero-features-bar',
        start: 'top 85%'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15
    });

    // Section Titles Reveal
    gsap.utils.toArray('.section-title').forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 85%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8
      });
    });

    // Category Cards Reveal
    gsap.from('.category-card', {
      scrollTrigger: {
        trigger: '.categories-grid',
        start: 'top 80%'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15
    });

    // Editorial Cards Reveal
    gsap.from('.editorial-card', {
      scrollTrigger: {
        trigger: '.editorial-grid',
        start: 'top 80%'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2
    });

    // Service Cards Reveal
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15
    });

    // Why Cards Reveal
    gsap.from('.why-card', {
      scrollTrigger: {
        trigger: '.why-grid',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15
    });
  }

  // 6. Smooth Scroll anchor click handler for native scroll fallback
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(targetElement);
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
