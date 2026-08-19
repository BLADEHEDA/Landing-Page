"use client";

import React from 'react'
import { trackMetaEvent } from '@/utils/fbPixel'

interface CtaButtonProps {
  text?: string
  href?: string
  className?: string
}

const DEFAULT_CHECKOUT_URL = "https://damian-adebayo.mymaketou.shop/products/ultimate-secrets-volume-1/checkout"

const CtaButton: React.FC<CtaButtonProps> = ({
  text = "GET 50% OFF NOW",
  href = DEFAULT_CHECKOUT_URL,
  className = "",
}) => {
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents instant navigation

    // Fire dual-dispatch InitiateCheckout event before leaving
    await trackMetaEvent('InitiateCheckout', {
      content_name: 'Ultimate Secrets Volume 1',
      value: 3000,
      currency: 'XAF',
    });

    // Navigate to the external checkout URL after tracking completes
    window.location.href = href;
  };

  return (
    <div className="w-full flex justify-center mt-5">
      <a
        href={href}
        onClick={handleClick}
        className={`bg-brand-purple hover:bg-purple-900 text-white font-extrabold text-xl px-12 py-5 rounded-lg hover:scale-105 transition-transform duration-200 inline-block text-center uppercase tracking-wider shadow-md ${className}`}
      >
        {text}
      </a>
    </div>
  )
}

export default CtaButton