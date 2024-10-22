import { Hero } from '@/components/Hero'
import { Card } from '@/components/Card'
import { Trending } from '@/components/Trending'
import { Reasons } from '@/components/Reasons'
import { Questions } from '@/components/Questions'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-black ">
      <Hero />
      <Card />
      <div className="flex flex-col gap-10 z-10">
        <Trending />
        <Reasons />
        <Questions />
        <Footer />
      </div>
    </div>
  )
}
