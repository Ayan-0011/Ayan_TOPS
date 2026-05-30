/* ---- Loader ---- */
window.addEventListener('load', () => {
  const loaderEl = document.getElementById('loader');
  const loaderText = document.getElementById('loader-text');
  const maskText = document.getElementById('mask-text');
  const overlay = document.getElementById('loader-overlay');

  maskText.setAttribute('transform-origin', '50 50');
  loaderText.setAttribute('transform-origin', '50 50');

  const dur = 2200;
  const startTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function tick(now) {
    const raw = Math.min((now - startTime) / dur, 1);
    const t = easeInOutCubic(raw);

    const scale = 1 + t * 18;
    const s = scale.toFixed(3);

    loaderText.setAttribute('transform', `scale(${s})`);
    maskText.setAttribute('transform', `scale(${s})`);

    const strokeOpacity = raw < 0.65
      ? 1
      : Math.max(0, 1 - (raw - 0.65) / 0.35);
    loaderText.style.opacity = strokeOpacity;

    const overlayOpacity = raw < 0.72
      ? 1
      : Math.max(0, 1 - (raw - 0.72) / 0.28);
    overlay.style.opacity = overlayOpacity;

    if (raw < 1) {
      requestAnimationFrame(tick);
    } else {
      loaderEl.classList.add('loader--hidden');
    }
  }

  setTimeout(() => requestAnimationFrame(tick), 300);
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
  strings: ['Frontend Developer', 'React Developer', 'Web Designer', 'web developer', 'Tech Enthusiast'],
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
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("cName");
const emailInput = document.getElementById("cEmail");
const subjectInput = document.getElementById("cSubject");
const messageInput = document.getElementById("cMessage");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");


// Name Validation
function validateName() {
  const namePattern = /^[A-Za-z\s]+$/;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "* Name is required";
    return false;
  }

  if (!namePattern.test(nameInput.value.trim())) {
    nameError.textContent = "* Only letters are allowed";
    return false;
  }

  nameError.textContent = "";
  return true;
}


// Email Validation
function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === "") {
    emailError.textContent = "* Email is required";
    return false;
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "* Enter valid email";
    return false;
  }

  emailError.textContent = "";
  return true;
}


// Subject Validation
function validateSubject() {
  const subjectPattern = /^[A-Za-z\s]+$/;

  if (subjectInput.value.trim() === "") {
    subjectError.textContent = "* Subject is required";
    return false;
  }
  if (!subjectPattern.test(subjectInput.value.trim())) {
    subjectError.textContent = "* Only letters are allowed";
    return false;
  }

  subjectError.textContent = "";
  return true;
}


// Message Validation
function validateMessage() {
  if (messageInput.value.trim() === "") {
    messageError.textContent = "* Message is required";
    return false;
  }

  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters";
    return false;
  }

  messageError.textContent = "";
  return true;
}


// Real-time Validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
subjectInput.addEventListener("input", validateSubject);
messageInput.addEventListener("input", validateMessage);


// Form Submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();

  if (
    !isNameValid ||
    !isEmailValid ||
    !isSubjectValid ||
    !isMessageValid
  ) {
    return;
  }

  const btn = form.querySelector(".btn-submit");

  btn.innerHTML = "Sending...";
  btn.disabled = true;

  try {
    const res = await fetch("https://formspree.io/f/xovzzgeg", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      form.reset();

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thanks for contacting me.",
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Something went wrong.",
    });
  } finally {
    btn.innerHTML = "Send Message";
    btn.disabled = false;
  }
});