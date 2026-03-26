import { Banner, About, Wines, Tasting, Reviews, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <About />
      <Wines />
      <Tasting />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
