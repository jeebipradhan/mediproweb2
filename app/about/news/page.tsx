import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const newsItems = [
  {
    title: "eMediPro is releasing on January 2025",
    date: "November 22, 2024",
    content: "We are excited to announce that our latest product, eMediPro, is scheduled for release in January 2025. This innovative solution will revolutionize electronic medical record management for healthcare providers."
  },
  // Add more news items here in the future
]

export default function NewsPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Latest News</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p className="text-gray-700">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

