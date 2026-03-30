import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Abstract business background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 text-xs font-medium mb-6 shadow-highlight">
              Member Access
            </div>
            <h1 className="text-2xl md:text-3xl font-medium mb-2 mckinsey-heading">Login to Your Account</h1>
            <p className="text-slate-600 text-sm mckinsey-subheading">Access exclusive content and insights</p>
          </div>

          <Card className="mckinsey-card overflow-hidden shadow-card">
            <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-slate-200 focus-ring rounded-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" className="border-slate-200 focus-ring rounded-none" required />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 border-slate-200 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="remember" className="text-sm text-slate-600">
                    Remember me
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full mckinsey-button bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-blue"
                >
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="relative flex items-center justify-center mt-8 mb-6">
                <div className="border-t border-slate-200 absolute w-full"></div>
                <span className="bg-white px-2 text-xs text-slate-500 relative">Or continue with</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center py-2 px-4 border border-slate-200 hover:bg-slate-50 transition-colors text-sm shadow-sharp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center py-2 px-4 border border-slate-200 hover:bg-slate-50 transition-colors text-sm shadow-sharp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              Don't have an account?{" "}
              <Link href="/subscribe" className="text-blue-600 hover:underline font-medium">
                Subscribe now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

