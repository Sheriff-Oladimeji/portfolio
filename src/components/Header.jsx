import resume from "../assets/Sheriff-Resume.pdf";
const Header = () => {
  return (
    <header className="container" name="home">
      <div className="flex flex-col h-full pt-24 w-full  gap-6">
        <span className="text-green text-lg font-semibold">Hi, my name is</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-bold  tracking-widest ">
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
            href={resume}
            download={true}
            className="border-green border-2 rounded-md py-4 px-2 outline-none  w-[200px]  bg-transparent hover:shadow-[5px_5px_0px_0px_#4DCCB9] active:shadow-[5px_5px_0px_0px_#4DCCB9] text-bold font-bold text-center tracking-widest"
          >
            View my resume
          </a>
          
          
        </div>
      </div>
    </header>
  );
};

export default Header;
