'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Login } from './Login'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  const handleLogin = (success: boolean, loggedInUsername: string) => {
    setIsLoggedIn(success)
    setUsername(loggedInUsername)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                //src="MediPro.jpg"
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
                <DropdownMenuItem>
                  <Link href="/resources/downloads" className="w-full">Downloads</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/customers" className="w-full">Customers</Link>
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
            <Login onLogin={handleLogin} isLoggedIn={isLoggedIn} username={username} />
            <Button
              variant="ghost"
              className={`ml-4 ${isLoggedIn ? 'text-gray-700' : 'text-gray-400 cursor-not-allowed'}`}
              disabled={!isLoggedIn}
            >
              Licenses
            </Button>
            <Button
              variant="ghost"
              className={`ml-4 ${isLoggedIn ? 'text-gray-700' : 'text-gray-400 cursor-not-allowed'}`}
              disabled={!isLoggedIn}
            >
              CMS
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="flex flex-col">
              <span className="px-3 py-2 rounded-md text-base font-medium text-gray-900">Solutions</span>
              <Link href="/solutions/visual-medipro" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">Visual MediPro</Link>
              <Link href="/solutions/hm-sys" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">HM-Sys</Link>
              <Link href="/solutions/emedipro" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">eMediPro</Link>
            </div>
            <div className="flex flex-col">
              <span className="px-3 py-2 rounded-md text-base font-medium text-gray-900">Resources</span>
              <Link href="/resources/datasheets" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">Datasheets</Link>
              <Link href="/resources/videos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">Videos</Link>
              <Link href="/resources/downloads" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">Downloads</Link>
              <Link href="/resources/customers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">Customers</Link>
            </div>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
            <div className="flex flex-col">
              <span className="px-3 py-2 rounded-md text-base font-medium text-gray-900">About</span>
              <Link href="/about/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">About us</Link>
              <Link href="/about/careers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">Careers</Link>
              <Link href="/about/news" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">News</Link>
              <Link href="/about/team" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">Team</Link>
              <Link href="/about/event" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ml-4">Event</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <Login onLogin={handleLogin} isLoggedIn={isLoggedIn} username={username} />
              <Button
                variant="ghost"
                className={`w-full justify-start ${isLoggedIn ? 'text-gray-700' : 'text-gray-400 cursor-not-allowed'}`}
                disabled={!isLoggedIn}
              >
                Licenses
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${isLoggedIn ? 'text-gray-700' : 'text-gray-400 cursor-not-allowed'}`}
                disabled={!isLoggedIn}
              >
                CMS
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

