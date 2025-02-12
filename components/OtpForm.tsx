"use client"

import {useState} from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

interface OtpFormProps {
    onSubmit: (otp: string) => void
}

export default function OtpForm({ onSubmit }: OtpFormProps) {
    const [otp, setOtp] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(otp)
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
                <Label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                    OTP Code
                </Label>
                <Input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter 4-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={4}
                    pattern="\d{4}"
                />
            </div>

            <div>
                <Button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                    Verify OTP
                </Button>
            </div>

            <div className="text-center mt-4">
                <Link href="/resend-otp" className="text-sm text-indigo-600 hover:text-indigo-500">
                    Didn&apos;t receive the code? Resend OTP
                </Link>
            </div>

            <p>We&apos;ve sent a new code to your phone.</p>
        </form>
    )
}

