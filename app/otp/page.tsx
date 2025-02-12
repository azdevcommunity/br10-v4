"use client"

import OtpForm from "@/components/OtpForm"
import { useRouter } from "next/navigation"

export default function OtpPage() {
  const router = useRouter()

  const handleSubmit = (otp: string) => {
    console.log("OTP submitted:", otp)
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">Verify Your Phone</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We&apos;ve sent a 4-digit code to your phone. Please enter it below.
          </p>
        </div>
        <OtpForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

