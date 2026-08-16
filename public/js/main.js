/**
 * KÖSE YAPI DEKORASYON - MAIN JAVASCRIPT
 * Optimized for natural, stable, crisp scrolling without slide/slip effects.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Header Scroll Transformation
  const siteHeader = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Menu Navigation Toggle
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

  // 4. Subtle, Stable Entrance Animations (No position jumps)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero subtle fade in
    gsap.from('.hero-content > *', {
      opacity: 0,
      y: 12,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // Clean subtle fade-in on scroll without heavy displacement
    const animateFade = (selector, triggerSelector) => {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: triggerSelector || selector,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power1.out'
      });
    };

    animateFade('.feature-card', '.hero-features-bar');
    animateFade('.category-card', '.categories-grid');
    animateFade('.editorial-card', '.editorial-grid');
    animateFade('.service-card', '.services-grid');
    animateFade('.why-card', '.why-grid');
  }

  // 5. Precise Smooth Scroll for Navigation Anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
