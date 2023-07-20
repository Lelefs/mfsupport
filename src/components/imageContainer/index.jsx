import Image from "next/image";
import styles from "./image.module.scss";

export default function ImageContainer({ src, alt, ...props }) {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} fill className={styles.image} {...props} />
    </div>
  );
}
