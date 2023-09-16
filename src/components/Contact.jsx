import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
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
      <p className="text-center">
        I'm currently looking for new opportunities. I'm Open to junior
        developer roles and freelancing gigs.
      </p>

      <a
        href="mailto:dimejiademola5@gmail.com"
        className="button py-4 px-4 flex items-center gap-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Send An Email <HiOutlineMail size={30} />
      </a>
      <div className="flex items-center gap-6">
        {sidelinks.map((link) => (
          <a
            key={link.id}
            href={link.id === 3 ? "mailto:" + link.url : link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={` flex   gap-4 items-center p-3 rounded-md ${
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
    </div>
  );
};

export default Contact;
