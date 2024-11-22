import Link from 'next/link';

const Navbar = () => (
  <header className="bg-white shadow-lg sticky top-0 w-full z-10">
    <div className="container mx-auto flex justify-between items-center p-6">
      {/* Logo Section */}
      <div>
        <h1 className="text-4xl text-[#000000]  font-bold font-serif cursor-pointer hover:text-[#3f3d35c0]">
          BLOG
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 md:pr-9 ">
        <Link href="/" className="text-black md:text-2xl text-xl font-semibold hover:text-gray-500 transition-colors duration-300">
          Home
        </Link>
        <Link href="/contact" className="text-black md:text-2xl  text-xl font-semibold hover:text-gray-500 transition-colors duration-300">
          About
        </Link>
        <Link href="/blog" className="text-black md:text-2xl  text-xl font-semibold hover:text-gray-500 transition-colors duration-300">
          Blogs
        </Link>
        <Link href="/contact" className="text-black md:text-2xl  text-xl font-semibold hover:text-gray-500 transition-colors duration-300">
          Contact
        </Link>
      </div>
    </div>
  </header>
);

export default Navbar;