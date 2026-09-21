import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Reusable Primary Orange Pill Button Component
 * Replaces all ad-hoc buttons across the application and cards with a 100% consistent design:
 * - Full pill shape (`rounded-full`)
 * - Primary orange gradient theme (`btn-gold-gradient`)
 * - Bold black uppercase text (`font-black tracking-wider uppercase text-black`)
 * - Right circular dark icon badge with arrow indicator (`ArrowUpRight`)
 * - Micro-interactions (hover scale, arrow displacement, glowing orange shadow)
 */
export const PrimaryButton = ({
  children,
  label,
  onClick,
  icon: Icon = ArrowUpRight,
  showIcon = true,
  variant = 'primary', // 'primary' | 'outline' | 'glass' | 'dark'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const content = children || label;

  // Size variations
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs gap-2 font-black',
    md: 'px-4.5 py-2 sm:px-5.5 sm:py-2.5 text-xs sm:text-sm gap-2 sm:gap-2.5 font-black',
    lg: 'px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-base gap-2.5 sm:gap-3 font-black',
  };

  const iconSizes = {
    sm: 'w-4.5 h-4.5 sm:w-5 sm:h-5 p-0.5',
    md: 'w-5 h-5 sm:w-6 sm:h-6 p-1',
    lg: 'w-5.5 h-5.5 sm:w-7 sm:h-7 p-1 sm:p-1.5',
  };

  const arrowSizes = {
    sm: 'w-3 h-3',
    md: 'w-3 h-3 sm:w-3.5 sm:h-3.5',
    lg: 'w-3.5 h-3.5 sm:w-4 sm:h-4',
  };

  // Variant styling options
  const variantClasses = {
    primary:
      'btn-gold-gradient text-[#0a0500] font-black shadow-[0_4px_20px_rgba(255,140,0,0.45)] hover:shadow-[0_6px_30px_rgba(255,140,0,0.7)]',
    outline:
      'bg-transparent border-2 border-[var(--primary)] text-white hover:bg-[var(--primary)] hover:text-black font-bold shadow-md',
    glass:
      'glass-pill text-white hover:bg-white/20 font-bold border border-white/20 shadow-md',
    dark:
      'bg-[#13151c] hover:bg-[#1a1d26] text-white border border-white/15 font-bold shadow-md',
  };

  const isPrimary = variant === 'primary';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group inline-flex items-center justify-center rounded-full uppercase tracking-wider transition-all duration-300 cursor-pointer select-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${
        sizeClasses[size] || sizeClasses.md
      } ${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {content && <span className="font-extrabold">{content}</span>}
      {showIcon && Icon && (
        <div
          className={`rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            isPrimary ? 'bg-black/15 text-black' : 'bg-white/15 text-current'
          } ${iconSizes[size] || iconSizes.md}`}
        >
          <Icon className={arrowSizes[size] || arrowSizes.md} />
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;
