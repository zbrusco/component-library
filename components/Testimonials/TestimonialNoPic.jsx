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
    <div className="testimonial testimonial--no-pic">
      <img className="testimonial__icon" src={src} alt={`${company} Logo`} />
      <div className="testimonial__content">
        {msg && <div className="testimonial__msg">{msg}</div>}
        {children}
        {(name || fullTitle) && (
          <div className="testimonial__info">
            {name && <strong>{name}</strong>}
            {fullTitle && <span>{fullTitle}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
