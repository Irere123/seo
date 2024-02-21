"use client";

import Image from "next/image";
import React from "react";

interface SiteImageProps {
  children?: React.ReactNode;
}

export const SiteImage: React.FC<SiteImageProps> = () => {
  return (
    <div>
      <h4 className="text-muted-foreground">example.com</h4>
      <Image src={``} alt="site-image" />
    </div>
  );
};
