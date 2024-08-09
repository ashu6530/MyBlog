import Image from "next/image";
import Link from "next/link";
import AuthLinks from '@/components/authlinks/AuthLinks'
import ThemeToggle from '@/components/themeToggle/Themetoggle'



export default function Navbar() {
  return (
    <div className=" flex justify-between items-center dark:bg-black p-4 ">
      <div className="sm:flex space-x-4 hidden ">
        <Image src="/instagram.png" alt="facebook" width={24} height={24} />
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/twitter.png" alt="facebook" width={24} height={24} />
        <Image src="/whatsapp.png" alt="facebook" width={24} height={24} />
      </div>
      <h1 className="sm:text-3xl text-2xl ">Blogg</h1>
      <div className="flex items-center space-x-4">
        <ThemeToggle/>
        <Link className="sm:text-lg text-sm md:inline hidden" href="/">Home</Link>
        <Link className="sm:text-lg text-sm md:inline hidden" href="/">Contact</Link>
        <Link className="sm:text-lg text-sm md:inline hidden" href="/">About</Link>
        <AuthLinks/>
      </div>
    </div>
  );
}
