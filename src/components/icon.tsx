import React from 'react';
import * as Icons from 'react-icons/fa';

export type IconProps = {
  name: keyof typeof Icons;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  const Icon = Icons[name];
  return <Icon className={className} />;
}
