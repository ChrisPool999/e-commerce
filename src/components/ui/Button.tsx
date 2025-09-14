import React from 'react';

interface IButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const variantClasses = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-300 text-black hover:bg-gray-400',
  danger: 'bg-yellow-500 text-black hover:bg-yellow-600',
}

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
}: IButtonProps ) {
  const classes = `${variantClasses[variant]} ${sizeClasses[size]} rounded transition-colors cursor-pointer`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};