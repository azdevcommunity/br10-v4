import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Header/>
            <main>
                <HeroSection/>
                <FeaturesSection/>
                <HowItWorksSection/>
                <TestimonialsSection/>
                <CTASection/>
            </main>
            <Footer/>
        </div>
    )
}

