import Link from 'next/link'
import React from 'react'

const MenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
        <Link href="/" className="bg-orange-300 py-1 px-4 rounded-md">
          Python
        </Link>
        <Link href="/" className="bg-teal-300 py-1 px-4 rounded-md">
          Student
        </Link>
        <Link href="/" className="bg-purple-300 py-1 px-4 rounded-md">
          Culture
        </Link>
        <Link href="/" className="bg-slate-300 py-1 px-4 rounded-md">
          College
        </Link>
        <Link href="/" className="bg-slate-300 py-1 px-4 rounded-md">
          DSA
        </Link>
      </div>
  )
}

export default MenuCategories