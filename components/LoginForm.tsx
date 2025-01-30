"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {deviceInfo} from "@/utils/deviceinfo";
import axiosInstance from "@/utils/axios"
import Cookies from "js-cookie";

export default function LoginForm() {
    const [credentials, setCredentials] = useState({
        phoneNumberOrUsername: "",
        password: "",
    })

    async function loginUser(credentials: {
        phoneNumberOrUsername: string
        password: string
    }) {
        // Burada normalde API'ye login isteği yaparsınız
        console.log("Logging in user:", credentials)

        // API çağrısını simüle et
        const response = await  axiosInstance.post("/auth/login", {
            phoneNumberOrUsername: credentials.phoneNumberOrUsername,
            password: credentials.password,
            deviceInfo: deviceInfo
        })

        console.log(response.data.data)

        Cookies.set('access_token', response.data.data.accessToken);
        Cookies.set('refresh_token', response.data.data.refreshToken);

        // Demo amaçlı, her zaman başarılı dön
        // Gerçek uygulamada burada API'den dönen cevaba göre işlem yapmalısınız
        return {success: true}
    }


    const [error, setError] = useState("")
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        try {
            const result = await loginUser(credentials)
            if (result.success) {
                router.push("/") // Başarılı girişten sonra dashboard'a yönlendir
            } else {
                setError("Login failed. Please check your credentials.")
            }
        } catch (err) {
            console.log(err)
            setError("An error occurred during login")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-4">
                    <Label htmlFor="phoneNumberOrUsername" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number or Username
                    </Label>
                    <Input
                        id="phoneNumberOrUsername"
                        name="phoneNumberOrUsername"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your phone number or username"
                        value={credentials.phoneNumberOrUsername}
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
                        value={credentials.password}
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
                    Sign in
                </Button>
            </div>
        </form>
    )
}

