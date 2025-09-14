export const baseButtonClass =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

export const defaultStyles = {
  variants: {
    variant: {
      primary: "bg-brand-500 text-white hover:bg-brand-dark",
      secondary: "bg-red-200 text-gray-900 hover:bg-gray-300",
      ghost: "bg-transparent hover:bg-gray-100 text-gray-900",
    },
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
} as const;
