import React from "react";

export function Button({ children, className = "", variant, size, ...props }) {
  const base = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variantClass = variant === "outline" ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground" : "";
  const sizeClass = size === "lg" ? "h-11 px-8" : "h-10 px-4 py-2";
  return (
    <button className={`${base} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
