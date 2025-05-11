import logo from '../../../../../public/pharmacy (1).png'
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
        className="  border-green-400 border-2 rounded-full p-2 "
      />
    </Link>
  );
}

export default Logo
