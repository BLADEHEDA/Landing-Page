"use client";
import React from 'react'
import Image from 'next/image'
import CtaButton from './CtaButtonProps'
import angry from '../../images/angry.jpg'
import arrow from '../../images/arrow down.gif'
import ShinyRedButton from './ShinyButton'
import BlueCtaButton from './BlueButton';

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center text-center text-black dark:text-white space-y-6">
      
      {/* Top Image */}
      <div className="w-full max-w-m my-2">
        <Image
          src={angry}
          alt="Couple on couch"
          width={600}
          height={400}
          className="w-full h-auto rounded shadow-sm object-cover"
        />
      </div>

      {/* Main Headline & Callout Box */}
      <div className="w-full bg-black text-white p-6 sm:p-8 rounded-none my-4 space-y-6">
        <h2 className="!text-4xl sm:text-3xl font-extrabold tracking-wide uppercase leading-snug">
          A natural way to get rid of small gbola, 1 minute knacking problems without side effect
        </h2>

        <div className="font-medium">
          <p>You See, I Want Us To Discuss Man To Man</p>
          <p>Here Is Not Appropriate, So Let&apos;s Go To The Other Side</p>
        </div>
      </div>

      {/* Red Arrows Indicator */}
      <div className="w-full max-w-[400px] my-2 flex justify-center">
        <Image
          src={arrow}
          alt="Down arrows"
          width={200}
          height={100}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Reusable CTA Buttons */}
      <div className="w-full flex flex-col items-center space-y-4">
        {/* Blue Secondary Button */}
        <BlueCtaButton/>

        {/* Primary Reusable CTA Button */}
   <ShinyRedButton
  text="CLICK HERE"
  onClick={() => {
    // Put your custom action here (e.g., scroll down, open modal, trigger checkout)
    console.log("Button clicked!")
  }}
/>
      </div>

      {/* Footer Disclaimer Box */}
<div className="w-full bg-black text-white p-6 rounded-none mt-8">
  <p className="!text-[16px] uppercase tracking-widest leading-relaxed text-gray-400">
    DISCLAIMER: THIS SITE IS NOT A PART OF FACEBOOK WEBSITE OR FACEBOOK INC. ADDITIONALLY, THIS SITE IS NOT ENDORSED BY FACEBOOK IN ANY WAY. FACEBOOK IS A TRADEMARK OF FACEBOOK INC.
  </p>
</div>

    </div>
  )
}

export default HomePage