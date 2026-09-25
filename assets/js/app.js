/* =========================================================
   Syahrial Rafky — interactions, i18n, 3D background
   ========================================================= */

import * as THREE from "./three.module.js";

/* ---------------------------------------------------------
   1. Internationalisation (ID <-> EN)
   --------------------------------------------------------- */

const I18N = {
  id: {
    "meta.title": "Syahrial Rafky",

    "nav.about": "Tentang",
    "nav.project": "Proyek",

    "hero.kicker": "PORTOFOLIO",
    "hero.desc":
      "Passionate Pentester, Website Developer dan Game Developer dengan pengalaman dalam berbagai teknologi. Menciptakan pengalaman digital yang aman, user experience, dan performance yang optimal.",
    "hero.cta": "Lihat Karya Saya",
    "hero.ctaContact": "Hubungi",
    "hero.scroll": "Gulir untuk menjelajah",

    "about.title": "Tentang Saya",
    "about.lead":
      "Saya adalah Mahasiswa Teknologi Informasi Universitas Jember yang bersemangat untuk belajar dan mengembangkan keterampilan di bidang teknologi.",
    "about.body": "Saya memiliki minat pada pengembangan web, game, dan Cybersecurity.",
    "about.specTitle": "Spesialisasi",
    "about.spec1": "Pentester dengan IDA, Ghidra, GDB, Burp Suite, dan Wireshark.",
    "about.spec2": "Frontend Development dengan HTML, CSS, JavaScript, dan Tailwind Framework.",
    "about.spec3":
      "Backend Development dengan Laravel, Node.js, ASP.NET, dan Python, serta website development dengan Flutter.",
    "about.stack": "Teknologi",
    "about.nowTitle": "Saat Ini",
    "about.now1": "Mahasiswa Teknologi Informasi, Universitas Jember",
    "about.now2": "System administrator, Delta Kreatif",
    "about.now3": "Asisten praktikum Sistem Operasi",
    "about.now4": "Ketua Pelaksana Pembinaan CTF, UKM LAOS",

    "stats.a": "Proyek",
    "stats.b": "Penghargaan",
    "stats.c": "Pengalaman",

    "project.title": "Proyek Pilihan",
    "project.p1desc":
      "Permainan untuk melatih gerakan motorik anak yang dikhususkan pada anak berkebutuhan khusus. Meraih juara 2 Gemastik 2025 divisi UI/UX dan Finalis LIDM ITDP 2025.",
    "project.p2desc":
      "Sistem persuratan desa dan otomatisasi surat berbasis mobile untuk mempermudah pengelolaan persuratan desa.",
    "project.p3desc": "Aplikasi monitoring dan penyiraman otomatis tanaman secara realtime berbasis Android dan IoT.",
    "project.p4desc": "Aplikasi menyembunyikan pesan menggunakan catur sebagai media steganografi.",
    "project.p5desc": "Aplikasi website yang berfokus pada pengembangan diri serta gamifikasi RPG.",
    "project.p6desc": "Aplikasi game development berbasis cross platform menggunakan Godot.",

    "awards.title": "Penghargaan &amp; Pencapaian",
    "awards.d1":
      "Penghargaan juara 2 pada tim Pecah Telor. Sebagai tim support, bertanggung jawab atas pengembangan website dan 4 game di dalamnya.",
    "awards.d2": "Penghargaan juara 2 pada tim Gedebog Pisang.",
    "awards.d3": "Menjadi finalis dalam kompetisi LIDM divisi ITDP bersama tim Pecah Telor.",
    "awards.d4": "Penghargaan juara 2 pada tim Bismillah kategori Data Mining.",
    "awards.d5": "Juara harapan pertama dalam kompetisi Game Development bersama tim Arerumi.",
    "awards.d6": "Menjadi finalis dalam kompetisi Game Development bersama tim Arerumi.",
    "awards.d7": "Menjadi finalis Capture The Flag bersama tim Gedebog Pisang.",
    "awards.d8": "Menjadi finalis Capture The Flag bersama tim Gedebog Pisang.",
    "awards.d9": "Menjadi finalis Capture The Flag bersama tim Gedebog Pisang.",
    "awards.d10": "Menjadi finalis Capture The Flag bersama tim Gedebog Pisang.",
    "awards.d11": "Menjadi finalis Capture The Flag bersama tim Gedebog Pisang.",

    "exp.title": "Pengalaman",
    "exp.now": "Sekarang",
    "exp.locJember": "Jember, Jawa Timur, Indonesia",
    "exp.locUnej": "Universitas Jember, Jawa Timur, Indonesia",
    "exp.eastJava": "Jawa Timur",
    "exp.t2": "Penelitian &mdash; Lab Infrastruktur Teknologi",
    "exp.d1": "Menjadi sistem administrator website dan jurnal di Delta Kreatif.",
    "exp.d2":
      "Asisten praktikum dan pengajar Sistem Operasi untuk lebih dari 70 mahasiswa, serta melakukan penelitian dosen.",
    "exp.d3":
      "Mengajar cybersecurity tentang game hacking kepada anggota internal UKM dan menjadi Ketua Pelaksana Pembinaan CTF.",
    "exp.d4":
      "Membuat website UKM LAOS, mengajar Git kepada anggota internal UKM, dan menjadi Ketua Pelaksana Website Development Competition.",
    "exp.d5": "Mahasiswa aktif Teknologi Informasi Universitas Jember.",
    "exp.d6": "Kegiatan ekstrakurikuler musik, dengan peran sebagai music producer dan pianist.",
    "exp.d7": "Menyelesaikan pendidikan menengah atas dengan prestasi yang baik.",

    "contact.title": "Mari Bekerja Sama",
    "contact.text":
      "Tertarik untuk berkolaborasi, atau sekadar ingin mengobrol? Saya selalu terbuka untuk proyek menarik dan kesempatan kerja sama yang menantang.",

    "footer.rights": "Seluruh hak cipta dilindungi.",
  },

  en: {
    "meta.title": "Syahrial Rafky",

    "nav.about": "About",
    "nav.project": "Projects",

    "hero.kicker": "PORTFOLIO",
    "hero.desc":
      "A passionate pentester, web developer and game developer with experience across a wide range of technologies — building digital experiences that are secure, usable and performant.",
    "hero.cta": "View My Work",
    "hero.ctaContact": "Contact",
    "hero.scroll": "Scroll to explore",

    "about.title": "About Me",
    "about.lead":
      "I am an Information Technology student at Universitas Jember with a strong drive to keep learning and growing my skills in technology.",
    "about.body": "My interests span web development, games, and cybersecurity.",
    "about.specTitle": "Specialisation",
    "about.spec1": "Pentester using IDA, Ghidra, GDB, Burp Suite, and Wireshark.",
    "about.spec2": "Frontend development with HTML, CSS, JavaScript, and the Tailwind framework.",
    "about.spec3":
      "Backend development with Laravel, Node.js, ASP.NET, and Python, plus website development with Flutter.",
    "about.stack": "Technology",
    "about.nowTitle": "Currently",
    "about.now1": "Information Technology student, Universitas Jember",
    "about.now2": "System administrator, Delta Kreatif",
    "about.now3": "Operating Systems teaching assistant",
    "about.now4": "Head of CTF Training, UKM LAOS",

    "stats.a": "Projects",
    "stats.b": "Awards",
    "stats.c": "Experience",

    "project.title": "Featured Projects",
    "project.p1desc":
      "A game that trains motor skills, designed specifically for children with special needs. Won 2nd place at Gemastik 2025 in the UI/UX division and was a finalist at LIDM ITDP 2025.",
    "project.p2desc":
      "A mobile-based village correspondence system with letter automation to streamline village paperwork.",
    "project.p3desc": "A real-time Android and IoT application for monitoring and automatically watering plants.",
    "project.p4desc": "An application that hides messages inside a chess game as a steganographic medium.",
    "project.p5desc": "A website focused on self-development with RPG-style gamification.",
    "project.p6desc": "A cross-platform game development project built with Godot.",

    "awards.title": "Awards &amp; Recognition",
    "awards.d1":
      "2nd place with team Pecah Telor. As the support team, responsible for developing the website and the four games inside it.",
    "awards.d2": "2nd place with team Gedebog Pisang.",
    "awards.d3": "Finalist in the LIDM competition, ITDP division, with team Pecah Telor.",
    "awards.d4": "2nd place with team Bismillah in the Data Mining category.",
    "awards.d5": "First runner-up in a Game Development competition with team Arerumi.",
    "awards.d6": "Finalist in a Game Development competition with team Arerumi.",
    "awards.d7": "Finalist in Capture The Flag with team Gedebog Pisang.",
    "awards.d8": "Finalist in Capture The Flag with team Gedebog Pisang.",
    "awards.d9": "Finalist in Capture The Flag with team Gedebog Pisang.",
    "awards.d10": "Finalist in Capture The Flag with team Gedebog Pisang.",
    "awards.d11": "Finalist in Capture The Flag with team Gedebog Pisang.",

    "exp.title": "Experience",
    "exp.now": "Present",
    "exp.locJember": "Jember, East Java, Indonesia",
    "exp.locUnej": "University of Jember, East Java, Indonesia",
    "exp.eastJava": "East Java",
    "exp.t2": "Research &mdash; Technology Infrastructure Lab",
    "exp.d1": "System administrator for the website and journal at Delta Kreatif.",
    "exp.d2":
      "Operating Systems teaching assistant for more than 70 students, while also supporting faculty research.",
    "exp.d3":
      "Teaching cybersecurity — especially game hacking — to internal UKM members, and serving as Head of CTF Training.",
    "exp.d4":
      "Built the UKM LAOS website, taught Git to internal UKM members, and served as Head of the Website Development Competition.",
    "exp.d5": "Active Information Technology student at Universitas Jember.",
    "exp.d6": "Music extracurricular activity, serving as a music producer and pianist.",
    "exp.d7": "Completed secondary education with good academic results.",

    "contact.title": "Let’s Work Together",
    "contact.text":
      "Interested in collaborating, or just want to chat? I am always open to interesting projects and challenging opportunities.",

    "footer.rights": "All rights reserved.",
  },
};

const LANG_KEY = "***";

function detectLang() {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "id" || stored === "en") return stored;
  } catch (e) {}
  return "id";
}

let currentLang = detectLang();

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  if (dict["meta.title"]) document.title = dict["meta.title"];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.getAttribute("data-i18n")];
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll(".lang-opt").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.lang === lang);
  });

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => applyLang(currentLang === "id" ? "en" : "id"));
}

applyLang(currentLang);

/* ---------------------------------------------------------
   2. Header, progress, nav highlight
   --------------------------------------------------------- */

const header = document.getElementById("header");
const progress = document.getElementById("progress");
let sceneApi = null;

function onScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  if (header) header.classList.toggle("is-scrolled", y > 24);
  if (progress) {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = ((h > 0 ? Math.min(y / h, 1) : 0) * 100).toFixed(2) + "%";
  }
  if (bgCanvas) bgCanvas.style.opacity = Math.max(0.32, 0.9 - y / 1600).toFixed(3);
  if (sceneApi) sceneApi.setScroll(y);
}
window.addEventListener("scroll", onScroll, { passive: true });

const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const navSections = navLinks
  .map((l) => document.querySelector(l.getAttribute("href")))
  .filter(Boolean);

if (navSections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === id));
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  navSections.forEach((s) => navObserver.observe(s));
}

/* ---------------------------------------------------------
   3. Reveal + counters
   --------------------------------------------------------- */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = Array.from(el.parentElement?.children || []);
        const idx = siblings.indexOf(el);
        if (idx > -1) el.style.transitionDelay = Math.min(idx, 6) * 70 + "ms";
        el.classList.add("is-in");
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
}

function animateCount(el) {
  const target = Number(el.dataset.count || 0);
  const start = performance.now();
  const duration = 1100;
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

if (!reduceMotion) {
  const countObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { animateCount(entry.target); obs.unobserve(entry.target); }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll(".count").forEach((el) => countObserver.observe(el));
} else {
  document.querySelectorAll(".count").forEach((el) => { el.textContent = el.dataset.count || "0"; });
}

/* ---------------------------------------------------------
   4. Footer year
   --------------------------------------------------------- */

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ---------------------------------------------------------
   5. Three.js ambient scene
   --------------------------------------------------------- */

const bgCanvas = document.getElementById("bg");

function initScene() {
  if (!bgCanvas || reduceMotion) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: bgCanvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  } catch (e) {
    bgCanvas.style.display = "none";
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 7.6);

  const root = new THREE.Group();
  scene.add(root);

  const lineMaterial = (opacity) =>
    new THREE.MeshBasicMaterial({ color: 0xa8bdd6, wireframe: true, transparent: true, opacity });

  const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(3.5, 0), lineMaterial(0.1));
  root.add(shell);
  const lattice = new THREE.Mesh(new THREE.IcosahedronGeometry(2.35, 1), lineMaterial(0.24));
  root.add(lattice);
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.95, 0), lineMaterial(0.4));
  root.add(core);

  const ringMat = new THREE.MeshBasicMaterial({ color: 0xc6d6e8, transparent: true, opacity: 0.16 });
  const ringA = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.004, 8, 200), ringMat);
  ringA.rotation.x = Math.PI / 2.35;
  root.add(ringA);
  const ringB = new THREE.Mesh(new THREE.TorusGeometry(3.7, 0.004, 8, 200), ringMat.clone());
  ringB.rotation.x = Math.PI / 1.7;
  ringB.rotation.y = Math.PI / 3;
  root.add(ringB);

  const COUNT = 640;
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const r = 3.2 + Math.random() * 3.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ color: 0xd4e2f2, size: 0.022, transparent: true, opacity: 0.7, depthWrite: false })
  );
  root.add(particles);

  function layout() {
    const wide = window.innerWidth > 900;
    root.position.x = wide ? 2.5 : 0;
    root.position.y = wide ? 0.2 : 1.2;
    root.scale.setScalar(wide ? 1 : 0.78);
  }
  layout();

  const pointer = { x: 0, y: 0 };
  const smooth = { x: 0, y: 0 };
  window.addEventListener("pointermove", (e) => {
    pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
    pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  let scrollY = 0;
  const clock = new THREE.Clock();
  let running = true;

  window.addEventListener("resize", () => {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    layout();
  });

  function frame() {
    if (!running) return;
    const t = clock.getElapsedTime();

    smooth.x += (pointer.x - smooth.x) * 0.045;
    smooth.y += (pointer.y - smooth.y) * 0.045;

    root.rotation.y += 0.0012;
    root.rotation.x = Math.sin(t * 0.22) * 0.12 + smooth.y * 0.22;
    root.rotation.z = smooth.x * 0.09;

    lattice.rotation.y -= 0.0022;
    core.rotation.x += 0.0034;
    core.rotation.y += 0.0042;
    shell.rotation.y += 0.0007;
    shell.rotation.z -= 0.0004;
    ringA.rotation.z += 0.0016;
    ringB.rotation.z -= 0.0011;
    particles.rotation.y = t * 0.02;

    camera.position.x = smooth.x * 0.35;
    camera.position.y = -scrollY * 0.0011 + smooth.y * 0.2;
    camera.position.z = 7.6;
    camera.lookAt(root.position.x * 0.35, root.position.y * 0.35, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      running = false;
    } else if (!running) {
      running = true;
      clock.getDelta();
      requestAnimationFrame(frame);
    }
  });

  sceneApi = { setScroll: (y) => { scrollY = y; } };
  requestAnimationFrame(frame);
}

initScene();
onScroll();
