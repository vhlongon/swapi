import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <Link href="/">Films</Link>
      <Link href="/characters">Characters</Link>
    </nav>
  );
};

export default Nav;
