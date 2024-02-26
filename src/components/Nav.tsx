import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className="navbar bg-base-100">
        <div
          aria-label="logo"
          className="flex-1 ps-2 font-bold text-primary text-2xl tracking-wider"
        >
          Swapi
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-bold text-accent tracking-wide" href="/">
                Films
              </Link>
            </li>
            <li>
              <Link
                className="font-bold text-accent tracking-wide"
                href="/characters"
              >
                Characters
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
