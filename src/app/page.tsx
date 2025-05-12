import { Navbar } from "@/component/navbar";
import { Hero } from "@/component/hero";
import { Features } from "@/component/features";
import { HowItWorks } from "@/component/how-it-works";
import { Testimonials } from "@/component/testimonials";
import { Pricing } from "@/component/pricing";
import { CTA } from "@/component/cta";
import { Footer } from "@/component/footer";

export default function LandingPage() {
  return (
    <div className={`min-h-screen font-sans`}>
      <div className="text-gray-800 transition-colors duration-200 dark:text-gray-100">
        {/* Header */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* CTA Section */}
        <CTA />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
