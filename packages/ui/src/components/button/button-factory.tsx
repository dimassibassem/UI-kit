import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn, FactoryConfig, mergeLiteral } from "../../utils";
import { baseButtonClass, defaultStyles } from "./button-style";
import { ClassValue } from "class-variance-authority/types";

// ---------------- Factory ----------------
export function createButtonComponent<
  TExtraVariant extends Record<string, string>,
  TExtraSize extends Record<string, string>,
>(config?: FactoryConfig<TExtraVariant, TExtraSize>) {
  // Merge base + extra variants
  const mergedVariants = mergeLiteral(
    defaultStyles.variants.variant,
    config?.variants?.variant ?? {},
  ) as typeof defaultStyles.variants.variant & TExtraVariant;
  const mergedSizes = mergeLiteral(
    defaultStyles.variants.size,
    config?.variants?.size ?? {},
  ) as typeof defaultStyles.variants.size & TExtraSize;

  // Type-safe defaultVariants
  const mergedDefaultVariants: Partial<{
    variant: keyof typeof mergedVariants;
    size: keyof typeof mergedSizes;
  }> = config?.defaultVariants ?? defaultStyles.defaultVariants;

  // CVA instance
  const buttonVariants = cva(baseButtonClass, {
    variants: {
      variant: mergedVariants,
      size: mergedSizes,
    },
    defaultVariants: mergedDefaultVariants as never,
  });

  // Props
  type ButtonProps = {
    variant?: keyof typeof mergedVariants;
    size?: keyof typeof mergedSizes;
  } & ButtonHTMLAttributes<HTMLButtonElement> & {
      children: ReactNode;
      className?: ClassValue;
    };

  // Component
  const Component = ({
    children,
    className,
    variant,
    size,
    ...rest
  }: ButtonProps) => (
    <button
      className={cn(buttonVariants({ variant, size } as never), className)}
      {...rest}
    >
      {children}
    </button>
  );

  Component.displayName = "Button";

  return Component;
}
