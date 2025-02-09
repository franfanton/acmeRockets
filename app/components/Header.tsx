import { NavMocks } from "../mocks/navsMocks";
import { NavMenu } from "../types/navMenu";

const Header = () => {
  const stylesNavMobile = "hover:opacity-90";
  const stylesNavDesktop = "w-full text-center py-6 hover:opacity-90";
  const navMenu = NavMocks;
  const renderItem = (item: NavMenu, styles: string) => {
    return (
      <a key={item.id} href={item.href} className={styles}>
        {item.title}
      </a>
    );
  };
  return (
    <div className="bg-indigo-900 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero"> 🚀 Acme Rockets</a>
        </h1>
        <div>
          <button
            type="button"
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
          >
            <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            {navMenu.map((nav: NavMenu) => {
              return renderItem(nav, stylesNavMobile);
            })}
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className="absolute top-68 bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu hidden"
      >
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          {navMenu.map((nav: NavMenu) => {
            return renderItem(nav, stylesNavDesktop);
          })}
        </nav>
      </section>
    </div>
  );
};

export default Header;
