import bet from '@/assets/bet.png'
import { ChevronsUp } from 'lucide-react'
import Image from 'next/image'
export function Card() {
  return (
    <div className="-mt-44 flex justify-center items-center  border-green z-10 bg-black rounded-t-[50%] border-t-2 h-44 laptop:h-32 laptop:-mt-32 ">
      <div className="px-80 laptop:px-40 transition-all duration-300  hover:scale-105 mt-10 w-full flex flex-col justify-center items-center  gap-3">
        <div className="animate-bounce">
          <ChevronsUp strokeWidth={2.5} size={35} />
        </div>
        <div className="flex items-center justify-center w-full gap-5">
          <div>
            <Image width={80} src={bet} alt="bet" />
          </div>
          <div className="rounded-2xl text-black bg-green flex justify-between items-center px-10 py-3 w-full ">
            <div>
              <div className="text-xl tracking-wide">
                Assertive sports predictions for just $20,90
              </div>
              <div className="text-base">
                Get our most affordable plan with personalized support
              </div>
            </div>
            <button className="bg-black text-white px-3 py-2 rounded-lg bg-opacity-90">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
