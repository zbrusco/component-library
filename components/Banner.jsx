import {
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleXmark,
  FaCircleInfo,
} from "react-icons/fa6";

export default function Banner({
  children,
  status = "neutral",
  title = "",
  msg = "",
  className = "",
}) {
  const statusClass = status && `banner-${status}`;
  const allClasses = ["banner", statusClass, className]
    .filter(Boolean)
    .join(" ");

  const badgeIcons = {
    success: <FaCircleCheck />,
    warning: <FaTriangleExclamation />,
    error: <FaCircleXmark />,
    neutral: <FaCircleInfo />,
  };

  return (
    <div className={allClasses}>
      <div>{badgeIcons[status]}</div>
      <div className="banner-content">
        {title && <div className="banner-title">{title}</div>}
        {msg && <div className="banner-msg">{msg}</div>}
        {children}
      </div>
    </div>
  );
}
