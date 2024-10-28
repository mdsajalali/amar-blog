import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "../shared/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white md:p-4 py-4 px-3 ">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Amar Blog</div>
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul
            className={`md:flex md:items-center md:space-x-4 absolute md:static bg-gray-800 w-full md:w-auto transition-all duration-300 ease-in-out ${
              isOpen ? "top-[60px]" : "top-[-200px]"
            }`}
          >
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
