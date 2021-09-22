import companyLogo from "@assets/logo.png";
import Navbar from "@components/header/navbar";
import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="container lg:max-w-screen-lg mx-auto flex flex-col">
    <Link href="/">
      <a className="cursor-pointer flex justify-center mb-4">
        <Image src={companyLogo} alt="Company logo." placeholder="blur" />
      </a>
    </Link>
    <Navbar />
  </header>
);

export default Header;
