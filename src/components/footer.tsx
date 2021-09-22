import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COMPANY_NAME, EMAIL_ADDRESS } from "@src/constants";

const Footer = () => (
  <footer className="container lg:max-w-screen-lg mx-auto mt-auto border-t border-primary pt-2">
    <div className="text-sm text-center text-primary">
      <p className="font-bold">{COMPANY_NAME}</p>
      <p>
        Jln. P. Sangir Talaud I No. 8, Kawasan Industri Modern IV, Deli Serdang,
        Indonesia 20374
      </p>
      <p>
        <FontAwesomeIcon icon={faMobileAlt} />: +62-812-6444-8132 |{" "}
        <FontAwesomeIcon icon={faWhatsapp} />: +62-812-6444-8131
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />:{" "}
        <a
          className="underline hover:text-black"
          href={`mailto:${EMAIL_ADDRESS}`}
        >
          {EMAIL_ADDRESS}
        </a>
      </p>
      <p className="pt-4">
        <FontAwesomeIcon icon={faCopyright} /> 2009-{new Date().getFullYear()}{" "}
        {COMPANY_NAME}
      </p>
    </div>
  </footer>
);

export default Footer;
