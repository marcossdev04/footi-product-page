'use client'

import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import background from '@/assets/background.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import logo from '@/assets/footilogo.svg'

export function Hero() {
  const [rotate, setRotate] = useState(false)

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background.src})`,
          opacity: 0.4,
        }}
      ></div>
      <header className="flex z-10 bg-transparent  w-full justify-between px-80 laptop:px-40 py-5 items-center">
        <Image className="w-[50px]" src={logo} alt="logo" />
        <Link href={'/'} className="">
          <Button
            className="bg-green text-lg py-5 hover:bg-green hover:bg-opacity-80"
            size={'sm'}
          >
            Sign in
          </Button>
        </Link>
      </header>
      <div className="max-w-[820px] mt-80 laptop:mt-40 z-10 flex flex-col items-center gap-5 bg-opacity-80 p-5 rounded-md">
        <div className="text-[50px] laptop:text-[40px] text-center">
          Unlimited sports betting predictions, winning tips and more
        </div>
        <div className="text-xl laptop:text-lg">
          Starts at BRL 20.90. Cancel anytime.
        </div>
        <div className="text-zinc-300 laptop:text-sm">
          Ready to bet smarter? Enter your email to start or renew your
          membership.
        </div>
        <button
          onMouseOver={() => setRotate(true)}
          onMouseLeave={() => setRotate(false)}
          className="text-2xl laptop:text-xl duration-300 bg-green hover:bg-green hover:bg-opacity-80 transition-all text-black py-2 rounded-md px-5 flex items-center gap-2"
        >
          <div>Get Started</div>
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
    </div>
  )
}
