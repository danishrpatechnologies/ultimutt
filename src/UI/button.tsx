import React from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "whatsapp"
  | "direction";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles =
  "flex items-center gap-2 px-[18px] justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
  secondary: "bg-[#1f1f1f] text-white hover:bg-[#000] focus:ring-gray-400",
  outline:
    "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-400",
  ghost: "text-gray-900 hover:bg-gray-100 focus:ring-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  whatsapp: "bg-[#34c759] text-white hover:bg-[#128C7E] focus:ring-[#25D366]",
  direction:
    "bg-[#f2e999] text-gray-900 hover:bg-[#fff06d] focus:ring-[#fff06d]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-[45px] text-[14px]",
  md: "h-[49px] text-[15px]",
  lg: "h-[49px] text-[15px]",
};

const Button = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
};

export default Button;
