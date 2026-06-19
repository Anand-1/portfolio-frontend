import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg">
      <ul className="flex justify-center gap-8 px-6 py-4">
        <li>
          <Link 
            href="/" 
            className="relative text-white font-semibold text-lg transition-all duration-300 hover:text-blue-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className="relative text-white font-semibold text-lg transition-all duration-300 hover:text-blue-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="/gallery" 
            className="relative text-white font-semibold text-lg transition-all duration-300 hover:text-blue-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className="relative text-white font-semibold text-lg transition-all duration-300 hover:text-blue-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}   
