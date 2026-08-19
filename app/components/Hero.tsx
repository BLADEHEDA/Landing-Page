import React from 'react'
import Image from "next/image"
import heroImg from "../../images/hero.png"
import CtaButton from "./CtaButtonProps"

const Hero = () => {
  return (
    <div className="w-full">
      <Image
        className="w-full h-auto"
        src={heroImg}
        alt="Hero image"
        width={1200}
        height={800}
        priority
      />
      
      {/* Default CtaButton uses default link and "GET 50% OFF NOW" text */}
      <CtaButton />
    </div>
  )
}

export default Hero