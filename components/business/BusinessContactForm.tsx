'use client'

import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dribbble, DribbbleIcon as Behance, Instagram, Linkedin, TwitterIcon as TikTok } from 'lucide-react'

const socialLinks = [
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Behance, href: "#", label: "Behance" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: TikTok, href: "#", label: "TikTok" },
]

export default function BusinessContactForm() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 bg-[#E6E6FA] rounded-[40px] overflow-hidden">
                        {/* Left Column */}
                        <div className="p-8 md:p-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-5xl font-bold mb-6">{`Let's Talk`}</h2>
                                <p className="text-gray-700 mb-12">
                                    Welcome to BR10, where we bring ideas to life. {`We're`} thrilled to hear from you and explore how we can collaborate. Reach out to us using the following contact details:
                                </p>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Contact us:</h3>
                                        <p className="text-gray-600">support@br10.com</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Connect with us:</h3>
                                        <p className="text-gray-600 mb-4">
                                            Follow us on social media to stay updated on our latest projects, news, and industry insights.
                                        </p>
                                        <div className="flex space-x-4">
                                            {socialLinks.map((social, index) => (
                                                <a
                                                    key={index}
                                                    href={social.href}
                                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                                    aria-label={social.label}
                                                >
                                                    <social.icon className="w-6 h-6" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column */}
                        <div className="bg-white p-8 md:p-12 rounded-[40px]">
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <div>
                                    <label className="text-sm font-medium text-gray-900">I am</label>
                                    <Input
                                        placeholder="Your name"
                                        className="mt-1 bg-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-900">Company Name</label>
                                    <Input
                                        placeholder="Your company name"
                                        className="mt-1 bg-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-900">Your Email</label>
                                    <Input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="mt-1 bg-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-900">Service Required</label>
                                    <Select>
                                        <SelectTrigger className="mt-1 bg-transparent">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                            <SelectItem value="web">Web Development</SelectItem>
                                            <SelectItem value="mobile">Mobile Development</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-900">Budget Range</label>
                                    <Select>
                                        <SelectTrigger className="mt-1 bg-transparent">
                                            <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="2k">$2,000 - $5,000</SelectItem>
                                            <SelectItem value="5k">$5,000 - $10,000</SelectItem>
                                            <SelectItem value="10k">$10,000+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-900">Deep Details About The Project</label>
                                    <Textarea
                                        placeholder="Tell us more about your idea"
                                        className="mt-1 bg-transparent resize-none"
                                    />
                                </div>

                                <Button className="mt-8 bg-black text-white rounded-full hover:bg-gray-800">
                                    {`Let's Talk`}
                                    <span className="ml-2">→</span>
                                </Button>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}