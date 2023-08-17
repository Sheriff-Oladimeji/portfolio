const Header = () => {
  return (
    <header
      className="pt-28 w-[90%] md:w-[60%] mx-auto"
      name="home"
    >
      <div className="flex flex-col items-center md:items-start w-full gap-4">
        <h1 className="text-4xl md:text-6xl font-semibold text-bold  tracking-widest">
          Hi, I'm Sheriff <span className="hidden md:inline">Oladimeji</span>
        </h1>
        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray md:tracking-widest">
          Frontend Developer.
        </h2> */}
        <p className="text-gray max-w-2xl text-center md:text-start">
          I'm a frontend developer passionate about crafting engaging digital
          experiences. I have skills in building accessible, user-friendly
          products. I enjoy bringing ideas to life through clean, functional
          design and code.
        </p>
        <button className="border-green border-2 rounded-md py-4 px-2 outline-none bg-transparent w-[200px] hover:bg-green active:bg-green text-bold font-bold">
          Download my resume
        </button>
      </div>
    </header>
  );
};

export default Header;
