const ALIGN_CLASSES = {
  center: 'text-center',
  left: 'text-left',
};

const SectionHeading = ({ children, as: Component = 'h2', align = 'center', className = '' }) => (
  <Component className={`mt-2 mb-10 text-4xl font-bold tracking-tight text-white ${ALIGN_CLASSES[align]} ${className}`}>
    {children}
  </Component>
);

export default SectionHeading;
