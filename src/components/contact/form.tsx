import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

const encodeObject = (data: { [key: string]: string }) =>
  Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeObject({
        "form-name": form.getAttribute("name") || "",
        ...formState,
      }),
    });
    setFormState({ name: "", email: "", message: "" });
    alert("Pesan telah dikirim!");
  };

  return (
    <form
      className="flex flex-col"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleFormSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="font-bold mb-2" htmlFor="name">
        Nama
      </label>
      <input
        className="mb-4 rounded focus:ring-1 focus:ring-secondary"
        type="text"
        name="name"
        id="name"
        value={formState.name}
        onChange={handleInputChange}
        required
      />
      <label className="font-bold mb-2" htmlFor="email">
        E-mail
      </label>
      <input
        className="mb-4 rounded"
        type="email"
        name="email"
        id="email"
        value={formState.email}
        onChange={handleInputChange}
        required
      />
      <label className="font-bold mb-2" htmlFor="message">
        Pesan
      </label>
      <textarea
        className="rounded h-48"
        name="message"
        id="message"
        value={formState.message}
        onChange={handleInputChange}
        required
      ></textarea>
      <div data-netlify-recaptcha="true"></div>
      <button
        className="bg-primary mt-4 py-2 px-3 rounded text-white focus:ring-1 focus:ring-secondary"
        type="submit"
      >
        <FontAwesomeIcon size="sm" icon={faPaperPlane} /> Kirim
      </button>
    </form>
  );
};
export default ContactForm;
