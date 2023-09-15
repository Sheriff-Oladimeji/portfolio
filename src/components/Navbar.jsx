import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  {
    id: 1,
    name: "Home",
    url: "home",
  },
  {
    id: 2,
    name: "About",
    url: "about",
  },
  {
    id: 3,
    name: "Projects",
    url: "projects",
  },
  {
    id: 4,
    name: "Contact",
    url: "contact",
  },
];

const sidelinks = [
  {
    id: 1,
    name: "Github",
    icon: <FaGithub size={30} />,
    url: "https://github.com/Sheriff-Oladimeji",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: <FaLinkedin size={30} />,
    url: "https://www.linkedin.com/in/sheriff-oladimeji-022362255/",
  },
  {
    id: 3,
    name: "Email",
    icon: <HiOutlineMail size={30} />,
    url: "dimejiademola5@gmail.com",
  },
];
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingUp(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;

      
      setAtTop(currentScrollPos === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full h-[80px] py-6 bg-darkBg ${
        isScrollingUp && !atTop ? "fixed top-0 left-0 z-50 shadow-xl" : ""
      }`}
    >
      <div className="w-[80%] mx-auto hidden md:flex justify-between   items-center">
        <h3 className="text-xl font-bold  text-green ">Sheriff.dev</h3>

        <div className="flex gap-12 text-lg items-center">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              className=" hover:text-green text-light cursor-pointer"
              smooth={true}
              duration={500}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {/* mobile nav */}
      <div className="md:hidden ">
        <div className="flex w-[90%] mx-auto  justify-between items-center">
          <h3 className="text-xl font-bold  text-green ">Sheriff.dev</h3>

          <button
            onClick={handleNav}
            className="border-none z-50 font-bold outline-none text-2xl text-bold "
          >
            {nav ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
        <div
          className={
            nav
              ? "md:hidden w-full h-screen bg-darkBg top-0 left-0 fixed z-10 duration-500 px-8 py-8"
              : "md:hidden w-0 h-screen bg-white top-0 left-[-100%] fixed z-10 duration-500"
          }
        >
          <div className="flex flex-col h-full justify-center gap-12 items-center ">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                onClick={handleNav}
                className="text-2xl  tracking-widest font-bold hover:text-green text-light cursor-pointer"
                smooth={true}
                duration={500}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col fixed top-[35%] left-0">
        {sidelinks.map((link) => (
          <a
            key={link.id}
            href={link.id === 3 ? "mailto:" + link.url : link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[160px] flex h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 p-6  ${
              link.id === 1
                ? "bg-black"
                : link.id === 2
                ? "bg-blue-600"
                : "bg-red-700"
            }`}
          >
            {link.name} {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
