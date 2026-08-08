import './styles.css';
import couplePhoto from './assets/couple.png';
import lavenderFrame from './assets/Lavender frame.png';
import lavenderField from './assets/Lavender field.png';
import lavenderFieldFaded from './assets/faded lavender field.png';
import mangalyamDecoration from './assets/mangalyam.png';
import galleryPhoto1 from './assets/gallery/photo-1.svg';
import galleryPhoto2 from './assets/gallery/photo-2.svg';
import galleryPhoto3 from './assets/gallery/photo-3.svg';
import galleryPhoto4 from './assets/gallery/photo-4.svg';
import musicFile from './assets/Sita Kalyanam Lyric Video - Solo Dulquer Salmaan, Neha Sharma, Bejoy Nambiar Trend Music - TrendMusic (128k).mp3';

const wedding = {
  couple: { bride: 'Aswathy', groom: 'Adith' },
  date: '02 October 2027',
  time: '5:30 PM',
  venue: 'TK Auditorium',
  location: 'Meppayur, Kerala',
  headline: 'Counting Down to Forever',
  ceremonySubtitle: 'The Union of Two Souls',
  ceremonyTitle: 'A Blessed Nikkah Ceremony',
  invitationText:
    'With immense joy and the deepest gratitude to Allah (SWT), we invite you to join us in celebrating the sacred union of our beloved children.',
  journeyEyebrow: 'Our Journey',
  journeyTitle: 'A Story Written by Allah',
  footerVerse: 'And He placed between you affection and mercy.',
  footerText: 'A story written in prayer, patience, and love.',
  rsvpTitle: 'Contact & RSVP',
  phone: '+91 80781 71887',
  whatsapp: '+918078171887',
  email: 'info@example.com',
};

const storyItems = [
  {
    id: 'beginning',
    tag: 'The Beginning',
    title: 'Two Families, One Dua',
    description:
      'What Allah has decreed shall always come to pass. Two families, bound by faith and love, came together in prayer.',
    image: lavenderFieldFaded,
  },
  {
    id: 'promise',
    tag: 'The Promise',
    title: 'Istikhara & Acceptance',
    description: "Guided by Allah's wisdom, both hearts found peace and acceptance in this blessed union.",
    image: couplePhoto,
  },
  {
    id: 'wedding',
    tag: '2 October 2027',
    title: 'The Sacred Nikkah',
    description:
      'With the words of Allah as their bond and their families as witnesses, Aswathy and Adith begin their forever.',
    image: couplePhoto,
  },
];

const events = [
  {
    title: 'Nikkah Ceremony',
    date: 'Sunday, 2 October 2027',
    time: '5:30 PM',
    venue: 'TK Auditorium',
    location: 'Meppayur, Kerala',
    description: 'Please join us for the blessed Nikkah ceremony with prayers and family celebration.',
    mapUrl: 'https://maps.google.com?q=TK+Auditorium+Meppayur',
  },
];

const galleryItems = [
  { label: 'PHOTO 1', src: galleryPhoto1 },
  { label: 'PHOTO 2', src: galleryPhoto2 },
  { label: 'PHOTO 3', src: galleryPhoto3 },
  { label: 'PHOTO 4', src: galleryPhoto4 },
];

const countdownLabels = ['Days', 'Hours', 'Minutes', 'Seconds'];
const countdownTarget = new Date('2027-10-02T17:30:00').getTime();
const invitationStateKey = 'wedding:invitation-opened';

function countdownMarkup() {
  return countdownLabels
    .map(
      (label) => `
        <div class="countdown-card reveal-target" data-reveal style="--stagger: 0ms">
          <div class="countdown-number" data-countdown="${label}">00</div>
          <div class="countdown-label">${label}</div>
        </div>
      `,
    )
    .join('');
}

function galleryMarkup() {
  return `
    <div class="gallery-grid">
      <button class="gallery-slot gallery-slot-featured gallery-trigger reveal-target" type="button" data-gallery-open data-gallery-src="${galleryItems[0].src}" data-gallery-alt="${galleryItems[0].label}" data-reveal style="--stagger: 0ms">
        <img src="${galleryItems[0].src}" alt="${galleryItems[0].label}" class="gallery-image" loading="lazy" />
      </button>
      <div class="gallery-row">
        <button class="gallery-slot gallery-slot-small gallery-trigger reveal-target" type="button" data-gallery-open data-gallery-src="${galleryItems[1].src}" data-gallery-alt="${galleryItems[1].label}" data-reveal style="--stagger: 120ms">
          <img src="${galleryItems[1].src}" alt="${galleryItems[1].label}" class="gallery-image" loading="lazy" />
        </button>
        <button class="gallery-slot gallery-slot-small gallery-trigger reveal-target" type="button" data-gallery-open data-gallery-src="${galleryItems[2].src}" data-gallery-alt="${galleryItems[2].label}" data-reveal style="--stagger: 240ms">
          <img src="${galleryItems[2].src}" alt="${galleryItems[2].label}" class="gallery-image" loading="lazy" />
        </button>
      </div>
      <button class="gallery-slot gallery-slot-featured gallery-trigger reveal-target" type="button" data-gallery-open data-gallery-src="${galleryItems[3].src}" data-gallery-alt="${galleryItems[3].label}" data-reveal style="--stagger: 360ms">
        <img src="${galleryItems[3].src}" alt="${galleryItems[3].label}" class="gallery-image" loading="lazy" />
      </button>
    </div>
  `;
}

function storyMarkup() {
  return storyItems
    .map((item, index) => {
      const media =
        item.id === 'wedding'
          ? `
            <img src="${mangalyamDecoration}" alt="Ceremonial emblem" class="story-emblem" />
            <img src="${item.image}" alt="${item.title}" class="story-image" loading="lazy" />
          `
          : '';

      return `
        <li class="story-card ${item.id === 'wedding' ? 'story-card-highlight' : ''} reveal-target" data-reveal style="--stagger: ${index * 120}ms">
          <p class="section-eyebrow">${item.tag}</p>
          <h3 class="story-title">${item.title}</h3>
          <p class="story-copy">${item.description}</p>
          ${media}
        </li>
      `;
    })
    .join('');
}

function eventsMarkup() {
  return events
    .map(
      (event) => `
        <article class="venue-card reveal-target" data-reveal style="--stagger: 0ms">
          <div class="venue-card-block">
            <p class="section-eyebrow">${event.title}</p>
            <h3 class="venue-title">${event.venue}</h3>
          </div>
          <div class="venue-grid">
            <div>
              <p class="mini-label">Date</p>
              <p class="venue-text">${event.date}</p>
            </div>
            <div>
              <p class="mini-label">Time</p>
              <p class="venue-text">${event.time}</p>
            </div>
          </div>
          <div>
            <p class="mini-label">Location</p>
            <p class="venue-text">${event.location}</p>
          </div>
          <a class="map-button" href="${event.mapUrl}" target="_blank" rel="noreferrer">Open in Google Maps</a>
        </article>
      `,
    )
    .join('');
}

const splashMarkup = `
  <section id="splash" class="splash-poster">
    <div class="splash-sky" aria-hidden="true"></div>
    <div class="splash-haze" aria-hidden="true"></div>
    <img src="${lavenderField}" alt="" class="splash-field" aria-hidden="true" />
    <img src="${lavenderFrame}" alt="" class="splash-frame" aria-hidden="true" />
    <div class="floral-decoration" aria-hidden="true">
      <span class="petal petal-1" style="--rotate: 15deg; --drift: 2vw; --petal-duration: 11s;"></span>
      <span class="petal petal-2" style="--rotate: -12deg; --drift: -3vw; --petal-duration: 13s;"></span>
      <span class="petal petal-3" style="--rotate: 22deg; --drift: 3vw; --petal-duration: 9.5s;"></span>
      <span class="petal petal-4" style="--rotate: -28deg; --drift: -2vw; --petal-duration: 12s;"></span>
      <span class="petal petal-5" style="--rotate: 8deg; --drift: 4vw; --petal-duration: 10.5s;"></span>
      <span class="petal petal-6" style="--rotate: -15deg; --drift: -4vw; --petal-duration: 14s;"></span>
      <span class="petal petal-7" style="--rotate: 32deg; --drift: 2.5vw; --petal-duration: 8.5s;"></span>
      <span class="petal petal-8" style="--rotate: -6deg; --drift: -2.5vw; --petal-duration: 12.5s;"></span>
      <span class="petal petal-9" style="--rotate: 10deg; --drift: 1.5vw; --petal-duration: 13.5s;"></span>
    </div>
    <section class="splash-stage">
      <div class="splash-copy">
        <img src="${mangalyamDecoration}" alt="Wedding emblem" class="splash-emblem hero-load-in" style="--delay: 0ms" />
        <p class="splash-eyebrow hero-load-in" style="--delay: 150ms">Nikkah Invitation</p>
        <h1 class="splash-title hero-load-in" style="--delay: 300ms">${wedding.couple.bride} <span class="text-secondary">&amp;</span> ${wedding.couple.groom}</h1>
        <p class="splash-subtitle hero-load-in" style="--delay: 450ms">Are Getting Married</p>
        <p class="splash-date hero-load-in" style="--delay: 600ms">${wedding.date}</p>
        <p class="splash-location hero-load-in" style="--delay: 750ms">${wedding.venue} &middot; ${wedding.location}</p>
        <button class="splash-open-button hero-load-in pulse-button" type="button" data-open style="--delay: 900ms">Tap to open invitation</button>
      </div>
      <div class="splash-couple-layer">
        <div class="splash-couple-wrap">
          <img
            src="${couplePhoto}"
            alt="Portrait of ${wedding.couple.bride} and ${wedding.couple.groom}"
            class="splash-couple"
            loading="eager"
          />
        </div>
      </div>
    </section>
  </section>
`;

const invitationMarkup = `
  <section id="invitation" class="invitation-shell" hidden>
    <main class="invitation-main">
      <section class="welcome-strip reveal-section" data-reveal>
        <div class="welcome-strip-inner">
          <div class="welcome-emblem">
            <img src="${mangalyamDecoration}" alt="" aria-hidden="true" />
          </div>
          <p class="welcome-eyebrow">Nikkah Invitation</p>
          <h2 class="welcome-title">${wedding.couple.bride} <span class="text-secondary">&amp;</span> ${wedding.couple.groom}</h2>
          <p class="welcome-subtitle">Welcome back</p>
          <p class="welcome-meta">${wedding.date} · ${wedding.venue} · ${wedding.location}</p>
        </div>
      </section>

      <section class="section-panel warm reveal-section" data-reveal>
        <div class="section-inner section-stack">
          <header class="section-heading">
            <p class="section-eyebrow">The Big Day</p>
            <h2 class="section-title">${wedding.headline}</h2>
            <div class="ornament" aria-hidden="true">
              <span class="gold-rule"></span>
              <span class="ornament-mark">✿</span>
              <span class="gold-rule"></span>
            </div>
          </header>
          <div class="countdown-panel">
            <div class="countdown-grid">${countdownMarkup()}</div>
          </div>
          <p class="section-note">${wedding.date} • ${wedding.time} • ${wedding.venue}, ${wedding.location}</p>
        </div>
      </section>

      <section class="section-panel soft-lavender reveal-section" data-reveal>
        <div class="section-inner section-stack text-center">
          <header class="section-heading">
            <p class="section-eyebrow">${wedding.ceremonySubtitle}</p>
            <h2 class="section-title">${wedding.ceremonyTitle}</h2>
            <div class="ornament" aria-hidden="true">
              <span class="gold-rule"></span>
              <span class="ornament-mark">✿</span>
              <span class="gold-rule"></span>
            </div>
          </header>
          <div class="section-card invitation-card reveal-target" data-reveal style="--stagger: 0ms">
            <p class="verse-text">And He created for you mates from yourselves so that you may find tranquility in them.</p>
            <div class="ornament" aria-hidden="true">
              <span class="gold-rule"></span>
              <span class="ornament-mark">✿</span>
              <span class="gold-rule"></span>
            </div>
            <p class="invitation-copy">${wedding.invitationText}</p>
            <footer class="section-footnote">Surah Ar-Rum 30:21</footer>
          </div>
        </div>
      </section>

      <section class="transition-section reveal-section" data-reveal style="background-image: url('${lavenderFieldFaded}')">
        <div class="transition-card reveal-target" data-reveal style="--stagger: 0ms">
          <p class="section-eyebrow">A Lavender Moment</p>
          <h3 class="transition-title">A gentle transition into celebration</h3>
          <p class="transition-copy">
            Our story unfolds in petals and prayer, with every detail arranged in grace and gratitude. May this union shine in the softest lavender light.
          </p>
        </div>
      </section>

      <section class="section-panel warm reveal-section" data-reveal>
        <div class="section-inner section-stack text-center">
          <header class="section-heading">
            <p class="section-eyebrow">The Blessed Couple</p>
            <h2 class="section-title">Bride &amp; Groom</h2>
            <div class="ornament" aria-hidden="true">
              <span class="gold-rule"></span>
              <span class="ornament-mark">✿</span>
              <span class="gold-rule"></span>
            </div>
          </header>
          <div class="bridegroom-portrait reveal-target" data-reveal style="--stagger: 0ms">
            <img src="${couplePhoto}" alt="Portrait of ${wedding.couple.bride} and ${wedding.couple.groom}" class="couple-portrait" loading="lazy" />
          </div>
          <p class="story-name">${wedding.couple.bride} <span class="text-accent">&amp;</span> ${wedding.couple.groom}</p>
          <div class="family-grid">
            <div class="info-panel text-left reveal-target" data-reveal style="--stagger: 120ms">
              <p class="section-eyebrow">Bride's Family</p>
              <h3 class="family-name">${wedding.couple.bride}</h3>
              <p class="mini-label">Daughter of</p>
              <p class="family-text">Mr. Suresh</p>
              <p class="family-and">&amp;</p>
              <p class="family-text">Mrs. Anisha</p>
            </div>
            <div class="info-panel text-left reveal-target" data-reveal style="--stagger: 240ms">
              <p class="section-eyebrow">Groom's Family</p>
              <h3 class="family-name">${wedding.couple.groom}</h3>
              <p class="mini-label">Son of</p>
              <p class="family-text">Mr. Suresh</p>
              <p class="family-and">&amp;</p>
              <p class="family-text">Mrs. Anisha</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-panel soft-lavender reveal-section" data-reveal>
        <div class="section-inner section-stack text-center">
          <header class="section-heading">
            <p class="section-eyebrow">Mark Your Calendar</p>
            <h2 class="section-title">Wedding Celebrations</h2>
            <div class="ornament" aria-hidden="true">
              <span class="gold-rule"></span>
              <span class="ornament-mark">✿</span>
              <span class="gold-rule"></span>
            </div>
          </header>
          ${eventsMarkup()}
        </div>
      </section>

      <section class="section-panel warm gallery-section reveal-section" data-reveal>
        <div class="section-inner section-stack">
          <div class="section-heading">
            <p class="section-eyebrow">Gallery</p>
            <h2 class="section-title gallery-title">Moments &amp; Memories</h2>
            <div class="gallery-heading-divider" aria-hidden="true"></div>
          </div>
          ${galleryMarkup()}
        </div>
      </section>

      <section class="section-panel warm reveal-section" data-reveal>
        <div class="section-inner section-stack text-center">
          <header class="section-heading">
            <p class="section-eyebrow">${wedding.rsvpTitle}</p>
            <h2 class="section-title">RSVP</h2>
            <div class="ornament" aria-hidden="true">
              <span class="gold-rule"></span>
              <span class="ornament-mark">✿</span>
              <span class="gold-rule"></span>
            </div>
          </header>
          <div class="rsvp-card text-left reveal-target" data-reveal style="--stagger: 0ms">
            <p class="rsvp-intro">Please contact us for RSVP and help with directions.</p>
            <div class="rsvp-grid">
              <div>
                <p class="mini-label">Phone</p>
                <a class="rsvp-link" href="tel:${wedding.phone}">${wedding.phone}</a>
              </div>
              <div>
                <p class="mini-label">WhatsApp</p>
                <a class="rsvp-link" href="https://wa.me/${wedding.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noreferrer">${wedding.whatsapp}</a>
              </div>
              <div>
                <p class="mini-label">Email</p>
                <a class="rsvp-link" href="mailto:${wedding.email}">${wedding.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-panel soft-lavender reveal-section" data-reveal>
        <div class="section-inner section-stack">
          <header class="section-heading text-center">
            <p class="section-eyebrow">${wedding.journeyEyebrow}</p>
            <h2 class="section-title">${wedding.journeyTitle}</h2>
            <div class="ornament" aria-hidden="true">
              <span class="gold-rule"></span>
              <span class="ornament-mark">✿</span>
              <span class="gold-rule"></span>
            </div>
          </header>
          <ol class="story-list">
            ${storyMarkup()}
          </ol>
        </div>
      </section>

      <footer class="final-lavender reveal-section" data-reveal style="background-image: url('${lavenderField}')">
        <div class="final-overlay" aria-hidden="true"></div>
        <div class="section-inner section-stack text-center">
          <img src="${mangalyamDecoration}" alt="Decorative wedding emblem" class="final-decorative" />
          <div class="final-panel section-card reveal-target" data-reveal style="--stagger: 0ms">
            <p class="verse-text">${wedding.footerVerse}</p>
            <p class="final-copy">${wedding.footerText}</p>
            <p class="section-footnote">And so the invitation becomes a memory.</p>
          </div>
        </div>
      </footer>
    </main>
  </section>
`;

const root = document.getElementById('root');
if (!root) {
  throw new Error('Missing root element');
}

document.title = 'Aswathy & Adith | Wedding Invitation';

const description = 'Join us for the blessed wedding of Aswathy and Adith on 2 October 2027 at TK Auditorium, Meppayur.';
let descriptionMeta = document.querySelector('meta[name="description"]');
if (!descriptionMeta) {
  descriptionMeta = document.createElement('meta');
  descriptionMeta.setAttribute('name', 'description');
  document.head.appendChild(descriptionMeta);
}
descriptionMeta.setAttribute('content', description);

root.innerHTML = `
  <div class="app-shell">
    ${splashMarkup}
    ${invitationMarkup}
  </div>
`;

const splash = document.getElementById('splash');
const invitation = document.getElementById('invitation');
const openButton = document.querySelector('[data-open]');
const audio = new Audio(musicFile);
audio.loop = true;
audio.preload = 'auto';

const musicButton = document.createElement('button');
musicButton.type = 'button';
musicButton.className = 'music-fab';
musicButton.setAttribute('aria-label', 'Play music');
musicButton.dataset.playing = 'false';
musicButton.innerHTML = `
  <span class="music-ring" aria-hidden="true"></span>
  <span class="music-icon-stack">
    <svg class="music-icon music-icon-note" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M9 4v11.2a3.6 3.6 0 1 0 2 3.2V9.5l8-1.9V4L9 6.3V4z"></path>
    </svg>
    <span class="music-bars" aria-hidden="true">
      <span class="music-bar"></span>
      <span class="music-bar"></span>
      <span class="music-bar"></span>
    </span>
  </span>
`;
document.body.appendChild(musicButton);

const toast = document.createElement('div');
toast.className = 'music-toast';
toast.hidden = true;
toast.innerHTML = `
  <div class="music-toast-title">Music load error</div>
  <div class="music-toast-body" data-music-toast></div>
`;
document.body.appendChild(toast);

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.hidden = true;
lightbox.innerHTML = `
  <button type="button" class="lightbox-backdrop" data-lightbox-close aria-label="Close image preview"></button>
  <figure class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image preview">
    <img class="lightbox-image" alt="" />
    <figcaption class="lightbox-caption"></figcaption>
    <button type="button" class="lightbox-close" data-lightbox-close aria-label="Close image preview">×</button>
  </figure>
`;
document.body.appendChild(lightbox);

function setMusicPlaying(isPlaying) {
  musicButton.dataset.playing = String(isPlaying);
  musicButton.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
}

function showMusicError(message) {
  const body = toast.querySelector('[data-music-toast]');
  if (body) {
    body.textContent = message;
  }
  toast.hidden = false;
}

function setInvitationActive(isActive) {
  document.body.classList.toggle('is-invitation-active', isActive);
  document.documentElement.classList.toggle('is-invitation-active', isActive);
}

function updateCountdown() {
  const remaining = Math.max(0, countdownTarget - Date.now());
  const values = {
    Days: Math.floor(remaining / 86400000),
    Hours: Math.floor((remaining / 3600000) % 24),
    Minutes: Math.floor((remaining / 60000) % 60),
    Seconds: Math.floor((remaining / 1000) % 60),
  };

  for (const [label, value] of Object.entries(values)) {
    const node = document.querySelector(`[data-countdown="${label}"]`);
    if (!node) continue;
    const next = String(value).padStart(2, '0');
    if (node.textContent !== next) {
      node.textContent = next;
      if (label === 'Seconds') {
        node.classList.remove('countdown-number-pulse');
        void node.offsetWidth;
        node.classList.add('countdown-number-pulse');
      }
    }
  }
}

async function playMusic() {
  try {
    await audio.play();
    setMusicPlaying(true);
    localStorage.setItem('wedding:music:playing', '1');
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Playback was blocked or the audio file is unavailable.';
    showMusicError(message);
  }
}

function pauseMusic() {
  audio.pause();
  setMusicPlaying(false);
  localStorage.setItem('wedding:music:playing', '0');
}

function openInvitation() {
  if (!splash || !invitation) return;
  splash.classList.add('is-leaving');
  void playMusic();
  window.setTimeout(() => {
    splash.hidden = true;
    invitation.hidden = false;
    invitation.classList.add('is-visible');
    sessionStorage.setItem(invitationStateKey, '1');
    setInvitationActive(true);
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
  }, 550);
}

function showLightbox(src, alt) {
  const image = lightbox.querySelector('.lightbox-image');
  const caption = lightbox.querySelector('.lightbox-caption');
  if (!(image instanceof HTMLImageElement) || !(caption instanceof HTMLElement)) return;
  image.src = src;
  image.alt = alt;
  caption.textContent = alt;
  lightbox.hidden = false;
  window.requestAnimationFrame(() => {
    lightbox.classList.add('is-open');
  });
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  window.setTimeout(() => {
    lightbox.hidden = true;
  }, 180);
}

openButton?.addEventListener('click', openInvitation);

musicButton.addEventListener('click', () => {
  if (audio.paused) {
    void playMusic();
  } else {
    pauseMusic();
  }
});

window.addEventListener('wedding:play-music', () => {
  void playMusic();
});

audio.addEventListener('error', () => {
  showMusicError(`Failed to load ${musicFile}`);
});

document.addEventListener('click', (event) => {
  const target = event.target instanceof HTMLElement ? event.target.closest('[data-gallery-open]') : null;
  if (!target) return;
  const src = target.getAttribute('data-gallery-src') || '';
  const alt = target.getAttribute('data-gallery-alt') || 'Gallery image';
  if (src) showLightbox(src, alt);
});

lightbox.addEventListener('click', (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && target.matches('[data-lightbox-close]')) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) {
    closeLightbox();
  }
});

const revealTargets = [...document.querySelectorAll('[data-reveal]')];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const invitationAlreadyOpened = sessionStorage.getItem(invitationStateKey) === '1';

if (invitationAlreadyOpened && splash && invitation) {
  splash.hidden = true;
  invitation.hidden = false;
  invitation.classList.add('is-visible');
  setInvitationActive(true);
  document.body.style.overflow = '';
} else {
  setInvitationActive(false);
  document.body.style.overflow = 'hidden';
}

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        target.classList.add('is-revealed');
        if (target.classList.contains('reveal-section')) {
          target.querySelectorAll('.reveal-target').forEach((child) => {
            if (child instanceof HTMLElement) {
              child.classList.add('is-revealed');
            }
          });
        }
        obs.unobserve(target);
      });
    },
    { threshold: 0.18 },
  );
  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('is-revealed'));
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
