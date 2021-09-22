import ContactImage from "@assets/contact.png";
import ContactForm from "@components/contact/form";
import { COMPANY_DESCRIPTION, COMPANY_NAME } from "@src/constants";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";

const Contact: NextPage = () => (
  <>
    <NextSeo
      title={`Hubungi Kami | ${COMPANY_NAME}`}
      description={COMPANY_DESCRIPTION}
    />
    <div className="flex mb-4 justify-center">
      <Image src={ContactImage} alt="SSPE office staff." placeholder="blur" />
    </div>
    <ContactForm />
  </>
);
export default Contact;
