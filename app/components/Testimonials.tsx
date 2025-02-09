const testimonials = [
  {
    quote:
      "Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.",
    author: "Wile E. Coyote, Genius",
  },
  {
    quote:
      "The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several occasions. This makes me very, very angry! Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's quality and sturdy designs.",
    author: "Marvin The Martian & K-9",
  },
  {
    quote:
      "I knew I not only wanted — I needed — Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Nothing says 'Take me to your leader' like Acme's Infinity Rocket! 💯",
    author: "Buzz Lightyear",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height talescreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Testimonials
      </h2>

      {testimonials.map(({ quote, author }, index) => (
        <figure key={index} className="my-12">
          <blockquote className="bg-teal-600 dark:bg-black p-12 rounded-3xl">
            <p className="text-2xl sm:text-3xl text-left text-white dark:text-slate-400">
              {quote}
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
            &#8212; {author}
          </figcaption>
        </figure>
      ))}
    </section>
  );
};

export default Testimonials;
