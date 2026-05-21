 /* ---- Loader ---- */
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loader').classList.add('loader--hidden');
      }, 1200);
    });

    /* ---- Navbar scroll ---- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
      document.getElementById('topBtn').classList.toggle('visible', window.scrollY > 300);
    });

    /* ---- Mobile menu ---- */
    function openMenu() {
      document.getElementById('navLinks').classList.add('open');
      document.getElementById('navOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('navOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    /* ---- Scroll reveal ---- */
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
      revealObserver.observe(el);
    });

    /* ---- Active nav link ---- */
    const sections = document.querySelectorAll('section[id], div[id="footer"]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          const id = e.target.id;
          const match = document.querySelector(`.nav-links a[href="#${id}"]`);
          if (match) match.classList.add('active');
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => sectionObserver.observe(s));

    /* ---- Back to top ---- */
    document.getElementById('topBtn').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ---- Vanta waves ---- */
    VANTA.WAVES({
      el: '#vanta-bg',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0a1628,
      shininess: 40.00,
      waveHeight: 18.00,
      waveSpeed: 0.6,
      zoom: 0.85
    });

    /* ---- Typed.js ---- */
    new Typed('#typed-about', {
      strings: ['Frontend Developer', 'React Developer', 'Web Designer','web developer', 'Tech Enthusiast'],
      typeSpeed: 55,
      backSpeed: 35,
      loop: true
    });

    /* ---- Skill bar animation ---- */
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-fill').forEach(bar => {
            bar.style.width = bar.style.getPropertyValue('--pct') || bar.getAttribute('style').match(/--pct:\s*([\d%]+)/)?.[1] || '0%';
          });
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.skills-bento').forEach(el => skillObserver.observe(el));

    /* ---- Contact form ---- */
    document.getElementById('contactForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const btn = form.querySelector('.btn-submit');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      try {
        const res = await fetch('https://formspree.io/f/xovzzgeg', {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (res.ok) {
          form.reset();
          Swal.fire({
            icon: 'success',
            title: 'Message sent!',
            text: 'Thanks for reaching out. I\'ll get back to you soon.',
            confirmButtonColor: '#00d4aa',
            background: '#161b22',
            color: '#e2e8f0'
          });
        } else {
          throw new Error('Form error');
        }
      } catch {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong. Please try again.',
          confirmButtonColor: '#00d4aa',
          background: '#161b22',
          color: '#e2e8f0'
        });
      } finally {
        btn.innerHTML = 'Send message <i class="bi bi-send"></i>';
        btn.disabled = false;
      }
    });