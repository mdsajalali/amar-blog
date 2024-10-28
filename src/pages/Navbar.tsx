import { useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white md:p-4 py-4 px-3">
      <Container>
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold ">
            Amar Blog
          </Link>
          <div
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
          >
            {isOpen ? <CgClose size={20} /> : <MenuIcon size={20}/>}
          </div>
          <ul
            id="navbar-menu"
            className={`md:flex md:items-center md:space-x-4 absolute md:static bg-gray-800 w-full md:w-auto transition-all duration-300 ease-in-out ${
              isOpen ? "top-[60px] -left-0 px-3" : "top-[-200px] -left-0 px-3"
            }`}
          >
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-[16px] font-semibold  hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-[16px] font-semibold  hover:bg-gray-700"
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
                className="block text-[16px] font-semibold  px-4 py-2 hover:bg-gray-700"
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
