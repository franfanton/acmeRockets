const ContactUs = () => {
  return (
    <section
      id="contact"
      className="p-6 my-12 scroll-mt-16 widescreen:section-min-height talescreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Contact Us
      </h2>
      <form
        action=""
        className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
      >
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          minLength={3}
          maxLength={60}
          placeholder="Your Subject"
          className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          required
          className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
        ></textarea>
        <button className="bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
