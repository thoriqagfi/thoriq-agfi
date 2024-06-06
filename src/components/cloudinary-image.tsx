'use client';
import { CldImage } from 'next-cloudinary';
import * as React from 'react';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.

// The CldImage component also supports the following props:
export interface CldImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

export default function CloudinaryImage(props: CldImageProps) {
  return (
    <CldImage
      src={props.src} // Use this sample image or upload your own via the Media Explorer
      width={props.width} // Transform the image: auto-crop to square aspect_ratio
      height={props.height}
      alt={props.alt}
      crop={'auto'}
      className={props.className}
    />
  );
}
