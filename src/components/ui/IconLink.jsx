const SIZE_CLASSES = {
  md: 'text-xl',
  lg: 'text-2xl',
};

const IconLink = ({ href, icon: Icon, label, size = 'md', external = true, className = '' }) => (
  <a
    href={href}
    aria-label={label}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={`text-white/80 hover:text-accent-light transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black ${SIZE_CLASSES[size]} ${className}`}
  >
    <Icon aria-hidden="true" />
  </a>
);

export default IconLink;
