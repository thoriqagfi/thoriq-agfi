import { cn } from '@/lib/cn';
import Link, { LinkProps } from 'next/link';
import React from 'react';

export type UnstyledLinkProps = {
  children: React.ReactNode;
  href: LinkProps['href'];
  newTab?: boolean;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps;

export default function UnstyledLink({
  children,
  href,
  newTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    newTab !== undefined
      ? newTab
      : href && !href.startsWith('/') && !href.startsWith('#');

  return (
    <Link
      href={href}
      passHref={true}
      target={isNewTab ? '_blank' : '_self'}
      rel={isNewTab ? 'nopener noreferrer' : undefined}
      {...rest}
      className={cn(className, isNewTab && 'cursor-newtab')}
    >
      {children}
    </Link>
  );
}
