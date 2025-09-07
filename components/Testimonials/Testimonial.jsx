import { FaQuoteLeft } from "react-icons/fa6";

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
      <div className="testimonial">
        <div className="testimonial__img">
          <img
            className="testimonial__img-photo"
            src={src}
            alt={`Photo of ${name}`}
          />
        </div>
        <div className="testimonial__content">
          <FaQuoteLeft className="testimonial__quote" />
          {msg && <div className="testimonial__msg">{msg}</div>}
          {(name || fullTitle) && (
            <div className="testimonial__info">
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
