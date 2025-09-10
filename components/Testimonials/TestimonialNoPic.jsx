import styles from "./Testimonial.module.css";

export default function TestimonialNoPic({
  children,
  src = "Company logo src",
  msg = "Testimonial Message",
  name = "Full Name",
  jobTitle = "Job Title",
  company = "Company Name",
}) {
  const fullTitle = [jobTitle, company].filter(Boolean).join(", ");
  return (
    <div
      className={`${styles["testimonial"]} ${styles["testimonial--no-pic"]}`}
    >
      <img
        className={styles["testimonial__icon"]}
        src={src}
        alt={`${company} Logo`}
      />
      <div className={styles["testimonial__content"]}>
        {msg && <div className={styles["testimonial__msg"]}>{msg}</div>}
        {children}
        {(name || fullTitle) && (
          <div className={styles["testimonial__info"]}>
            {name && <strong>{name}</strong>}
            {fullTitle && <span>{fullTitle}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
