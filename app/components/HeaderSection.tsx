import React from 'react'
import Image from 'next/image'
import gif1 from '../../images/gif1.gif'
import gif2 from '../../images/gif2.gif'
import gif3 from '../../images/gif3.jpg'
import gif4 from '../../images/gif4.jpg'
import gif5 from '../../images/gif5.gif'

const HeaderSection = () => {
  return (
    <div className="w-full flex flex-col items-center text-center text-black dark:text-white space-y-6">
      
      {/* Top Black Banner Callout */}
      <div className="w-full bg-black text-white p-6 rounded-none my-4">
        <h2 className="font-bold leading-snug">
          Are you sick and tired of having your woman make fun of your{' '}
          <span className="text-red-600 underline">little penis</span>,{' '}
          <span className="text-red-600 underline">poor erection</span>, and{' '}
          <span className="text-red-600 underline">quick ejaculation</span>{' '}
          every time you try to make love?
        </h2>
      </div>

      {/* Intro Paragraph 1 */}
      <p className="max-w-2xl leading-relaxed mb-[20px]">
        To be honest with you there&apos;s nothing as{' '}
        <span className="text-red-600 underline font-semibold">
          embarrassing, annoying and humiliating
        </span>{' '}
        as wanting to go down with your woman and your penis starts misbehaving
      </p>

      {/* Image 1 */}
      <div className="w-full max-w-md mb-[-0px] mt-[-28px]">
        <Image
          src={gif1}
          alt="Illustration"
          width={600}
          height={400}
        />
      </div>

      {/* Caption 1 */}
      <p className="font-semibold max-w-xl">
        (it&apos;s either, it&apos;s too small and she&apos;s not feeling it or you ejaculate immediately you penetrate her{' '}
        <span className="font-bold underline">wet-juicy-pussy</span>)
      </p>

      {/* Image 2 */}
      <div className="w-full max-w-md my-2">
        <Image
          src={gif2}
          alt="Illustration"
          width={600}
          height={400}
          className="w-full h-auto rounded shadow-sm object-cover"
        />
      </div>

      {/* Subtext 1 */}
      <p className="max-w-xl leading-relaxed">
        It&apos;s one of the most frustrating & embarrassing situations a man can experience in life
      </p>

      {/* Image 3 */}
      <div className="w-full max-w-md my-2">
        <Image
          src={gif3}
          alt="Frustrated Man"
          width={600}
          height={400}
          className="w-full h-auto rounded shadow-sm object-cover"
        />
      </div>

      {/* Text Section 2 */}
      <div className="space-y-4 max-w-2xl leading-relaxed">
        <p>
          We all know that size and how long you last{' '}
          <span className="text-red-600 font-bold underline">matters a lot</span>{' '}
          when it comes to bedroom activities
        </p>
        <p>
          And no woman is happy when she&apos;s dealing with a man with a small penis and that can&apos;t even last long enough to satisfy her, when what she truly deserves is a big cock.
        </p>
      </div>

      {/* Image 4 */}
      <div className="w-full max-w-m my-2">
        <Image
          src={gif4}
          alt="Couple illustration"
          width={600}
          height={400}
          className="w-full h-auto rounded shadow-sm object-cover"
        />
      </div>

      {/* Subtext 2 */}
      <p className="max-w-xl leading-relaxed">
        A man that can fuck the hell out of her juicy pussy
      </p>

      {/* Image 5 */}
      <div className="w-full max-w-md my-2">
        <Image
          src={gif5}
          alt="Woman in bed"
          width={400}
          height={350}
          className="w-full h-auto rounded shadow-sm object-cover"
        />
      </div>

      {/* Text Section 3 */}
      <div className="space-y-4 max-w-2xl leading-relaxed">
        <p>
          One thing you should understand as a man is that women don&apos;t joke with their{' '}
          <span className="text-red-600 font-bold underline">sexual desires</span>
        </p>
        <p>
          No matter how much a woman loves you, no matter how religious she is, if you don&apos;t satisfy her in bed she will find a more capable man who will satisfy her. That&apos;s one of the major reasons why most of these women (especially the ones married to rich & wealthy men) cheat on their partners with broke and struggling men that have nothing to offer them
        </p>
      </div>

      {/* End Point Header */}
      <div className="pt-6 pb-2">
        <h3 className="text-3xl font-extrabold tracking-wide">
          See for yourself below
        </h3>
      </div>

    </div>
  )
}

export default HeaderSection