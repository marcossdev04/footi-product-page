import Image from 'next/image'
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Card,
} from './ui/card'
import graphic from '@/assets/graphic.png'

export function Reasons() {
  return (
    <div className="px-80 laptop:px-40 flex flex-col gap-5">
      <div className="text-[32px]">More Reasons to Join</div>
      <div className="grid grid-cols-4 w-full gap-5 ">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card
            className="h-80 flex bg-green text-black flex-col justify-between"
            key={index}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Enjoy on your TV</CardTitle>
              <CardDescription className="text-zinc-700 text-base">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Image src={graphic} width={55} alt="graphic" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
