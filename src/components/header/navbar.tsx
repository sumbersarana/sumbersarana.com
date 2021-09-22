import { NAMES_TO_HREF } from "@src/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";

type HamburgerProps = {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
};

const Hamburger = ({ isClicked, setIsClicked }: HamburgerProps) => (
  <div className="flex justify-end">
    <div
      className={`rounded p-3 md:hidden ${
        isClicked ? "bg-secondary" : "bg-primary"
      }`}
    >
      <button
        onClick={() => setIsClicked(!isClicked)}
        className={`tham tham-e-squeeze tham-w-6 w-6 h-6 hover:opacity-100 ${
          isClicked ? "tham-active" : ""
        }`}
      >
        <div className="tham-box">
          <div className="bg-white tham-inner"></div>
        </div>
      </button>
    </div>
  </div>
);

const NavItem = ({
  name,
  href,
  mobile,
}: {
  name: string;
  href: string;
  mobile?: boolean;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();
  const isHoveringOrCurrent = isHovering || router.asPath === href;

  return (
    <Link href={href} passHref>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={` cursor-pointer flex-none p-4 ${
          isHoveringOrCurrent ? "border-b border-primary text-primary" : ""
        } ${mobile ? "text-justify" : "text-center"}`}
      >
        <a>{name.toLowerCase()}</a>
      </div>
    </Link>
  );
};

const DesktopNavbar = () => (
  <nav className="hidden md:flex flex-row justify-center">
    {Object.entries(NAMES_TO_HREF).map(([name, href]) => (
      <NavItem key={name} href={href} name={name} />
    ))}
  </nav>
);

const MobileNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Hamburger isClicked={isClicked} setIsClicked={setIsClicked} />
      <nav className={`shadow-md ${isClicked ? "" : "hidden"} md:hidden`}>
        {Object.entries(NAMES_TO_HREF).map(([name, href]) => (
          <NavItem key={name} href={href} name={name} mobile />
        ))}
      </nav>
    </>
  );
};

const Navbar = () => (
  <>
    <DesktopNavbar />
    <MobileNavbar />
  </>
);

export default Navbar;
