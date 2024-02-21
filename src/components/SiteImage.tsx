"use client";

import Image from "next/image";
import React from "react";
import { Skeleton } from "./ui/skeleton";

interface SiteImageProps {
  children?: React.ReactNode;
  loading?: boolean;
}

export const SiteImage: React.FC<SiteImageProps> = ({ loading = true }) => {
  return (
    <div>{loading ? <Skeleton /> : <Image src={``} alt="site-image" />}</div>
  );
};
