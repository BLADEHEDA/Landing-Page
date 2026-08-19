"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BlueCtaButton from './CtaButtonProps'
import res1 from '../../images/res.jpg'
import res2 from '../../images/res2.jpg'
import test8 from '../../images/test8.jpg'
import test5 from '../../images/test5.gif'
import test10 from '../../images/test10.gif'
import guarantee from '../../images/guarantee.png'

interface Section4Props {
  onBuyNowClick?: () => void
}

const Section4: React.FC<Section4Props> = ({ onBuyNowClick }) => {
  // Simple Countdown Timer State (00:00:18:05 format)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 18, seconds: 5 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full !mt-[30px] flex flex-col items-center text-center text-black dark:text-white space-y-6 max-w-2xl mx-auto px-4">
      
      {/* 1. TOP OFFER BANNER */}
      <div className="w-full bg-emerald-900 text-white p-6 rounded-none space-y-3 shadow-md">
        <h3 className="!text-xl font-bold tracking-widest uppercase text-emerald-100">
          INSTANT DIGITAL DOWNLOAD &bull; NO WAITING FOR DELIVERY
        </h3>
        <p className="text-sm line-through text-red-300 font-semibold">
          NORMAL PRICE: 8,000
        </p>
        <p className="!text-2xl sm:!text-3xl font-extrabold text-emerald-300">
          PROMO PRICE: 3,500
        </p>
        <p className="text-xs uppercase tracking-wider text-emerald-200">
          HURRY!! THIS SPECIAL PROMO OFFER ENDS IN
        </p>

        {/* Countdown Timer Display */}
        <div className="flex justify-center items-center space-x-2 pt-2">
          <div className="bg-amber-400 text-black font-extrabold px-3 py-2 rounded text-lg min-w-[50px]">
            00 <span className="block text-[9px] font-normal uppercase">Days</span>
          </div>
          <span className="text-2xl font-bold text-amber-400">:</span>
          <div className="bg-amber-400 text-black font-extrabold px-3 py-2 rounded text-lg min-w-[50px]">
            {String(timeLeft.hours).padStart(2, '0')} <span className="block text-[9px] font-normal uppercase">Hours</span>
          </div>
          <span className="text-2xl font-bold text-amber-400">:</span>
          <div className="bg-amber-400 text-black font-extrabold px-3 py-2 rounded text-lg min-w-[50px]">
            {String(timeLeft.minutes).padStart(2, '0')} <span className="block text-[9px] font-normal uppercase">Minutes</span>
          </div>
          <span className="text-2xl font-bold text-amber-400">:</span>
          <div className="bg-amber-400 text-black font-extrabold px-3 py-2 rounded text-lg min-w-[50px]">
            {String(timeLeft.seconds).padStart(2, '0')} <span className="block text-[9px] font-normal uppercase">Seconds</span>
          </div>
        </div>
      </div>

      {/* CTA Button 1 */}
      <BlueCtaButton text="DOWNLOAD THE GUIDE NOW" />

      {/* 2. WHY THIS GUIDE IS A MUST-HAVE */}
      <div className="w-full bg-indigo-950 text-white p-6 text-left space-y-4 shadow-md">
        <h3 className="!text-xl font-extrabold uppercase text-center tracking-wide text-indigo-100">
          LET ME TELL YOU WHY THIS PRACTICAL GUIDE IS A MUST-HAVE FOR YOU
        </h3>

        <p className="font-semibold leading-relaxed">
          <span className="text-red-400 font-bold underline">Based on Natural, Proven Techniques:</span> Unlike pills or chemical methods out there, this digital blueprint reveals natural mind-body techniques and practical routines that are 100% safe, natural, and permanent.
        </p>

        <p className="font-semibold leading-relaxed">
          <span className="text-red-400 font-bold underline">100% Safe, Without Any Side Effects:</span> This practical guide is extremely safe for everyone because it involves zero artificial substances, drugs, or risky chemicals.
        </p>

        <p className="font-semibold leading-relaxed">
          <span className="text-red-400 font-bold underline">INSTANT AND PERMANENT RESULTS:</span> Unlike supplements where you wait weeks hoping to see a change, this step-by-step master guide gives you actionable techniques you can use immediately tonight for lasting, permanent results. Your woman will know something incredible has changed!
        </p>
      </div>

      {/* 3. TESTIMONIALS SECTION HEADER */}
      <p className="text-red-600 font-bold max-w-xl text-center uppercase tracking-wide pt-2">
        TAKE A LOOK AT WHAT OTHERS ARE SAYING ABOUT THIS SAME POWERFUL PRACTICAL GUIDE BELOW.
      </p>

      {/* PARENT CONTAINER: Flex column to stack rows vertically, gap-y controls vertical spacing between levels */}
      <div className="w-full flex flex-col items-center gap-y-6 !mt-[30px] max-w-4xl mx-auto px-4">
        
        {/* LEVEL 1: HORIZONTAL FLEX ROW */}
        {/* Controls horizontal alignment, gap-x for spacing between the two items */}
        <div className="w-full flex flex-row items-center justify-center gap-x-4">
          
          {/* COMMENTED TESTIMONIAL GRID/IMAGE */}
          <div className="w-full max-w-sm my-2 flex justify-center">
            <Image
              src={res1}
              alt="Customer Reviews and Testimonials"
              width={600}
              height={500}
              className="mx-auto h-auto object-contain"
            />
          </div> 

          {/* COMMENTED E-BOOK / GUIDE DIGITAL MOCKUP */}
          <div className="w-full max-w-sm my-2 flex justify-center">
            <Image
              src={res2}
              alt="Digital Guide Cover Mockup"
              width={600}
              height={600}
              className="mx-auto h-auto rounded shadow-md object-cover"
            />
          </div> 

        </div>
        
      </div>
      {/* END PARENT CONTAINER */}
      
      {/* CTA Button 2 */}
      {/* <BlueCtaButton text="DOWNLOAD THE GUIDE NOW" /> */}
      
      {/* RESULT AND MEASUREMENT HEADER */}
      <div className="w-full bg-purple-900 text-white py-3 font-extrabold text-2xl uppercase tracking-widest shadow">
        RESULT AND MEASUREMENT
      </div>
      <div className="w-full max-w-m my-2 flex justify-center">
        <Image
          src={test8}
          alt="Before and After Results"
          width={400}
          height={400}
        // className="mx-auto h-auto object-contain"
        />
      </div> 
      <p className="text-red-600 font-bold text-xl uppercase tracking-wide pt-2">
        Take control today, don't let another man corner your woman
      </p>
      
      {/* CTA Button 2b */}
      <BlueCtaButton text="DOWNLOAD THE GUIDE NOW" />

      {/* 4. REPEAT OFFER BANNER */}
      <div className="w-full bg-emerald-900 text-white p-6 rounded-none space-y-3 shadow-md">
        <h3 className="!text-xl font-bold tracking-widest uppercase text-emerald-100">
          INSTANT DIGITAL DOWNLOAD &bull; NO WAITING FOR DELIVERY
        </h3>
        <p className="text-sm line-through text-red-300 font-semibold">
          NORMAL PRICE: 8,000
        </p>
        <p className="!text-2xl sm:!text-3xl font-extrabold text-emerald-300">
          PROMO PRICE: 3,000
        </p>
        <p className="text-xs uppercase tracking-wider text-emerald-200">
          HURRY!! THIS OFFER ENDS IN
        </p>
      </div>

      <div className="bg-amber-500 text-black font-extrabold px-6 py-2 rounded-full uppercase tracking-wider text-sm">
        YOU MISSED OUT!
      </div>

      {/* CTA Button 3 */}
      {/* <BlueCtaButton text="DOWNLOAD THE GUIDE NOW" /> */}

      {/* 5. HOW TO USE THIS DIGITAL GUIDE BOX */}
      <div className="w-full bg-indigo-950 text-white p-6 text-center space-y-4 shadow-md">
        <h3 className="!text-xl font-extrabold uppercase text-indigo-100 border-b border-indigo-800 pb-2">
          HOW TO APPLY THIS PRACTICAL GUIDE
        </h3>

        <p className="font-semibold text-indigo-200">
          Read and apply the simple 5-minute technique anytime before intimacy.
        </p>

        <p className="font-medium leading-relaxed">
          You will be surprised at how magical these simple steps work. In fact, your WOMAN will be shocked and ask you what or how you did it.
        </p>

        <div className="pt-4 space-y-3 text-left">
          <p className="font-bold text-center text-lg text-amber-300 underline">
            Right now, you have two options
          </p>

          <p className="leading-relaxed">
            <span className="text-emerald-400 font-bold">Option One:</span> You download this practical guide right now, apply the steps tonight, make your woman feel like never before, and regain your confidence like a king.
          </p>

          <p className="leading-relaxed">
            <span className="text-red-400 font-bold">Option Two:</span> Ignore this digital guide and continue struggling, leaving your woman unhappy and unfulfilled in bed.
          </p>
        </div>

        <p className="!text-xl font-extrabold text-amber-300 pt-2 uppercase tracking-wide">
          The Ball Is In Your Court!!!
        </p>
      </div>

      {/* CTA Button 4 */}
      <BlueCtaButton text="DOWNLOAD THE GUIDE NOW" />

      {/* 6. 100% MONEY-BACK GUARANTEE SECTION */}
      <div className="w-full space-y-4 pt-6 border-t border-gray-200 dark:border-gray-800">
        <h2 className="!text-2xl sm:!text-3xl font-extrabold uppercase tracking-wide">
          14 DAYS 100% MONEY-BACK GUARANTEE
        </h2>
        <div className="w-full flex flex-row items-center justify-center gap-x-4">
          <div className="w-full max-w-md my-2 flex justify-center">
            <Image
              src={test10}
              alt="Intimacy Proof Photos"
              width={600}
              height={300}
              className="mx-auto h-auto object-contain"
            />
          </div>

          {/* COMMENTED SECOND DIGITAL COVER MOCKUP */}
          <div className="w-full max-w-md my-2 flex justify-center">
            <Image
              src={test5}
              alt="Digital Guide Digital Cover"
              width={600}
              height={600}
              className="mx-auto h-auto rounded shadow-md object-cover"
            />
          </div>
        </div>

        {/* COMMENTED SECOND DIGITAL COVER MOCKUP */}
        <Image
          className="w-full h-auto"
          src={guarantee}
          alt="Hero image"
          width={600}
          height={600}
          priority
        />

        <p className="font-medium max-w-xl mx-auto leading-relaxed">
          Not only does this digital guide WORK, it works so well that we are offering a <span className="font-bold">100% Money-Back Guarantee</span> to anyone who reads and applies it for <span className="font-bold">14 days</span> without total satisfaction and appreciable results.
        </p>

        <p className="font-semibold max-w-xl mx-auto leading-relaxed">
          How can we make such a strong guarantee? <span className="font-bold uppercase underline">THE ANSWER IS SIMPLE</span>: we have used this exact practical method to help over <span className="font-bold">1,000+ Men</span> achieve happier and healthier intimate lives...
        </p>

        <p className="!text-xl font-extrabold text-red-600 pt-2 uppercase">
          So What Do You Have To Lose?
        </p>
        
        {/* CTA Button 5 */}
        <BlueCtaButton text="DOWNLOAD THE GUIDE NOW" />
      </div>

    </div>
  )
}

export default Section4