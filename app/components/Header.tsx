import Image from 'next/image'
import Link from "next/link"

const Header = () => {
  return (
    <header className='h-[70px] flex w-full justify-between items-center'>
      <Link href={'/'} className='justify-end text-2xl font-bold text-green basis-full'>
        Greener<span className='text-orange'>Choice</span>
      </Link>
      {/* <nav>
        <ul className='flex'>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/plp'}>plp</Link></li>
        </ul>
      </nav> */}
      <div className='flex items-center justify-end gap-4 basis-full'>
        <div className='relative max-w-[320px] w-full'>
          <input
            placeholder='Search Products'
            type='search'
            className='flex items-center justify-between w-full h-10 pl-10 pr-5 text-sm rounded-full bg-lightGrey placeholder:text-sm'
          />
          <Image
            className='absolute left-5 translate-y-[-50%] top-1/2 fill-lightGrey pointer-events-none'
            src={'/search.svg'}
            alt=''
            width={16}
            height={16}
          />
        </div>

        <button className='flex items-center gap-2 text-sm'>
          <Image
            src={'/person.svg'}
            alt=''
            width={16}
            height={16}
          />
          Account
        </button>
        <button className='flex items-center gap-2 text-sm'>
          <Image
            src={'/cart.svg'}
            alt=''
            width={16}
            height={16}
          />
          Cart
        </button>
      </div>
    </header>
  )
}

export default Header
