import { FaQuoteLeft } from "react-icons/fa6";
import styles from "./Testimonial.module.css";

export default function Testimonial({
  children,
  src = "Picture src",
  msg = "Testimonial Message",
  name = "Full Name",
  jobTitle = "Job Title",
  company = "Company Name",
}) {
  const fullTitle = [jobTitle, company].filter(Boolean).join(", ");

  return (
    <>
      <div className={styles["testimonial"]}>
        <div className={styles["testimonial__img"]}>
          <img
            className={styles["testimonial__img-photo"]}
            src={src}
            alt={`Photo of ${name}`}
          />
        </div>
        <div className={styles["testimonial__content"]}>
          <FaQuoteLeft className={styles["testimonial__quote"]} />
          {msg && <div className={styles["testimonial__msg"]}>{msg}</div>}
          {(name || fullTitle) && (
            <div className={styles["testimonial__info"]}>
              {name && <strong>{name}</strong>}
              {fullTitle && <span>{fullTitle}</span>}
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
