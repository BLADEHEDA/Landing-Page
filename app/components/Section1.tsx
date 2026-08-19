import React from 'react'
import Image from 'next/image'
import test1 from "../../images/test1.jpg"
import test2 from '../../images/test2.jpg'
import test3 from '../../images/test3.jpg'
import img1 from '../../images/img1.jpeg'
import img2 from '../../images/img2.jpeg'
import img3 from '../../images/img3.jpg'
import heroImg from "../../images/hero.png"
import CtaButton from "./CtaButtonProps"

const Section1 = () => {
  return (
    <div className="w-full flex flex-col items-center text-center text-black dark:text-white space-y-6">
      
      {/* 1. Testimonial Screenshots / Social Proof Section */}
      <div className="w-full max-w-xl flex flex-col gap-4 my-2">
        {/* Top Row: 2 Images Side-by-Side */}
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="w-full h-auto">
            <Image
            src={test1} 
            alt="Testimonial 1"
            width={400}
            height={500}
            className="w-full h-auto rounded shadow-sm object-cover"
          />
          </div>
          <div className="w-full h-auto">
            <Image
              src={test2}
              alt="News Article Screenshot"
              width={400}
              height={500}
              className="w-full h-auto rounded shadow-sm object-cover"
            />
          </div>
        </div>

        {/* Bottom Row: 1 Image Centered Underneath */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-sm">
            <Image
              src={test3}
              alt="Social Post Testimonial 2"
              width={500}
              height={400}
              className="w-full h-auto rounded shadow-sm object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. Text Section (Inherits 22px automatically) */}
      <p className="max-w-2xl leading-relaxed">
        Asides from that Generally as a man, not lasting long in bed and having a{' '}
        <span className="text-red-600 font-bold underline">small manhood</span>{' '}
        will always affect your self esteem making you feel less of yourself
      </p>

      {/* 3. Middle Images: 2 Side-by-Side */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md my-2">
        <div className="w-full">
          <Image
            src={img1}
            alt="Side image 1"
            width={300}
            height={300}
            className="w-full h-auto rounded shadow-sm object-cover"
          />
        </div>
        <div className="w-full">
          <Image
             src={img2}
            alt="Side image 2"
            width={300}
            height={300}
            className="w-full h-auto rounded shadow-sm object-cover"
          />
        </div>
      </div>

      {/* 4. Single Image Underneath */}
      <div className="w-full max-w-md my-2">
        <Image
            src={img3}
          alt="Frustrated Man thinking"
          width={600}
          height={400}
          className="w-full h-auto rounded shadow-sm object-cover"
        />
      </div>

      {/* 5. Direct Response Copy Blocks (Inherits 22px automatically) */}
      <div className="space-y-4 max-w-2xl leading-relaxed">
        <p>
          But my brother I want you to understand that it&apos;s not your fault that you are having this problem
        </p>
        <p>
          I mean for the fact that you&apos;re always looking for solutions and{' '}
          <span className="text-red-600 font-bold underline">
            ways to solve this problem means that you&apos;re just one step away from the correct product
          </span>{' '}
          that will help you to get rid of these problems permanently
        </p>
        <p>
          And that&apos;s where this New effective and powerful herbal solution comes in...
        </p>
      </div>

      {/* 6. High-Converting Red Alert Banner */}
      <div className="w-full bg-red-600 text-white p-6 sm:p-8 rounded-none my-6 space-y-4 shadow-lg">
        {/* Header overrides font size to 32px */}
        <h3 className="text-3xl font-extrabold uppercase tracking-wider">
          Listen
        </h3>
        
        {/* Paragraphs inherit base 22px, but styled bold */}
        <p className="font-bold leading-snug">
          If you&apos;re having a small manhood and you are tired of the shames & embarrassments
        </p>

        <p className="font-bold leading-snug">
          If you&apos;re having trouble getting an erection when you need to get to work,
        </p>

        <p className="font-bold leading-snug">
          ...or your penis turns soft right away...and you can&apos;t go for more than one round...
        </p>

        <p className="font-bold leading-snug">
          And you&apos;re sick & tired of making watery & pathetic excuses to your woman every time you let her down in bed,
        </p>
      </div>

      {/* 7. Transition Text */}
      <p className="text-red-600 font-bold my-2">
        What you need now and ever is this 👇
      </p>

      {/* 8. Main Product Image Container */}
      <div className="w-full">
      <Image
        className="w-full h-auto"
        src={heroImg}
        alt="Hero image"
        width={1200}
        height={800}
        priority
      />
      </div>

      {/* 9. NAFDAC Registration Number (Explicitly scaled larger) */}
      <h4 className="text-3xl font-extrabold text-[#4B2677] dark:text-purple-400 tracking-wide my-4">
       NATURAL HEALTH COMBO
      </h4>

      {/* 10. Call To Action Button */}
 <CtaButton  text="ORDER NOW" />

    </div>
  )
}

export default Section1