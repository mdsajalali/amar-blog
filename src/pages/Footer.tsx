import Container from "../shared/Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <Container>
        <div className="flex flex-col items-start justify-between md:flex-row">
          <div className="mb-6 max-w-[300px] md:mb-0">
            <h3 className="mb-2 text-lg font-bold">About Us</h3>
            <p className="text-sm">
              Welcome to our blog! We share insights, stories, and tips to
              enrich your life. Join us on our journey!
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-2 text-lg font-bold">Quick Links</h3>
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
            <h3 className="mb-2 text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-blue-500">
                <Facebook />
              </a>
              <a href="#" className="text-xl hover:text-blue-400">
                <Twitter />
              </a>
              <a href="#" className="text-xl hover:text-pink-500">
                <Instagram />
              </a>
              <a href="#" className="text-xl hover:text-blue-700">
                <Linkedin />
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
