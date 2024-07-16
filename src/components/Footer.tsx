

function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-center text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4 text-center">
            Our company empowers individuals to achieve their financial goals. We provide accessible financial tools and resources, fostering a community of financially empowered individuals.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-white text-lg text-center font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-center duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-white text-lg text-center font-semibold mb-4">Follow Us</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-center duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-white text-lg font-semibold mb-4 text-center">Contact Us</h2>
            <p>New Delhi, India</p>
            <p>Delhi 010101</p>
            <p>Email: info@finance.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Finance Ltd. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer