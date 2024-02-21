import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { SiteImage } from "../components/SiteImage";

export default function Home() {
  return (
    <div className="flex flex-col sm:min-w-[50rem] h-full">
      <Header />
      <main className="flex flex-1 flex-col my-3">
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
            <Input placeholder="https://example.com" />
            <Button>Check</Button>
          </div>
        </div>
        <div className="flex w-full gap-2 p-2 h-full mt-3">
          <Analytics />
          <div className="flex flex-col p-2 w-[300px] border rounded-lg">
            <SiteImage />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
