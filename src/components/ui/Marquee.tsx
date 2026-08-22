import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: string;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = '30s',
  className = '',
}) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}>
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-6 py-2 animate-marquee"
        style={{ '--duration': speed } as React.CSSProperties}
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};
