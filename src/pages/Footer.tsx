import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "../shared/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0 max-w-[300px]">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">
              Welcome to our blog! We share insights, stories, and tips to
              enrich your life. Join us on our journey!
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl hover:text-blue-700">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Amar Blog. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
