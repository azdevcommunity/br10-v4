import ResendOtpForm from "@/components/ResendOtpForm"

export default function ResendOtpPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">Resend OTP</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">Enter your phone number to receive a new OTP</p>
                </div>
                <ResendOtpForm />
            </div>
        </div>
    )
}

