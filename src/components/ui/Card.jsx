const PADDING = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
};

const SURFACE = {
  50: 'bg-surface/50',
  60: 'bg-surface/60',
  70: 'bg-surface/70',
  raised: 'bg-surface-raised',
};

const Card = ({ children, padding = 'md', surface = '50', hoverable = false, className = '', ...rest }) => {
  const hoverClasses = hoverable
    ? 'transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5'
    : '';

  return (
    <div
      className={`rounded-lg backdrop-blur-sm ${SURFACE[surface]} ${PADDING[padding]} ${hoverClasses} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
