import { defaultStyles } from "../components/button/button-style";
import { ClassValue } from "class-variance-authority/types";

export function mergeLiteral<
  T extends Record<string, string>,
  U extends Record<string, string>,
>(a: T, b: U): T & U {
  return { ...a, ...b };
}

export type MergeVariants<
  TDefault extends Record<string, string>,
  TExtra extends Record<string, string>,
> = keyof TDefault | keyof TExtra;

export type FactoryConfig<
  TExtraVariant extends Record<string, ClassValue>,
  TExtraSize extends Record<string, ClassValue>,
> = {
  variants?: {
    variant?: TExtraVariant;
    size?: TExtraSize;
  };
  defaultVariants?: {
    variant?: keyof (typeof defaultStyles.variants.variant & TExtraVariant);
    size?: keyof (typeof defaultStyles.variants.size & TExtraSize);
  };
};
