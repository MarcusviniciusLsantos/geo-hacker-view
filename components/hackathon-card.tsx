import styles from "@/styles/card.module.css";

interface HackathonProps {
  name: string;
  cardImageFile: {
    url: string;
  };
  logoImageFile: {
    url: string;
  };
  currentStep: {
    name: string;
  };
  shortDescription: string;
  industries: { id: string; title: string }[];
  prize: number;
  prizeCurrency: string;
}

export default function HackathonCard({
  name,
  cardImageFile,
  logoImageFile,
  currentStep,
  shortDescription,
  industries,
  prize,
  prizeCurrency,
}: HackathonProps) {
  return (
    <div className="mb-4" style={{ minHeight: '596px'}}>
      <div className={`${styles.card}`}>
        <div className={`${styles.cardImg}`}>
          <img src={cardImageFile.url} alt={name} className={styles.Img} />
          <div className={styles.textImg}>{currentStep?.name}</div>
        </div>
      </div>
      <div className={styles.cardText}>
        <div className={styles.cardAvatar}>
          <div className={styles.imgAvatar}>
            <img src={logoImageFile?.url} alt={name} width={70} height={70}/>
          </div>
        </div>
        <div className={styles.realText}>
          <h3>{name}</h3>
          <div style={{ overflow: "hidden" }}>
            <span className={styles.span}>{shortDescription}</span>
          </div>
          <div className={styles.tag}>
            {industries.map((item, key) => (
              <span key={key} className={`${styles.tagStyle}`}>
                {item?.title}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.divAmount}>
          <div className={styles.amount}>
            <span>{prize}</span>
            <span className={styles.symbol}>
              {prizeCurrency === "EURO" ? "$" : "$"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
