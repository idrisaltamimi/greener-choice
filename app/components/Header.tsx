import Link from "next/link"

const Header = () => {
  return (
    <header>
      <Link href={'/'} className=''>
        Greener<span>Choice</span>
      </Link>
      <nav>
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/plp'}>plp</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
