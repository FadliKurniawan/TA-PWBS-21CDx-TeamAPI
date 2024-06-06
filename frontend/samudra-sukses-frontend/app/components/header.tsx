import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-teal-500 p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/"><a className="text-white">Home</a></Link></li>
          <li><Link href="/upload"><a className="text-white">Upload Product</a></Link></li>
          <li><Link href="/login"><a className="text-white">Login</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
