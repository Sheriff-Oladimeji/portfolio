import resume from "../assets/Sheriff-Resume.pdf";
const Header = () => {
  return (
    <header className="container" name="home">
      <div className="flex flex-col h-full pt-20 w-full  gap-6">
        <span className="text-green text-lg font-semibold">Hi, my name is</span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl  font-semibold text-bold  tracking-widest ">
          Sheriff Oladimeji
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray  tracking-wider ">
          I'm a Frontend Developer
        </h2>

        <p className="text-gray max-w-md md:max-w-3xl  text-lg ">
          A passionate frontend developer dedicated to crafting captivating
          digital experiences, I love the thrill of bringing ideas to life
          through clean, functional design and code.
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://drive.google.com/file/d/1-uRe8asCDWo-3tI5ptk_g5IOUPp0F2pj/view?usp=sharing"
            download={true}
            className="button py-4 px-4"
            target="_blank"
            rel="noreferrer"
          >
            View my resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
