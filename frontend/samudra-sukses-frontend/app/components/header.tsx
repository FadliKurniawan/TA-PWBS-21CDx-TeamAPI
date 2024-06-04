import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/upload"><a>Upload Product</a></Link></li>
          <li><Link href="/login"><a>Login</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
