import Image from 'next/image'
import Link from 'next/link'
import logo from '@/images/logo.png'

const Header = () => {
  return (
    <div className='border-b'>
      <div>
        <div>
          <Link href="/">
            <Image 
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className='w-24 lg:w-28'
            />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Header