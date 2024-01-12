import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @brief Combine tailwind classes with clsx classes
 * @param inputs
 * @returns
 * @example
 * ```tsx
 * <div className={cn('text-red-500', 'bg-blue-500')} />
 * ```
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
