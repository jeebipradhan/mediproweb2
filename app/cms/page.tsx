'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

export default function CMSPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if the user is logged in
    // This is a placeholder. Replace with your actual login check logic
    const checkLoginStatus = () => {
      // For example, you might check for a token in localStorage
      const token = localStorage.getItem('authToken')
      setIsLoggedIn(!!token)
    }

    checkLoginStatus()
  }, [])

  const handleRedirect = () => {
    const url = 'https://mediprocomputers.com/clientprofile/app/#!/login'
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Customer Management System</h1>
        <Card className="max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Access CMS</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            {isLoggedIn ? (
              <>
                <p className="text-gray-600 mb-6">
                  You are logged in. Click below to access the Customer Management System.
                </p>
                <Button 
                  onClick={handleRedirect}
                  className="w-full flex items-center justify-center gap-2"
                >
                  Go to CMS
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  Please log in to access the Customer Management System.
                </p>
                <Button 
                  onClick={() => {/* Add login logic here */}}
                  className="w-full"
                >
                  Log In
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

