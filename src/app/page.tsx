import { Navigation, Banner, OurStory, About, Wines, Tasting, Reviews, Contact, Footer, FloatingButton } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Banner />
      <OurStory />
      <About />
      <Wines />
      <Tasting />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButton />
    </main>
  );
}
