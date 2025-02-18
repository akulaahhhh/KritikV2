import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link href="/" className="text-white text-lg hover:text-gray-300">Home</Link>
        <Link href="/Scrapper" className="text-white text-lg hover:text-gray-300">Scrapper</Link>
      </div>
    </nav>
  );
};

export default Navbar;
