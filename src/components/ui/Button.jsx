const VARIANT_CLASSES = {
  solid: 'bg-accent hover:bg-accent-dark text-white',
  outline: 'border-2 border-accent bg-transparent text-accent hover:bg-accent/10',
  neutral: 'bg-surface-raised hover:bg-surface-hover text-white',
};

const SIZE_CLASSES = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({
  as: Component = 'button',
  variant = 'solid',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  ...rest
}) => {
  const base = 'group inline-flex items-center justify-center gap-2 font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  const iconEl = Icon ? (
    <Icon
      aria-hidden="true"
      className="transform transition-transform duration-300 group-hover:translate-x-1"
    />
  ) : null;

  return (
    <Component
      className={`${base} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...rest}
    >
      {iconPosition === 'left' && iconEl}
      {children}
      {iconPosition === 'right' && iconEl}
    </Component>
  );
};

export default Button;
