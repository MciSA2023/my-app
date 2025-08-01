// src/types.ts
export interface ImageData {
  id: number;
  src: string;
  alt: string;
  aspect: 'portrait' | 'landscape';
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}