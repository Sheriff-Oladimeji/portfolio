import { Link } from "react-scroll";
import { useState , useEffect} from "react";
import { FiMenu} from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
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

      // Update the atTop state based on the currentScrollPos
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

        <div className="flex gap-10 items-center">
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
    </nav>
  );
}

export default Navbar