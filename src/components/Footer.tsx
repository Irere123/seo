"use client";

import Icon from "./Icon";

export const Footer = () => {
  return (
    <footer className="flex gap-4 justify-between border rounded-md px-5 py-5 mb-3 backdrop-blur-[2px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">SEORank</h2>
        <p className="text-sm text-muted-foreground font-light text-balance">
          Check the seo analytics for your site
        </p>
        <div className="flex gap-2">
          <span
            className="border rounded-md p-2"
            onClick={() => {
              window.location.href = "https://twich.com";
            }}
          >
            <Icon name="twitch" width={16} height={16} />
          </span>
          <span
            onClick={() => {
              window.location.href = "https://twitter.com";
            }}
            className="border rounded-md p-2"
          >
            <Icon name="twitter" width={16} height={16} />
          </span>
          <span
            onClick={() => {
              window.location.href = "https://linkedin.com";
            }}
            className="border rounded-md p-2"
          >
            <Icon name="linkedin" width={16} height={16} />
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <h3>Resources</h3>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground underline">
          <p>Docs</p>
          <p>About</p>
          <p>Pricing</p>
        </div>
      </div>
      <div className="space-y-3">
        <h3>Tools</h3>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground underline">
          <p>Speedcheker</p>
          <p>All status codes</p>
        </div>
      </div>
    </footer>
  );
};
