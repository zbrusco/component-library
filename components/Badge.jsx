export default function Badge({
  children,
  color = "gray",
  type = "square",
  className = "",
}) {
  const colorClass = color && `badge-${color}`;
  const typeClass = type && `badge-${type}`;
  const allClasses = ["badge", colorClass, typeClass, className]
    .filter(Boolean)
    .join(" ");

  return <div className={allClasses}>{children}</div>;
}
