import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'

const datasheets = [
  {
    title: "Visual MediPro",
    description: "Comprehensive software solution for medical practices",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "HM-Sys",
    description: "Advanced Hospital Management System",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "eMediPro",
    description: "Web-based healthcare management platform",
    image: "/placeholder.svg?height=200&width=300",
  }
]

export default function DatasheetsPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Datasheets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datasheets.map((datasheet, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{datasheet.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video relative mb-4">
                  <Image
                    src={datasheet.image}
                    alt={`${datasheet.title} thumbnail`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <p className="text-gray-600">{datasheet.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Datasheet
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

