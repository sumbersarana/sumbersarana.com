import Image from "next/image";

type GalleryGridProps = {
  title: string;
  images: { [alt: string]: StaticImageData };
};

type GridItemProps = {
  alt: string;
  image: StaticImageData;
};

const GridItem = ({ alt, image }: GridItemProps) => (
  <div className="">
    <Image src={image} alt={alt} placeholder="blur" />
  </div>
);

const GalleryGrid = ({ title, images }: GalleryGridProps) => (
  <div className="mb-4">
    <h2 className="text-primary font-bold border-b mb-4">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {Object.entries(images).map(([alt, image]) => (
        <GridItem key={alt} image={image} alt={alt} />
      ))}
    </div>
  </div>
);

export default GalleryGrid;
