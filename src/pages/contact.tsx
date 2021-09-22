import ContactImage from "@assets/contact.png";
import ContactForm from "@components/contact/form";
import type { NextPage } from "next";
import Image from "next/image";

const Contact: NextPage = () => (
  <>
    <div className="flex mb-4 justify-center">
      <Image src={ContactImage} alt="SSPE office staff." placeholder="blur" />
    </div>
    <ContactForm />
  </>
);
export default Contact;
