import { Toaster } from "@/app/components/ui/sonner";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { About } from "@/app/components/About";
import { BookingForm } from "@/app/components/BookingForm";
import { Footer } from "@/app/components/Footer";
import { PromoBar } from "@/app/components/PromoBar";
import { SocialWidget } from "@/app/components/SocialWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <BookingForm />
      </main>
      <Footer />
      <PromoBar />
      <SocialWidget />
      <Toaster position="top-center" />
    </div>
  );
}