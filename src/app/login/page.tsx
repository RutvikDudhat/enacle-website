"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Header } from "@/components/layout/header";
import { AuthCard } from "@/components/auth/AuthCard";
import { InputField } from "@/components/auth/InputField";
import { SocialLoginButton } from "@/components/auth/SocialLoginButton";

function EnacleLogo() {
  return (
    <div className="flex flex-col items-center mb-7">
      <div className="w-11 h-11 mb-4">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="12" fill="url(#logo-grad-login)"/>
          <path d="M22 10L10 17v10l12 7 12-7V17L22 10z" fill="white" fillOpacity="0.18" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M22 10v24M10 17l24 10M34 17L10 27" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
          <defs>
            <linearGradient id="logo-grad-login" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7B68EE"/>
              <stop offset="1" stopColor="#FD71AF"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="text-[22px] font-bold text-[#1a1a2e] tracking-tight">Welcome back!</h1>
      <p className="text-sm text-slate-500 mt-1">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-accent-enacle font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-xs text-slate-400 font-medium">or</span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

export default function LoginPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1300));
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-10"
        style={{
          background: "linear-gradient(135deg,#f5f3ff 0%,#fdf4ff 35%,#f0f4ff 65%,#ede9fe 100%)",
        }}
      >
      <div className="w-full max-w-100">
        <EnacleLogo />

        <AuthCard>
          {/* Google profile */}
          <SocialLoginButton
            variant="google-profile"
            initials="R"
            name="Continue as Rutvik"
            email="rutvikdudhat1@gmail.com"
          />

          {/* SSO */}
          <div className="mt-3">
            <SocialLoginButton variant="sso">Continue with SSO</SocialLoginButton>
          </div>

          <Divider />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />

            <InputField
              type={showPw ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              suffix={
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-150 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-[#7B68EE]/30 hover:shadow-[#7B68EE]/50 hover:brightness-110"
              style={{ background: "linear-gradient(135deg,#7B68EE 0%,#FD71AF 100%)" }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  Signing in…
                </span>
              ) : "Log In"}
            </button>

            <div className="text-center pt-0.5">
              <Link href="/forgot-password" className="text-sm text-accent-enacle font-medium hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
        </AuthCard>

        <p className="text-center text-xs text-slate-400 mt-6 leading-relaxed px-2">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-accent-enacle hover:underline">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/privacy" className="text-accent-enacle hover:underline">Privacy Policy</Link>.{" "}
          <Link href="/contact" className="text-accent-enacle hover:underline">Need help?</Link>
        </p>
      </div>
      </div>
    </>
  );
}
