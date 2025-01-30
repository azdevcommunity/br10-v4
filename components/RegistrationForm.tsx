"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import axiosInstance from "@/utils/axios";
import {LocalStorageUtil} from "@/utils/localStorageUtil";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        specialityId: "0",
        registerType: "1",
    })
    const [error, setError] = useState("")
    const router = useRouter()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return
        }

        axiosInstance.post("/auth/register", formData)
            .then((res) => {
                console.log(res.data.data)
                LocalStorageUtil.setItem("register_phone_number", res.data.data.phoneNumber)
                LocalStorageUtil.setItem("verify_otp_type", "activate_user")
                alert(res.data.data.otp)
                router.push("/otp");
            })
            .catch((err) => {console.log(err)})
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-4">
                    <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </Label>
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                    </Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
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
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div>
                <Button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                    Register
                </Button>
            </div>
        </form>
    )
}

