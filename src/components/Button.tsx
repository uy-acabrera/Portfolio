interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`btn ${variant === 'secondary' ? 'btn-secondary' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};