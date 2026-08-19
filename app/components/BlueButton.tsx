"use client";

import React from 'react'

interface BlueCtaButtonProps {
  text?: string
  onClick?: () => void
  className?: string
}

const BlueCtaButton: React.FC<BlueCtaButtonProps> = ({
  text = "GET INSTANT ACCESS",
  onClick,
  className = "",
}) => {
  return (
    <div className="w-full flex justify-center my-2">
      <button
        type="button"
        onClick={onClick}
        className={`cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95
          /* Box shape & background */
          bg-[#1B66C9] hover:bg-blue-700 active:bg-blue-800 text-white
          px-8 sm:px-12 py-3.5 sm:py-4 rounded-md shadow-md
          /* Typography overrides */
          !text-xl sm:!text-2xl font-black tracking-wide uppercase text-center
          /* Border highlight */
          border border-blue-400/40
          ${className}`}
      >
        {text}
      </button>
    </div>
  )
}

export default BlueCtaButton