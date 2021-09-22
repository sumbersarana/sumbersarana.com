import GalleryImage from "@assets/gallery.png";
import GalleryGrid from "@components/gallery/grid";
import { KwImages, PeImages, PpImages } from "@components/gallery/images";
import type { NextPage } from "next";
import Image from "next/image";

const imageGroups = {
  "Kantor & Workshop": KwImages,
  "Pembuatan Panel & Pemasangan": PeImages,
  "Pekerjaan Elektrikal": PpImages,
};

const Gallery: NextPage = () => (
  <>
    <div className="flex mb-4 justify-center">
      <Image src={GalleryImage} alt="Steel beams." placeholder="blur" />
    </div>
    {Object.entries(imageGroups).map(([title, images]) => (
      <GalleryGrid key={title} title={title} images={images} />
    ))}
  </>
);

export default Gallery;
