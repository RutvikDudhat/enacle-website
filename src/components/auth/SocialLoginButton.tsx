"use client";

import React from "react";

interface SocialLoginButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "google-profile" | "google" | "sso";
  /** For google-profile variant — avatar initials */
  initials?: string;
  /** For google-profile variant — email shown below name */
  email?: string;
  /** For google-profile variant — display name */
  name?: string;
}

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
    <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.96l3.007 2.332C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

const CloudIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
  </svg>
);

export function SocialLoginButton({
  onClick,
  children,
  variant = "google",
  initials = "R",
  email = "",
  name = "",
}: SocialLoginButtonProps) {
  const base =
    "w-full flex items-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-150 hover:border-slate-300 hover:shadow-sm active:scale-[0.99] cursor-pointer";

  if (variant === "google-profile") {
    return (
      <button type="button" onClick={onClick} className={`${base} px-3 py-2.5 gap-3`}>
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-linear-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
          {initials}
        </div>
        {/* Name + email */}
        <div className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-[#1a1a2e] leading-tight truncate">{name || children}</p>
          {email && <p className="text-xs text-slate-400 truncate">{email}</p>}
        </div>
        {/* Google logo on right + chevron */}
        <div className="flex items-center gap-1.5 shrink-0">
          <GoogleIcon />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </button>
    );
  }

  if (variant === "sso") {
    return (
      <button type="button" onClick={onClick} className={`${base} px-4 py-3 justify-center gap-2.5`}>
        <CloudIcon />
        <span className="text-sm font-semibold text-slate-600">{children}</span>
      </button>
    );
  }

  // default google
  return (
    <button type="button" onClick={onClick} className={`${base} px-4 py-3 justify-center gap-2.5`}>
      <GoogleIcon />
      <span className="text-sm font-semibold text-slate-700">{children}</span>
    </button>
  );
}
