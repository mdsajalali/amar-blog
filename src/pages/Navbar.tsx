import { useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 px-3 py-4 text-white md:p-4">
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold">
            Amar Blog
          </Link>
          <div
            className="cursor-pointer md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
          >
            {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </div>
          <ul
            id="navbar-menu"
            className={`absolute w-full bg-gray-800 transition-all duration-300 ease-in-out md:static md:flex md:w-auto md:items-center md:space-x-4 ${
              isOpen ? "-left-0 top-[60px] px-3" : "-left-0 top-[-200px] px-3"
            }`}
          >
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-[16px] font-semibold hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-[16px] font-semibold hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-[16px] font-semibold leading-tight hover:bg-gray-700"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-[16px] font-semibold hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
