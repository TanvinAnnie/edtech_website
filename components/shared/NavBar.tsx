"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <h1 className="text-4xl font-bold text-gray-700">
            Pro Edu
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-gray-500 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>

            <li>
              <Link href="/courses" className="hover:text-blue-500">
                Courses
              </Link>
            </li>

            <li>
              <Link href="/deals" className="hover:text-blue-500">
                Deals
              </Link>
            </li>

            <li>
              <Link href="/success" className="hover:text-blue-500">
                Success
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>

            <li>
              <Link href="/register" className="hover:text-blue-500">
                Register
              </Link>
            </li>
          </ul>

          {/* Desktop Button */}
          <button className="hidden md:block border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-500 hover:text-white transition">
            Register
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-5">
            <ul className="flex flex-col gap-4 text-gray-600">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/deals">Deals</Link></li>
              <li><Link href="/success">Success</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/register">Register</Link></li>
            </ul>

            <button className="mt-5 w-full border border-blue-500 text-blue-500 py-2 rounded">
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}