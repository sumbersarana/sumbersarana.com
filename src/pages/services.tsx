import ServicesImage from "@assets/services.png";
import type { NextPage } from "next";
import Image from "next/image";

const Services: NextPage = () => (
  <>
    <div className="flex mb-4 justify-center">
      <Image src={ServicesImage} alt="Finished products." placeholder="blur" />
    </div>
    <p className="mb-4 text-justify">
      Kami melayani permintaan pekerjaan dari menyuplai peralatan dan
      perlengkapan elektrikal, pembuatan panel, instalasi listrik sampai
      pengadaan dan pemasangan peralatan elektrikal untuk Pabrik Kelapa Sawit
      (PKS) sepenuhnya.
    </p>
    <p className="mb-4 text-justify">
      Kami juga berpengalaman dalam bekerja sama dengan perusahaan-perusahaan
      dari berbagai sektor industri yang berbeda. Dari penyediaan dan pemasangan
      panel listrik untuk bangunan pusat perbelanjaan, komplek perumahan dan
      gedung umum lainnya sampai instalasi listrik untuk industri biodiesel.
      Untuk pekerjaan elektrikal Pabrik Kelapa Sawit (PKS), kami dapat
      menawarkan jasa dari desain rangkaian, pembuatan panel, penyediaan cable
      tray dan conduit, pengadaan listrik pabrik dan kantor, grounding,
      pekerjaan overhead line, sampai pemasangan penangkal petir.
    </p>
    <p className="text-justify">
      Kami bertekad untuk terus mengembangkan layanan kami dengan tujuan agar
      klien mendapatkan hasil terbaik sesuai dengan yang diinginkan.
    </p>
  </>
);

export default Services;
