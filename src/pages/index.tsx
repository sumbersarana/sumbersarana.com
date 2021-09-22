import LandingImage from "@assets/index.png";
import { COMPANY_DESCRIPTION, COMPANY_NAME } from "@src/constants";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";

const Home: NextPage = () => (
  <>
    <NextSeo
      title={`Beranda | ${COMPANY_NAME}`}
      description={COMPANY_DESCRIPTION}
    />
    <div className="flex mb-4 justify-center">
      <Image
        src={LandingImage}
        alt="SSPE engineers at work."
        placeholder="blur"
      />
    </div>
    <p className="mb-4 text-justify">{`Selamat datang ke ${COMPANY_NAME}.`}</p>
    <p className="text-justify">
      Kami adalah perusahaan yang bergerak dalam bidang jasa elektrikal,
      mekanikal, dan konstruksi yang berlokasi di Medan, Sumatera Utara,
      Indonesia.
    </p>
  </>
);

export default Home;
