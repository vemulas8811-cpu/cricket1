const Section = ({ children, className = "" }) => {
  return <section className={`space-y-8 ${className}`}>{children}</section>;
};

export default Section;
