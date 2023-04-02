import Image from "next/image"

const Hero = () => {
  return (
    <section className="py-12 px-5 sm:px-12 md:px-20 w-full bg-lightGreen lg:bg-[url('/hero.png')] bg-blend-luminosity bg-contain bg-no-repeat bg-[90%_center]">
      <h1 className='text-3xl xl:text-5xl lg:max-w-[400px] xl:max-w-[555px] leading-[130%] font-bold'>
        Get Up To 50% Off On  Selected Items
      </h1>
      <button
        className='flex items-center justify-between w-40 px-6 py-2 mt-12 font-normal rounded-full bg-orange h-11'
      >
        Shop Now
        <Image
          src='/popup.svg'
          alt=''
          width={10}
          height={10}
        />
      </button>
    </section>
  )
}

export default Hero
