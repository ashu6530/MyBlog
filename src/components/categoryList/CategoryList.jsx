import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <div className="mt-2 p-4">
      <h1 className="text-3xl mt-4 p-2">Popular Categories</h1>
      <div className="mt-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 items-center ml-2">
          <Link href="/blog?cat-fashion" className="flex-shrink-0 w-48 h-24 flex items-center bg-blue-300 p-4 rounded-md shadow-md hover:bg-blue-400 transition-all duration-200 ease-in-out">
          <div className="w-16 h-16 overflow-hidden relative"><Image
              src="https://images.unsplash.com/photo-1723126638018-b18d997f4058?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              className="rounded-full"
              alt="Fashion"
            /></div>
            
            <span className="ml-4 text-lg font-medium">Fashion</span>
          </Link>
           
          <Link href="/blog?cat-style" className="flex-shrink-0 w-48 h-24 flex items-center bg-orange-300 p-4 rounded-md shadow-md hover:bg-orange-400 transition-all duration-200 ease-in-out">
          <div className="w-16 h-16 overflow-hidden relative">
          <Image
              src="https://images.unsplash.com/photo-1723201969694-d47fd1b7fb61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              className="rounded-full"
              alt="Style"
            />
          </div>
           
            <span className="ml-4 text-lg font-medium">Style</span>
          </Link>

          <Link href="/blog?cat-culture" className="flex-shrink-0 w-48 h-24 flex items-center bg-gray-300 p-4 rounded-md shadow-md hover:bg-gray-400 transition-all duration-200 ease-in-out">
          <div className="w-16 h-16 overflow-hidden relative"> <Image
              src="https://images.unsplash.com/photo-1722966689319-a2f588e13141?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             fill
              className="rounded-full"
              alt="Culture"
            /></div>
           
            <span className="ml-4 text-lg font-medium">Culture</span>
          </Link>

          <Link href="/blog?cat-student" className="flex-shrink-0 w-48 h-24 flex items-center bg-teal-300 p-4 rounded-md shadow-md hover:bg-teal-400 transition-all duration-200 ease-in-out">
          <div className="w-16 h-16 overflow-hidden relative">
          <Image
              src="https://images.unsplash.com/photo-1720941001973-e3a1fb01f523?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              className="rounded-full"
              alt="Student"
            />
          </div>
            
            <span className="ml-4 text-lg font-medium">Student</span>
          </Link>

          <Link href="/blog?cat-python" className="flex-shrink-0 w-48 h-24 flex items-center bg-sky-300 p-4 rounded-md shadow-md hover:bg-sky-400 transition-all duration-200 ease-in-out">
          <div className="w-16 h-16 overflow-hidden relative">
          <Image
              src="https://images.unsplash.com/photo-1723107118936-9e517eebbbdc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              className="rounded-full"
              alt="Python"
            />
          </div>
          
            <span className="ml-4 text-lg font-medium">Python</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
