import { CarouselSize } from './Carrousel'

export function Trending() {
  return (
    <div className="px-80 laptop:px-40 mt-5 flex flex-col gap-5">
      <div className="text-[32px]">Trending</div>
      <CarouselSize />
    </div>
  )
}
