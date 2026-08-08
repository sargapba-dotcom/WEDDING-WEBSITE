import { createRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Countdown } from '@/components/invitation/Countdown';
import { Ornament, SectionHeading } from '@/components/invitation/Ornament';
import heroBg from '@/assets/hero-bg.jpg';
import couple from '@/assets/couple.png';

const TITLE = 'Thamanna & Muhammed Afeef · Nikkah Invitation';
const DESC =
  'Join us for the blessed Nikkah of Thamanna and Muhammed Afeef on 8 August 2026, 5:30 PM at Miami Convention Centre, Andikkod.';

const story = [
  {
    tag: 'The Beginning',
    title: 'Two Families, One Dua',
    body: 'What Allah has decreed shall always come to pass. Two families, bound by faith and love, came together in prayer.',
  },
  {
    tag: 'The Promise',
    title: 'Istikhara & Acceptance',
    body: 'Guided by Allah\'s wisdom, both hearts found peace and acceptance in this blessed union.',
  },
  {
    tag: '8 August 2026',
    title: 'The Sacred Nikkah',
    body: 'With the words of Allah as their bond and their families as witnesses, Thamanna and Muhammed Afeef begin their forever.',
  },
];

export const Route = createRoute({
  getParentRoute: () => import('./__root').then((mod) => mod.rootRoute),
  path: '/',
  component: Invitation,
  meta: () => ({
    title: TITLE,
    description: DESC,
  }),
});

function Invitation() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />

      {!open && (
        <section className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
            aria-hidden="true"
          />
          <div className="veil absolute inset-0" aria-hidden="true" />
          <div className="relative animate-fade-up">
            <p className="text-arabic text-gold text-2xl sm:text-3xl">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            <Ornament label="✦" />
            <p className="text-[0.65rem] tracking-[0.45em] text-primary-foreground/80 uppercase">
              Nikkah Invitation
            </p>
            <h1 className="text-script mt-4 text-4xl leading-tight text-primary-foreground sm:text-6xl">
              Thamanna &amp; Muhammed Afeef
            </h1>
            <p className="mt-5 text-sm tracking-[0.4em] text-primary-foreground/80">08 · 08 · 2026</p>
            <button
              onClick={() => setOpen(true)}
              className="animate-float mt-12 rounded-full border border-gold/70 px-8 py-3 text-[0.65rem] tracking-[0.35em] text-primary-foreground uppercase transition-colors hover:bg-gold/20"
            >
              Tap to open invitation
            </button>
          </div>
        </section>
      )}

      <div className="relative z-10">
        <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
          <div className="veil absolute inset-0" aria-hidden="true" />
          <div className="relative py-24">
            <Ornament label="✦ ✦ ✦" />
            <p className="text-arabic text-gold text-xl sm:text-2xl">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            <h2 className="text-script mt-8 text-4xl text-primary-foreground sm:text-7xl">
              Thamanna <span className="text-gold">&amp;</span> Muhammed Afeef
            </h2>
            <p className="mt-6 text-[0.7rem] tracking-[0.4em] text-primary-foreground/80 uppercase">
              are getting married
            </p>
            <p className="mt-6 text-2xl font-light tracking-[0.3em] text-primary-foreground">
              08 · 08 · 2026
            </p>
            <p className="mt-4 text-sm text-primary-foreground/75">
              Miami Convention Centre · Andikkod
            </p>
          </div>
        </section>

        <section className="bg-background/85 px-6 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="The Big Day" title="Counting Down to Forever" />
            <Countdown />
            <p className="mt-8 text-center text-sm text-muted-foreground">
              8th August 2026 • 5:30 PM • Miami Convention Centre, Andikkod
            </p>
          </div>
        </section>

        <section className="bg-secondary/70 px-6 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading eyebrow="The Union of Two Souls" title="A Blessed Nikkah Ceremony" />
            <blockquote className="card-soft rounded-2xl px-6 py-10">
              <p className="text-arabic text-xl leading-loose text-primary sm:text-2xl">
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
              </p>
              <Ornament />
              <p className="text-lg font-light text-foreground italic">
                "And of His signs is that He created for you from yourselves mates that you may find tranquility in them."
              </p>
              <footer className="mt-4 text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Surah Ar-Rum 30:21
              </footer>
            </blockquote>
            <p className="mt-10 text-base leading-relaxed text-muted-foreground">
              With immense joy and the deepest gratitude to Allah (SWT), we invite you to join us in celebrating the sacred union of our beloved children.
            </p>
          </div>
        </section>

        <section className="bg-background/85 px-6 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl">
            <SectionHeading eyebrow="The Blessed Couple" title="Bride & Groom" />
            <img
              src={couple}
              alt="Illustration of Thamanna and Muhammed Afeef"
              loading="lazy"
              width={1024}
              height={1280}
              className="mx-auto w-64 sm:w-80"
            />
            <p className="text-script mt-4 text-center text-3xl text-primary">
              Thamanna &amp; Muhammed Afeef
            </p>
            <Ornament />
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  side: "Bride's Family",
                  name: 'Thamanna',
                  rel: 'Daughter of',
                  parents: ['Mr. Eroth Abdu Salam', 'Mrs. Bushra Abdu Salam'],
                },
                {
                  side: "Groom's Family",
                  name: 'Muhammed Afeef',
                  rel: 'Son of',
                  parents: ['Mr. Ahammed Kambayathil', 'Mrs. Muneera'],
                },
              ].map((p) => (
                <div key={p.name} className="card-soft rounded-2xl px-6 py-8 text-center">
                  <p className="text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase">
                    {p.side}
                  </p>
                  <h3 className="text-script mt-3 text-3xl text-primary">{p.name}</h3>
                  <p className="mt-4 text-xs tracking-[0.25em] text-muted-foreground uppercase">
                    {p.rel}
                  </p>
                  <p className="mt-2 text-lg text-foreground">{p.parents[0]}</p>
                  <p className="text-gold text-sm">&amp;</p>
                  <p className="text-lg text-foreground">{p.parents[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/70 px-6 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-2xl">
            <SectionHeading eyebrow="Mark Your Calendar" title="Wedding Celebrations" />
            <div className="card-soft rounded-2xl px-6 py-10 text-center">
              <p className="text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase">
                Sacred Ceremony
              </p>
              <h3 className="mt-2 text-3xl font-light text-primary">Nikkah</h3>
              <Ornament />
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Date</dt>
                  <dd className="mt-1 text-lg text-foreground">Saturday, 8 August 2026</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Time</dt>
                  <dd className="mt-1 text-lg text-foreground">5:30 PM</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Venue</dt>
                  <dd className="mt-1 text-lg text-foreground">Miami Convention Centre, Andikkod</dd>
                </div>
              </dl>
              <a
                href="https://maps.google.com?q=Miami+Convention+Centre+Andikkod"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-[0.65rem] tracking-[0.3em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        <section className="bg-background/85 px-6 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Our Journey" title="A Story Written by Allah" />
            <ol className="space-y-6">
              {story.map((s) => (
                <li key={s.title} className="card-soft rounded-2xl px-6 py-8">
                  <p className="text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase">
                    {s.tag}
                  </p>
                  <h3 className="mt-2 text-2xl font-light text-primary">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <footer className="veil px-6 py-16 text-center">
          <p className="text-arabic text-gold text-lg">وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>
          <p className="mt-4 text-sm text-primary-foreground/85 italic">
            "And He placed between you affection and mercy."
          </p>
          <p className="mt-2 text-xs tracking-[0.3em] text-primary-foreground/60 uppercase">
            Surah Ar-Rum, 30:21
          </p>
        </footer>
      </div>
    </main>
  );
}
