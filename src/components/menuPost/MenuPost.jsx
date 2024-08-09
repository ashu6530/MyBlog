import Image from "next/image";
import React from "react";
import Link from "next/link";

const MenuPost = ({ withImage }) => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <Link href="/" className="flex items-center gap-4">
        {withImage && (
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1561594592-d4b0e1201a58?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className="flex-1">
          <span className="text-sm font-extralight text-white bg-orange-400 p-1 rounded-full">
            Travel
          </span>
          <p className="">Magni repudiandae commodi maxime laudantium.</p>
          <div className="text-gray-400 text-sm mt-2">
            <span>Ashutosh Singh</span> &bull; <span>01.03.2001</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="flex items-center gap-4 ">
        {withImage && (
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1561594592-d4b0e1201a58?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className="flex-1">
          <span className="text-sm font-extralight text-white bg-purple-400 p-1 rounded-full">
            Culture
          </span>
          <p className="">Magni repudiandae commodi maxime laudantium.</p>
          <div className="text-gray-400 text-sm mt-2">
            <span>Ashutosh Singh</span> &bull; <span>01.03.2001</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="flex items-center gap-4">
        {withImage &&  <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1561594592-d4b0e1201a58?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Travel"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>}
        <div className="flex-1">
          <span className="text-sm font-extralight text-white bg-sky-400 p-1 rounded-full">
            Coding
          </span>
          <p className="">Magni repudiandae commodi maxime laudantium.</p>
          <div className="text-gray-400 text-sm mt-2">
            <span>Ashutosh Singh</span> &bull; <span>01.03.2001</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="flex items-center gap-4">
        { withImage &&  <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1561594592-d4b0e1201a58?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Travel"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>}
        <div className="flex-1">
          <span className="text-sm font-extralight text-white bg-teal-400 p-1 rounded-full">
            Python
          </span>
          <p className="">Magni repudiandae commodi maxime laudantium.</p>
          <div className="text-gray-400 text-sm mt-2">
            <span>Ashutosh Singh</span> &bull; <span>01.03.2001</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
