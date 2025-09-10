import styles from "./Button.module.css";

export default function Button({
  children,
  className,
  size,
  variant,
  ...rest
}) {
  let sizeClass = size && styles[`button-${size}`];
  let variantClass = variant && styles[`button-${variant}`];
  const allClasses = [styles.button, sizeClass, variantClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
