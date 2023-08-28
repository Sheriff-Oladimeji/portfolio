import { useState } from "react";

const Contact = () => {
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;

    const message = e.target.elements.message.value;
    if (!name || !email || !message) {
      return setError(!error);
    } else {
      const formData = new FormData(e.target);

      fetch("https://getform.io/f/1a8ba222-368b-4600-9082-94979eef791a", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setShowModal(true);
          }
        })
        .catch((error) => console.log(error));

     
    }
  };

  return (
    <section
      className="container flex flex-col max-w-[600px] items-center "
      name="contact"
    >
      <div className="flex-1 w-full flex flex-col gap-6">
        <h3 className="font-semibold text-xl text-green">CONTACT</h3>
        <h1 className="font-bold text-3xl md:text-4xl text-bold">
          Got a problem to solve?
        </h1>
        <p>
          Submit the form below or shoot me an email -
          dimejiademola5@gmail.com.com
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        method="post"
        acceptCharset="UTF-8"
        className="flex-1 w-full flex flex-col gap-6"
      >
        <input
          type="text"
          className="p-3 w-full border border-gray bg-[#161A2C] "
          name="name"
          placeholder="Name"
        />
        {error && <span className="text-red-600">Name cannot be empty</span>}

        <input
          type="email"
          name="email"
          className="p-3 w-full border border-gray bg-[#161A2C] active:hover:outline-none"
          placeholder="Email"
        />
        {error && (
          <span className="text-red-600">
            Please fill in your email address
          </span>
        )}

        <textarea
          name="message"
          placeholder="Message"
          className="py-4 px-3 border border-gray bg-[#161A2C] w-full outline-none active:hover:outline-none"
        ></textarea>
        {error && <span className="text-red-600">Please type a message</span>}

        <button
          type="submit"
          className="bg-white border border-white outline-none  hover:bg-transparent hover:text-bold text-black p-3 text-xl tracking-widest"
        >
          Send Message
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 b ">
          <div className="bg-white shadow-xl text-black flex  gap-12 items-center justify-between p-6 rounded-md">
            <h2 className="text-xl font-bold mb-2">
              Message sent successfully!
            </h2>
            <button className="font-bold" onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
