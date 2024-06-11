import React from 'react';
import { cn } from '@/lib/cn';

export enum TypographyVariant {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'label',
  'caption',
}

export enum FontColor {
  'primary',
  'black',
  'label',
  'white',
  'danger',
  'success',
  'warning',
  'gray',
}

export enum FontVariant {
  'monospace',
  'inter',
}

export enum FontWeight {
  'regular',
  'italic',
  'light',
  'medium',
  'semibold',
  'bold',
}

export type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  weight?: keyof typeof FontWeight;
  color?: keyof typeof FontColor;
  font?: keyof typeof FontVariant;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  weight = 'regular',
  className,
  color = 'primary',
  font,
  variant = 'p',
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || variant;

  return (
    <Component
      className={cn(
        [
          font === 'inter' && ['font-primary'],
          font === 'monospace' && ['font-secondary'],
        ],
        [
          variant === 'h1' && ['text-5xl'],
          variant === 'h2' && ['text-4xl'],
          variant === 'h3' && ['text-3xl'],
          variant === 'h4' && ['text-2xl'],
          variant === 'h5' && ['text-xl'],
          variant === 'h6' && ['text-lg'],
          variant === 'p' && ['text-base'],
          variant === 'caption' && ['text-sm'],
          variant === 'label' && ['text-xs'],
        ],
        [
          color === 'primary' && ['text-primary-600'],
          color === 'black' && ['text-black'],
          color === 'white' && ['text-white'],
          color === 'danger' && ['text-red-600'],
          color === 'success' && ['text-green-600'],
          color === 'warning' && ['text-yellow-600'],
          color === 'gray' && ['text-gray-600'],
        ],
        [
          weight === 'italic' && ['italic'],
          weight === 'light' && ['font-light'],
          weight === 'medium' && ['font-medium'],
          weight === 'regular' && ['font-normal'],
          weight === 'semibold' && ['font-semibold'],
          weight === 'bold' && ['font-bold'],
        ],

        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
