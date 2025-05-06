import logo from '@/assets/images/medi-mart.png'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={60}
        height={60}
        alt="medi mart logo"
        className="md:w-8 w-6"
      />
    </Link>
  );
}

export default Logo
