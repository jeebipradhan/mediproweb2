import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EMediProPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">eMediPro</h1>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Web-based Healthcare Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              eMediPro is the most awaited web based app of Visual MediPro and HM-Sys.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

