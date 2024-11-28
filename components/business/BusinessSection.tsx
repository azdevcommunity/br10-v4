import { Button } from '@/components/ui/button'
import { Briefcase, Clock, BarChart } from 'lucide-react'

export default function BusinessSection() {
    return (
        <section id="for-businesses" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Are You a Business?</h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4">Join the BR10 network and connect with your customers effortlessly.</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <Briefcase className="w-6 h-6 mr-2 text-primary" />
                                <span>Unique ID system for secure bookings</span>
                            </li>
                            <li className="flex items-center">
                                <Clock className="w-6 h-6 mr-2 text-primary" />
                                <span>Real-time booking management</span>
                            </li>
                            <li className="flex items-center">
                                <BarChart className="w-6 h-6 mr-2 text-primary" />
                                <span>Insights and analytics to grow your business</span>
                            </li>
                        </ul>
                        <Button size="lg" className="mt-6">Learn More</Button>
                    </div>
                    <div className="md:w-1/2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/placeholder.svg?height=300&width=400"
                            alt="Business owner managing profile"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

