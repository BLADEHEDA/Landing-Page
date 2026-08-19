import React from 'react'

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
  return (
    <div className="w-full flex justify-center mt-5">
      <a
        href={href}
        className={`bg-brand-purple hover:bg-purple-900 text-white font-extrabold text-xl px-12 py-5 rounded-lg hover:scale-105 transition-transform duration-200 inline-block text-center uppercase tracking-wider shadow-md ${className}`}
      >
        {text}
      </a>
    </div>
  )
}

export default CtaButton