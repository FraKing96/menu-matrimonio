import Image from "next/image";
import { courses, wedding } from "@/data/menu";

function Rule() {
  return (
    <div className="mx-auto mb-8 flex max-w-[14rem] items-center gap-3" aria-hidden>
      <span className="h-px flex-1 bg-sage/35" />
      <svg viewBox="0 0 24 24" className="h-3 w-3 fill-sage-soft">
        <path d="M12 1.2 14.1 9.2 22.2 12 14.1 14.8 12 22.8 9.9 14.8 1.8 12 9.9 9.2 12 1.2Z" />
      </svg>
      <span className="h-px flex-1 bg-sage/35" />
    </div>
  );
}

export default function Menu() {
  return (
    <div className="bg-cream">
      <h1 className="sr-only">
        Il menù di {wedding.bride} e {wedding.groom}
      </h1>

      <nav
        aria-label="Portate"
        className="sticky top-0 z-20 border-b border-sage/20 bg-cream/95 backdrop-blur-md"
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

      <main>
        <div className="content-reveal mx-auto max-w-xl px-6 pb-8 pt-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sage">Ricevimento</p>
          <p className="mt-2 font-serif text-3xl font-light text-charcoal">
            {wedding.venue}
          </p>
          <p className="mt-1 text-base italic text-sage-soft">{wedding.place}</p>
        </div>

        {courses.map((course) => (
          <section
            key={course.id}
            id={course.id}
            aria-labelledby={`${course.id}-title`}
            className="scroll-mt-20 px-6 py-10"
          >
            <div className="mx-auto max-w-xl text-center">
              <Rule />
              <h2
                id={`${course.id}-title`}
                className="font-italianno text-[3.25rem] leading-none text-charcoal sm:text-[3.5rem]"
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
                      <p className="mt-1 text-lg italic leading-relaxed text-sage">
                        {item.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <div className="px-6 pb-16 pt-6 text-center">
          <Rule />
          <p className="text-lg italic text-sage">I vini accompagnano ogni portata.</p>
          <p className="mt-8 font-italianno text-5xl text-charcoal">
            {wedding.bride} e {wedding.groom}
          </p>
        </div>
      </main>

      <footer className="bg-cream px-6 pb-16 text-center">
        <div className="mx-auto max-w-md">
          <Image
            src="/illustration.jpg"
            alt="Illustrazione del ricevimento: Nicole e Francesco ballano sotto le luci, con il cane e la tavola imbandita. 20 maggio 2027."
            width={1024}
            height={1024}
            className="h-auto w-full"
          />
        </div>
      </footer>
    </div>
  );
}
