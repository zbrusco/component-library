import { FaCloudArrowUp } from "react-icons/fa6";

export default function Card({
  children,
  title = "",
  msg = "",
  icon = <FaCloudArrowUp />,
  className = "",
}) {
  return (
    <div className={`card ${className}`}>
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        {title && <div className="card-title">{title}</div>}
        {msg && <div className="card-msg">{msg}</div>}
        {children}
      </div>
    </div>
  );
}
