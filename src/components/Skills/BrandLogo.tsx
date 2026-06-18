type BrandLogoProps = {
  src: string;
  alt: string;
  className?: string;
};

export function BrandLogo({ src, alt, className }: BrandLogoProps) {
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />;
}
