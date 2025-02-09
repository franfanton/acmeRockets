import Image from "next/image";
import { RocketMocks } from "../mocks/rocketsMocks";
import { Rocket } from "../types/rocket";

const Rockets = () => {
  const renderCardRocket = (entry: Rocket) => {
    return (
      <li
        key={entry.id}
        className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
      >
        <Image
          src={entry.image}
          alt={entry.title}
          className="w-1/2 mb-6"
          height={300}
          width={500}
          priority
        />
        <h3 className="text-3xl text-center text-slate-900 dark:text-white">
          {entry.title}
        </h3>
        <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
          {entry.description}
        </p>
        <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
          {entry.subtitle}
        </p>
      </li>
    );
  };
  const rockets = RocketMocks;

  return (
    <section
      id="rockets"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height talescreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Our Rockets
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center sm:justify-center gap-8">
        {rockets.map((rocket: Rocket) => {
          return renderCardRocket(rocket);
        })}
      </ul>
    </section>
  );
};

export default Rockets;
