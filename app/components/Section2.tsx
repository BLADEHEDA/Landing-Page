"use client";

import React from 'react'
import Image from 'next/image'
import BlueCtaButton from './CtaButtonProps'
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpeg'
import pic3 from '../../images/pic3.gif'
import pic4 from '../../images/pic4.webp'
import pic5 from '../../images/pic5.jpg'
import pic6 from '../../images/pic6.jpg'
import pic7 from '../../images/pic7.jpg'
import pic8 from '../../images/pic8.jpg'
import heroImg from "../../images/hero.png"


interface Section2Props {
  onBuyNowClick?: () => void
}

const Section2: React.FC<Section2Props> = ({ onBuyNowClick }) => {
  return (
    <div className="w-full !mt-[50px]  flex flex-col items-center text-center text-black dark:text-white space-y-6 my">
      
      {/* 1. Header Text Callout */}
      <div className="space-y-4 max-w-2xl leading-relaxed">
        <p className="font-bold tracking-wide uppercase">
          IF YOU HAVE EVER WISHED FOR A{' '}
          <span className="text-red-600 underline">PRODUCT</span> THAT WORKS INSTANTLY AFTER USE THEN THIS{' '}
          <span className="text-red-600 underline">STRONG MAN SYRUP</span> FOR MEN IS WHAT YOU{' '}
          <span className="text-red-600 underline">NEED</span>
        </p>

        <p className="font-semibold text-blue-600">
          SAFE, VERY EFFECTIVE AND NATURAL Solution that will help{' '}
          <span className="text-black dark:text-white font-normal">you you</span>{' '}
          <span className="text-red-600 font-bold underline">
            last longer between 45mins &ndash; 1hour in Bed and grow your penis
          </span>{' '}
          to your desired{' '}
          <span className="text-red-600 font-bold underline">size</span>. This Ogbonge MAN POWER has saved over 11,750+ African MEN from painful bedroom embarrassment...
        </p>
      </div>

      {/* 2. Couple Image */}
      <div className="w-full max-w-sm my-2">
        <Image
          src={pic1}
          alt="Happy Couple"
          width={400}
          height={300}
        //   className="w-full h-auto rounded shadow-sm object-cover"
        />
      </div>

      {/* 3. Product Banner Graphic */}
      <div className="w-full max-w-m my-2">
        <Image
            src={pic2}
          alt="Instant Erection & Natural Penis Enlargement Syrup For Men"
          width={600}
          height={300}
          className="w-full h-auto shadow-sm object-contain"
        />
      </div>

      {/* 4. Anatomy Graphic */}
      <div className="w-full max-w-md ">
        <Image
         src={pic3}
          alt="Anatomy Diagram"
          width={600}
          height={350}
          className="w-full h-auto shadow-sm object-contain"
        />
      </div>

      {/* 5. First BUY NOW CTA Button */}
      <BlueCtaButton
        text="BUY NOW"
        // onClick={onBuyNowClick}
      />

      {/* 6. Intimate Graphic */}
<div className="w-full max-w-md my-2 flex justify-center">
  <Image
    src={pic4}
    alt="Intimate Moment"
    width={250}
    height={200}
    className="mx-auto h-auto object-cover"
  />
</div>

      {/* 7. Subtext Caption */}
      <p className="  mt-[30px] text-red-600 font-bold leading-snug">
        A permanent and effective solution to weak erection, quick ejaculation and small penis
      </p>

      {/* 8. Main Product Packaging Image */}
      <div className="w-full max-w-m my-2">
        {/* <Image
           src={pic5}
          alt="Happy Family Man Power Product Box and Bottle"
          width={600}
          height={700}
          className="w-full h-auto rounded shadow-md object-cover"
        /> */}
            <Image
        className="w-full h-auto"
        src={heroImg}
        alt="Hero image"
        width={1200}
        height={800}
        priority
      />
      </div>

      {/* 9. Second BUY NOW CTA Button */}
      <BlueCtaButton
        text="BUY NOW"
        // onClick={onBuyNowClick}
      />

      {/* 10. Measurement Graphic (Before/After Chart) */}
      <div className="w-full my-2">
        <Image
       src={pic5}
          alt="Before and After Measurement Chart"
          width={600}
          height={350}
          className="w-full h-auto shadow-sm object-contain"
        />
      </div>

      {/* 11. Circular Proof Shots */}
      <div className="w-full my-2">
        <Image
         src={pic6}
          alt="Proof Comparison"
          width={600}
          height={300}
          className="w-full h-auto shadow-sm object-contain"
        />
      </div>

        {/* 12. Direct Comparison Proof */}
        <div className="w-full my-2">
            <Image
            src={pic7}
            alt="Direct Before and After"
            width={600}
            height={400}
            className="w-full h-auto shadow-sm object-contain"
            />
        </div>

    </div>
  )
}

export default Section2