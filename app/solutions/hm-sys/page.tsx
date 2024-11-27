import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HMSysPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">HM-Sys</h1>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Hospital Management System</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              HM-Sys is an abbreviation of Hospital Management System.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

