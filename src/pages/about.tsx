import AboutImage from "@assets/about.png";
import { COMPANY_NAME } from "@src/constants";
import type { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => (
  <>
    <div className="flex mb-4 justify-center">
      <Image
        src={AboutImage}
        alt="SSPE engineers at work."
        placeholder="blur"
      />
    </div>
    <p className="mb-4 text-justify">{`${COMPANY_NAME} didirikan di Kawasan Industri Medan I pada tahun 2009. Kami bergerak di bidang jasa konstruksi elektrikal, mekanikal, produksi panel, dan pengadaan barang elektrikal.`}</p>
    <p className="text-justify">
      Didukung oleh faktor sumber daya manusia (SDM) yang berpengalaman,
      fasilitas, dan dedikasi kami untuk mengantarkan yang terbaik kepada klien,
      kami telah menjadi rekanan tetap berbagai organisasi, baik perusahaan
      swasta maupun pemerintah (BUMN). Untuk mendapat hasil yang memuaskan, kami
      selalu melibatkan klien kami dalam setiap proses pengerjaan; seperti dalam
      pemilihan material, penentuan jenis (merek) barang yang dipakai, dan
      desain panel untuk menghasilkan satu kesatuan sistem yang efektif.
    </p>
  </>
);

export default About;
