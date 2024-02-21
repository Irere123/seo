"use client";

import React, { useState } from "react";
import { Analytics } from "./Analytics";
import { SiteImage } from "./SiteImage";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useSiteStore from "@/stores/useSiteStore";
import { useMutation } from "react-query";

const getSEOInfo = async (siteUrl: string) => {
  const resp = fetch("https://seo-api.replit.app/seo-improve-code", {
    method: "POST",
    body: JSON.stringify({ link: siteUrl }),
  })
    .then((data) => data)
    .catch((err) => console.log(err));

  return resp;
};

interface MainContentProps {
  children?: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = () => {
  const [siteUrl, setSiteUrl] = useState("");
  const { data, isLoading, mutateAsync } = useMutation(
    ["getSEOInfo"],
    getSEOInfo
  );

  const handleCheck = async () => {
    const site: { url: string } = useSiteStore.getState() as any;
    setSiteUrl(site.url);
    await mutateAsync(site.url);
  };

  return (
    <>
      <div className="space-y-3 px-3 py-4">
        <div className="space-y-3">
          <h3 className="text-center text-balance text-lg font-bold">
            Is your site SEO good?
          </h3>
          <p className="text-balance text-center text-muted-foreground">
            Check the performance of your website, and suggestions from us.
          </p>
        </div>
        <div className="mx-auto flex gap-2 sm:flex  items-center w-full max-w-xl">
          <Input
            onChange={(e) => useSiteStore.setState({ url: e.target.value })}
            name="sitename"
            placeholder="https://example.com"
          />
          <Button onClick={handleCheck}>Check</Button>
        </div>
      </div>
      <div className="flex w-full gap-2 p-2 h-full mt-3">
        <Analytics />
        <div className="flex flex-col p-2 w-[300px] border rounded-lg">
          <h4></h4>
          <SiteImage url={siteUrl} />
        </div>
      </div>
    </>
  );
};
