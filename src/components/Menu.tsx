import Image from "next/image";
import { courses, wedding } from "@/data/menu";

export default function Menu() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <Image
          src="/2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-cream/78 sm:bg-cream/88" />
      </div>

      <h1 className="sr-only">
        Il menù di {wedding.bride} e {wedding.groom}
      </h1>

      <nav
        aria-label="Portate"
        className="sticky top-0 z-20 border-b border-pink/40 bg-cream/90 backdrop-blur-md"
      >
        <ul className="menu-nav mx-auto grid max-w-3xl grid-cols-5 px-2 py-3 sm:flex sm:gap-1 sm:overflow-x-auto sm:px-3">
          {courses.map((course) => (
            <li key={course.id} className="min-w-0 sm:min-w-fit sm:flex-1">
              <a
                href={`#${course.id}`}
                className="block px-0.5 py-1 text-center font-serif text-[0.62rem] uppercase leading-tight tracking-[0.06em] text-sage transition-colors hover:text-charcoal sm:px-3 sm:text-sm sm:tracking-[0.16em]"
              >
                {course.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="relative z-10">
        <div className="content-reveal relative mx-auto max-w-xl px-6 pb-8 pt-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sage">
            Ricevimento
          </p>
          <p className="mt-2 font-serif text-3xl font-light text-charcoal">
            {wedding.venue}
          </p>
          <p className="mt-1 text-base italic text-charcoal/60">{wedding.place}</p>
        </div>

        {courses.map((course) => (
          <section
            key={course.id}
            id={course.id}
            aria-labelledby={`${course.id}-title`}
            className="relative scroll-mt-20 px-6 py-10"
          >
            <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto mb-8 h-px max-w-xs bg-gradient-to-r from-transparent via-pink/80 to-transparent" />
              <h2
                id={`${course.id}-title`}
                className="font-italianno text-[3.25rem] leading-none text-sage sm:text-[3.5rem]"
              >
                {course.label}
              </h2>
              <ul className="mt-8 space-y-7">
                {course.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-serif text-[1.7rem] font-medium leading-tight text-charcoal sm:text-[1.85rem]">
                      {item.name}
                    </p>
                    {item.note ? (
                      <p className="mt-1 text-lg italic leading-relaxed text-charcoal/65">
                        {item.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <div className="relative px-6 pb-16 pt-6 text-center">
          <div className="mx-auto mb-8 h-px max-w-xs bg-gradient-to-r from-transparent via-pink/80 to-transparent" />
          <p className="text-lg italic text-sage">I vini accompagnano ogni portata.</p>
          <p className="mt-8 font-script text-5xl text-sage">
            {wedding.bride} e {wedding.groom}
          </p>
        </div>
      </main>

      <footer className="relative z-10 overflow-hidden px-6 py-16 text-center">
        <Image
          src="/3.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_22%] sm:object-[center_25%]"
        />
        <div aria-hidden className="absolute inset-0 bg-black/50" />
        <div className="relative">
          <p className="font-serif text-2xl text-cream">
            {wedding.bride} & {wedding.groom}
          </p>
          <p className="mt-2 text-sm text-cream/75">{wedding.dateLabel}</p>
          <p className="mt-6 text-xs text-cream/60">A tavola, con amore</p>
        </div>
      </footer>
    </div>
  );
}
