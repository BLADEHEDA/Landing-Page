"use client";

import React from 'react'

interface ShinyRedButtonProps {
  text?: string
  onClick?: () => void
  className?: string
}

const ShinyRedButton: React.FC<ShinyRedButtonProps> = ({
  text = "CLICK HERE",
  onClick,
  className = "",
}) => {
  return (
    <div className="w-full flex justify-center my-4">
      <button
        type="button"
        onClick={onClick}
        className={`relative overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95
          rounded-full px-12 sm:px-16 py-4 sm:py-5
          !text-3xl sm:!text-4xl font-extrabold text-white tracking-wider uppercase
          bg-gradient-to-b from-red-500 via-red-600 to-red-950
          border-2 border-red-400 border-b-red-950 shadow-[0_10px_25px_rgba(150,0,0,0.6)]
          ${className}`}
      >
        {/* Top Glossy / Glass Shiny Highlight */}
        <span className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/40 to-transparent rounded-t-full pointer-events-none" />

        {/* White outline ring effect on inner top */}
        <span className="absolute inset-x-4 top-1 h-[2px] bg-white/60 rounded-full pointer-events-none" />

        {/* Button Text */}
        <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {text}
        </span>
      </button>
    </div>
  )
}

export default ShinyRedButton