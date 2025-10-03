
'use client';
import Link from 'next/link';
import React from 'react';

interface SafeLinkProps extends React.PropsWithChildren {
  href?: string;
  className?: string;
}

export function SafeLink({ href, children, className }: SafeLinkProps) {
  const isValid = typeof href === "string" && href.length > 0;
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => { 
    if (!isValid) e.preventDefault(); 
  };

  return (
    <Link href={isValid ? href : '#'} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

    