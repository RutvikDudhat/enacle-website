"use client";

import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  suffix?: React.ReactNode;
}

export function InputField({ label, error, suffix, className = "", ...props }: InputFieldProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">{label}</label>
      )}
      <div className="relative">
        <input
          {...props}
          className={`
            w-full px-4 py-3 rounded-xl border text-sm text-[#1a1a2e] placeholder-slate-400
            outline-none transition-all duration-150
            ${error
              ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300/40 focus:border-red-500"
              : "border-slate-200 bg-white focus:ring-2 focus:ring-accent-enacle/30 focus:border-accent-enacle"
            }
            ${suffix ? "pr-11" : ""}
            ${className}
          `}
        />
        {suffix && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{suffix}</div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
            <circle cx="6" cy="6" r="5.5" stroke="currentColor"/>
            <path d="M6 3.5v3M6 8.5v.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
