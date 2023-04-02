import Image from 'next/image'
import Link from "next/link"

const Header = () => {
  return (
    <>
      {/* header for small screens */}
      <header className='md:hidden'>
        <div className='flex items-center justify-between w-full px-8 shadow-md h-14'>
          <Link href={'/'} className='justify-end font-bold md:text-2xl text-green'>
            Greener<span className='text-orange'>Choice</span>
          </Link>
          <button className='flex justify-center w-14'>
            <Image
              src={'/person.svg'}
              alt=''
              width={20}
              height={20}
            />
          </button>
          <button className='flex justify-center w-14'>
            <Image
              src={'/cart.svg'}
              alt=''
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* the bottom fixed part of the header */}
        <div className='fixed bottom-0 left-0 right-0 z-50 w-full p-3 shadow-md h-14'>
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
      </header>

      {/* header for bigger screens */}
      <header className='h-[70px] px-10 lg:px-0 hidden md:flex w-full justify-between items-center backdrop-filter bg-[#ffffff73]'>
        <Link href={'/'} className='justify-end font-bold md:text-2xl text-green'>
          Greener<span className='text-orange'>Choice</span>
        </Link>

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
    </>
  )
}

export default Header
