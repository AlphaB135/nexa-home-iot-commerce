import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseStyles = "px-4 py-2 rounded-xl font-bold transition-all text-xs focus:outline-none";
    const variantStyles = variant === 'primary' 
      ? "bg-blue-600 hover:bg-blue-500 text-white" 
      : "bg-slate-200 hover:bg-slate-300 text-slate-800";
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${className || ''}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
