import Image, { StaticImageData } from "next/image";
import styles from "@/styles/CardRounded.module.css";

export default function CardRounded({
  width = 60,
  height = 60,
  src,
  label,
  onClick,
}: {
  src: StaticImageData;
  width?: number;
  height?: number;
  label: string;
  onClick: () => void;
}) {
  return (
    <div
      className={`d-flex ${styles.card}`}
      style={{ borderRadius: "8px", backgroundColor: "rgb(241, 241, 243)" }}
      onClick={onClick}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={label}
        style={{ borderRadius: "50%", border: "2px solid rgb(241, 241, 243)" }}
        className="m-1 p-1"
      />
      <div
        className="ms-2 d-flex flex-column justify-content-center"
        style={{ color: "rgb(115, 117, 140)" }}
      >
        {label}
      </div>
    </div>
  );
}
