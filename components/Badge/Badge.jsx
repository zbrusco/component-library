import styles from "./Badge.module.css";

export default function Badge({
  children,
  color = "gray",
  type = "square",
  className = "",
}) {
  const colorClass = color && styles[`badge-${color}`];
  const typeClass = type && styles[`badge-${type}`];
  const allClasses = [styles["badge"], colorClass, typeClass, className]
    .filter(Boolean)
    .join(" ");

  return <div className={allClasses}>{children}</div>;
}
