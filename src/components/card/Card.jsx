import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <div className="mb-8 sm:flex sm:flex-row flex-col gap-8">
      <div className="relative sm:w-[800px] sm:h-[400px] w-88 h-96 rounded-md overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXB1dGVyfGVufDB8fDB8fHww"
          fill
          alt="Image description"
          style={{ objectFit: "cover" }} 
        />
      </div>
      <div className="mt-8">
      <div className="space-x-4">
        <span className="text-purple-600">11.0.2024</span>
        <span className="bg-teal-400 p-2 rounded-md">Culture</span>
      </div>
      <h1 className="text-2xl font-bold leading-relaxed mt-8">Lorem ipsum dolor sit amet consectetur ad debitis nulla?</h1>
      <p className="font-extralight tracking-widest mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem labore
        modi architecto vel molestiae quam repellat illum ratione perspiciatis
        soluta.
      </p>
      <div className="mt-8">
      <Link 
      className='text-blue-500 hover:text-blue-700'
      href="/">Read More...</Link>
      </div>
      </div>
      

     
    </div>
  );
}
