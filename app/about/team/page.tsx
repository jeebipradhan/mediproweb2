import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  { name: "Gyanendra Pradhan", role: "Founder" },
  { name: "Shashi Sagar Shrestha", role: "VP of Software Development" },
  { name: "Sachin Ranjitkar", role: "Director of Sales and Support" },
  { name: "Ashish Gurung", role: "Regional Partner" },
  { name: "Kishan Pandey", role: "Regional Partner" },
  { name: "Kumar Khatiwada", role: "Regional Partner" },
  { name: "Shekhar Dulal", role: "Regional Partner" }
]

export default function TeamPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

