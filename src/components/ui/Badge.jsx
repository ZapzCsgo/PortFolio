const Badge = ({ children, className = '' }) => (
  <span className={`rounded-md bg-surface-raised px-3 py-1 text-xs text-gray-300 ${className}`}>
    {children}
  </span>
);

export default Badge;
