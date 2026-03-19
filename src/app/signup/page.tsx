"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, User } from "lucide-react";
import { Header } from "@/components/layout/header";
import { AuthCard } from "@/components/auth/AuthCard";
import { InputField } from "@/components/auth/InputField";
import { SocialLoginButton } from "@/components/auth/SocialLoginButton";

/* ── Fake taken emails for demo validation ───────────────────────────── */
const TAKEN_EMAILS = ["test@example.com", "admin@enacle.com", "rutvik@gmail.com"];

/* ── Logo ────────────────────────────────────────────────────────────── */
function EnacleLogo() {
  return (
    <div className="flex flex-col items-center mb-7">
      <div className="w-11 h-11 mb-4">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="12" fill="url(#logo-grad-signup)" />
          <path d="M22 10L10 17v10l12 7 12-7V17L22 10z" fill="white" fillOpacity="0.18" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M22 10v24M10 17l24 10M34 17L10 27" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          <defs>
            <linearGradient id="logo-grad-signup" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7B68EE" />
              <stop offset="1" stopColor="#FD71AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="text-[22px] font-bold text-[#1a1a2e] tracking-tight">Seconds to sign up!</h1>
      <p className="text-sm text-slate-500 mt-1">
        Already have an account?{" "}
        <Link href="/login" className="text-accent-enacle font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}

/* ── Divider ─────────────────────────────────────────────────────────── */
function Divider() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-xs text-slate-400 font-medium">or</span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

/* ── Password strength ───────────────────────────────────────────────── */
function PasswordStrength({ password }: { password: string }) {
  if (!password) return null;
  const score =
    (password.length >= 8 ? 1 : 0) +
    (/[A-Z]/.test(password) ? 1 : 0) +
    (/[0-9]/.test(password) ? 1 : 0) +
    (/[^A-Za-z0-9]/.test(password) ? 1 : 0);

  const labels = ["Weak", "Fair", "Good", "Strong"];
  const colors = ["bg-red-400", "bg-amber-400", "bg-yellow-400", "bg-emerald-500"];
  const textColors = ["text-red-500", "text-amber-500", "text-yellow-600", "text-emerald-600"];

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              i < score ? colors[score - 1] : "bg-slate-200"
            }`}
          />
        ))}
      </div>
      <p className={`text-xs font-medium ${textColors[score - 1] ?? "text-slate-400"}`}>
        {score > 0 ? labels[score - 1] : ""}
        {score === 4 && " — great password!"}
      </p>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */
export default function SignupPage() {
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted]   = useState(false);

  const validateEmail = (val: string) => {
    if (TAKEN_EMAILS.includes(val.toLowerCase())) {
      setEmailError("Email already taken");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (emailError) return;
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
          {/* Google button */}
          <SocialLoginButton variant="google">
            Continue with Google
          </SocialLoginButton>

          <Divider />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Full name */}
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none z-10" />
              <InputField
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                className="pl-10"
              />
            </div>

            {/* Email with validation */}
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (submitted) validateEmail(e.target.value);
              }}
              onBlur={(e) => validateEmail(e.target.value)}
              required
              autoComplete="email"
              error={emailError}
            />

            {/* Password */}
            <div>
              <InputField
                type={showPw ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
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
              <PasswordStrength password={password} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !!emailError}
              className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-150 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-[#7B68EE]/30 hover:shadow-[#7B68EE]/50 hover:brightness-110 mt-1"
              style={{
                background: "linear-gradient(135deg,#7B68EE 0%,#FD71AF 100%)",
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Creating account…
                </span>
              ) : (
                "Sign up with Email"
              )}
            </button>
          </form>
        </AuthCard>

        {/* Footer */}
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
