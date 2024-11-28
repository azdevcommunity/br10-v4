import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BusinessHero from '@/components/business/BusinessHero'
import BusinessFeatures from '@/components/business/BusinessFeatures'
import BusinessTestimonials from '@/components/business/BusinessTestimonials'
import BusinessCTA from '@/components/business/BusinessCTA'
import BusinessBanner from "@/components/business/BusinessBanner";
import BusinessProcessFlow from "@/components/business/BusinessProcessFlow";
import BusinessStats from "@/components/business/BusinessStats";
import BusinessContactForm from '@/components/business/BusinessContactForm'
import BusinessPricing from "@/components/business/BusinessPricing";
import BusinessSolutions from '@/components/business/BusinessSolutions'

export default function BusinessLandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header/>
            <main>
                <BusinessHero/>
                <BusinessFeatures/>
                <BusinessStats/>
                <BusinessBanner/>
                <BusinessTestimonials/>
                <BusinessPricing/>
                <BusinessProcessFlow/>
                <BusinessSolutions />
                <BusinessCTA/>
                <BusinessContactForm/>
            </main>
            <Footer/>
        </div>
    )
}

