"use client";

import Image from "next/image";
import React from "react";
import { Skeleton } from "./ui/skeleton";

interface SiteImageProps {
  children?: React.ReactNode;
  loading?: boolean;
  url: string;
}

export const SiteImage: React.FC<SiteImageProps> = ({
  loading = true,
  url,
}) => {
  return (
    <>
      {loading ? (
        <Skeleton className="w-full h-full bg-muted" />
      ) : (
        <Image src={``} alt="site-image" />
      )}
    </>
  );
};
