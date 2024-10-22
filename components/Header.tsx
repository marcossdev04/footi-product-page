import Image from 'next/image'
import logo from '@/assets/footilogo.svg'
import Link from 'next/link'
import { Button } from './ui/button'

export function Header() {
  return (
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
  )
}
