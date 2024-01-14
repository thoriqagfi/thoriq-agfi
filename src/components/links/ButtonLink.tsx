import { cn } from '@/lib/cn';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

enum ButtonVariant {
  'default',
  'primary',
  'ghost',
}

export type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  variant = 'default',
  className = '',
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={cn(
        className,
        'inline-flex rounded px-4 py-2 font-bold',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        'scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu',
        'motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90',
        'transition duration-100',
        'animate-shadow',
        {
          'bg-white text-gray-800 disabled:bg-gray-200 dark:bg-dark dark:text-gray-800 dark:disabled:bg-gray-700':
            variant === 'default',
        },
        {
          'bg-primary-600 text-white disabled:bg-primary-500 dark:bg-primary-700 dark:text-white dark:disabled:bg-primary-600':
            variant === 'primary',
        },
        {
          'bg-transparent text-gray-800 disabled:bg-transparent dark:text-gray-200 dark:disabled:bg-transparent border-2 border-gray-500':
            variant === 'ghost',
        }
      )}
    >
      {children}
    </UnstyledLink>
  );
}
