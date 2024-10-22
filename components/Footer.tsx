'use client'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import instagrem from '@/assets/instagram.svg'
import Telegram from '@/assets/telegram.svg'
import X from '@/assets/x.svg'
import whatsapp from '@/assets/whatsapp.svg'

export function Footer() {
  const [rotate, setRotate] = useState(false)
  return (
    <footer className="flex flex-col mb-10 gap-5">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-zinc-300 text-sm ">
          Ready to bet smarter? Enter your email to start or renew your
          membership.
        </div>
        <button
          onMouseOver={() => setRotate(true)}
          onMouseLeave={() => setRotate(false)}
          className="text-2xl duration-300 bg-green hover:bg-green hover:bg-opacity-80 transition-all text-black py-2 rounded-md px-5 flex items-center gap-2"
        >
          <div className="">Get Started</div>
          <div
            className={`${
              rotate
                ? 'transition-all duration-300 rotate-90'
                : 'transition-all duration-300 rotate-0'
            }`}
          >
            <ChevronRight strokeWidth={2.5} size={30} />
          </div>
        </button>
      </div>
      <div className="px-80 laptop:px-40">
        <div className="flex gap-2 flex-col">
          <div className="text-zinc-400 hover:text-white">
            Questions? Call +55 (99) 98920-2782
          </div>
          <div>
            <Image src={whatsapp} width={30} alt="whatsapp" />
          </div>
          <div>
            <Image src={instagrem} width={30} alt="instagram" />
          </div>
          <div>
            <Image width={30} src={Telegram} alt="telegram" />
          </div>
          <div>
            <Image width={30} src={X} alt="X" />
          </div>
        </div>
      </div>
    </footer>
  )
}
