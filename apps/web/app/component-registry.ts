import { createButtonComponent } from "@repo/ui";

export const Button = createButtonComponent({
  variants: {
    variant: {
      danger: "bg-red-600 text-white hover:bg-red-700",
      facebook: "bg-blue-800 text-white hover:bg-blue-700",
    },
    size: {
      xl: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});
