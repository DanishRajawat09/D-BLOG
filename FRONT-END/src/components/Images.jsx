import { Image } from "@imagekit/react";
const Images = ({ src, classname, alt, w, h }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      className={classname}
      width={w}
      height={h}
    />
  );
};

export default Images;
