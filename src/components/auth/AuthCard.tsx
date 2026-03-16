"use client";

import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-100 mx-auto">
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-white/60 px-8 py-9">
        {children}
      </div>
    </div>
  );
}
