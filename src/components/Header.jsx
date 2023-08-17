import resume from "../assets/Sheriff-Resume.pdf";
const Header = () => {
  return (
    <header className="pt-10 md:pt-16 w-[90%] md:w-[80%] mx-auto" name="home">
      <div className="flex flex-col  sm:items-start w-full gap-6">
        <span className="text-green text-lg font-semibold">Hi, my name is</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-bold  tracking-widest ">
          Sheriff Oladimeji
        </h1>

        <p className="text-gray max-w-2xl  text-lg ">
          I'm a frontend developer passionate about crafting engaging digital
          experiences. I have skills in building accessible, user-friendly
          products. I enjoy bringing ideas to life through clean, functional
          design and code.
        </p>
        <a
          href={resume}
          download={true}
          className="border-green border-2 rounded-md py-4 px-2 outline-none bg-transparent w-[200px] hover:bg-green active:bg-green text-bold font-bold text-center tracking-wider"
        >
          View my resume
        </a>
      </div>
    </header>
  );
};

export default Header;
