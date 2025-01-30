"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import axiosInstance from "@/utils/axios";
import {LocalStorageUtil} from "@/utils/localStorageUtil";


export default function ResendOtpForm() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()


    async function resendOtp(phoneNumber: string) {
        // Burada normalde API'ye OTP yeniden gönderme isteği yaparsınız
        console.log("Resending OTP to:", phoneNumber)

        LocalStorageUtil.setItem("register_phone_number", phoneNumber)
        const response = (await axiosInstance.post("/auth/get-otp", {
            phoneNumber: phoneNumber
        })).data.data

        alert(response.otp)

        // Demo amaçlı, her zaman başarılı dön
        return {success: true, message: "OTP has been resent successfully"}
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setMessage("")

        try {
            const result = await resendOtp(phoneNumber)
            if (result.success) {
                setMessage(result.message)
                // Optionally, redirect to OTP verification page after a delay
                setTimeout(() => router.push("/otp"), 3000)
            } else {
                setError(result.message || "Failed to resend OTP")
            }
            router.push("/otp")
        } catch (err) {
            console.log(err);
            setError("An error occurred while resending OTP")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
                <Label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                </Label>
                <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {message && <p className="text-green-500 text-sm mt-2">{message}</p>}

            <div>
                <Button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                    Resend OTP
                </Button>
            </div>
        </form>
    )
}

