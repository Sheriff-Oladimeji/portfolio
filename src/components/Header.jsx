import resume from "../assets/Sheriff-Resume.pdf";
const Header = () => {
  return (
    <header className="container mb-36 md:mb-0" name="home">
      <div className="flex flex-col h-full pt-12 md:pt-24 w-full  gap-8">
        <span className="text-green text-lg font-semibold">Hi, my name is</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-bold  tracking-widest ">
          Sheriff Oladimeji
        </h1>

        <p className="text-gray max-w-lg md:max-w-3xl  text-lg ">
          I'm a frontend developer passionate about crafting engaging digital
          experiences. I have skills in building accessible, user-friendly
          products. I enjoy bringing ideas to life through clean, functional
          design and code.
        </p>
        <a
          href={resume}
          download={true}
          className="border-green border-2 rounded-md py-4 px-2 outline-none hover:bg-transparent w-[200px] bg-green active:bg-transparent hover:shadow-xl text-bold font-bold text-center tracking-wider"
        >
          View my resume
        </a>
      </div>
    </header>
  );
};

export default Header;
