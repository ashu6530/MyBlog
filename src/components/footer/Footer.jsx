import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sm:p-8 sm:mt-8  p-2">
      <div className="container mx-auto sm:flex justify-between hidden">
        <div className="max-w-xs">
          <div className="flex items-center mb-4 ">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1518384401463-d3876163c195?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blogg Logo" fill />
            </div>
            
            <h1 className="text-xl font-bold ml-2">Blogg</h1>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col">
            <span className="text-lg font-semibold mb-2">Links</span>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/" className="hover:underline">
              About
            </Link>
            <Link href="/" className="hover:underline">
              Blog
            </Link>
            <Link href="/" className="hover:underline">
              Contact
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold mb-2">Company</span>
            <Link href="/" className="hover:underline">
              About Us
            </Link>
            <Link href="/" className="hover:underline">
              Careers
            </Link>
            <Link href="/" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:underline">
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold mb-2">Support</span>
            <Link href="/" className="hover:underline">
              Help Center
            </Link>
            <Link href="/" className="hover:underline">
              FAQs
            </Link>
            <Link href="/" className="hover:underline">
              Contact Support
            </Link>
            <Link href="/" className="hover:underline">
              Documentation
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
          © 2024 Blogg. All rights reserved.
        </div>
    </footer>
  );
}

