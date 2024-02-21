import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";

export default function Home() {
  return (
    <div className="flex flex-col sm:min-w-[50rem] h-full">
      <Header />
      <main className="flex flex-1 flex-col my-3">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
