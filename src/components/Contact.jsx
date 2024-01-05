import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const sidelinks = [
  {
    id: 1,
    name: "Github",
    icon: <FaGithub size={40} />,
    url: "https://github.com/Sheriff-Oladimeji",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: <FaLinkedin size={40} />,
    url: "https://www.linkedin.com/in/sheriff-oladimeji-022362255/",
  },
];
const Contact = () => {
  return (
    <div
      className="flex flex-col gap-6 items-center justify-center container"
      name="contact"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-bold ">
        Contact Me
      </h1>
      <p className="text-center text-gray text-xl">Got a project we could work on together?</p>

      <div className="flex items-center gap-6 mt-6 flex-wrap">
        <a
          href="mailto:dimejiademola5@gmail.com"
          className={`h-20 w-20  rounded-full  outline-none font-medium flex  items-center justify-center text-[#5ADFCB] py-1 px-2 bg-[#122B39] text-sm `}
        >
          <HiOutlineMail size={40} />
        </a>
        {sidelinks.map((link) => (
          <a
            key={link.id}
            href={link.id === 3 ? "mailto:" + link.url : link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`h-20 w-20  rounded-full  outline-none font-medium flex  items-center justify-center text-[#5ADFCB] py-1 px-2 bg-[#122B39] text-sm `}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
