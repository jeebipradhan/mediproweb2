'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/MediPro.jpg"
                alt="MediPro Logo"
                width={40}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <span className="ml-2 text-xl font-semibold text-gray-800">Medipro Computers</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none">
                Solutions <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/solutions/visual-medipro" className="w-full">Visual MediPro</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/hm-sys" className="w-full">HM-Sys</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/emedipro" className="w-full">eMediPro</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none">
                Resources <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/resources/datasheets" className="w-full">Datasheets</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/videos" className="w-full">Videos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none">
                Download <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="https://mediprocomputers.com/Download/Index" className="w-full" target="_blank" rel="noopener noreferrer">Downloads</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none">
                About <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/about/about-us" className="w-full">About us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/careers" className="w-full">Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/news" className="w-full">News</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/team" className="w-full">Team</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/event" className="w-full">Event</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
