import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col sm:min-w-[50rem] h-full">
      <Header />
      <main className="flex flex-1 flex-col my-3">
        <div className="border rounded-md px-3 py-4">
          <div className="space-y-3">
            <h3 className="text-center text-balance text-lg font-bold">
              Is your site SEO good?
            </h3>
            <p className="text-balance text-center">
              Check the performance of your website, and suggestions from us.
            </p>
          </div>
          <div>
            <Input placeholder="https://irere.vercel.app" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
