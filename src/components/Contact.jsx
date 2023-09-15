
const Contact = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center container">
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-bold ">
        Contact Me
      </h1>
      <p>
        I'm currently looking for new opportunities. I'm Open to junior
        developer roles and freelancing gigs.
      </p>

      <a
        href="mailto:dimejiademola5@gmail.com"
        className="button py-4 px-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Send An Email
      </a>
    </div>
  );
}

export default Contact
