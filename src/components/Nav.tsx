import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="flex-1">Swapi</div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Films</Link>
            </li>
            <li>
              <Link href="/characters">Characters</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
