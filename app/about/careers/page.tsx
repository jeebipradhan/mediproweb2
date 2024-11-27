import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Code } from 'lucide-react'

const jobOpenings = [
  {
    title: "Operation Manager",
    icon: Briefcase,
    description: "We are seeking an experienced Operation Manager to oversee and optimize our day-to-day operations, ensuring efficiency and quality in our software development and delivery processes.",
    responsibilities: [
      "Develop and implement operational strategies to improve productivity and quality",
      "Manage and coordinate team activities across different projects",
      "Ensure adherence to company policies and industry standards",
      "Analyze and report on operational performance, recommending improvements",
      "Collaborate with other departments to align operations with company goals"
    ],
    requirements: [
      "Bachelor's degree in Business Administration, Computer Science, or related field",
      "5+ years of experience in operations management, preferably in the software industry",
      "Strong leadership and communication skills",
      "Proficiency in project management tools and methodologies",
      "Excellent problem-solving and decision-making abilities"
    ]
  },
  {
    title: "Web App Developer",
    icon: Code,
    description: "We are looking for a talented Web App Developer to join our team and contribute to the development of innovative healthcare software solutions.",
    responsibilities: [
      "Design, develop, and maintain web applications using modern frameworks and technologies",
      "Collaborate with cross-functional teams to define and implement new features",
      "Ensure the performance, quality, and responsiveness of applications",
      "Participate in code reviews and contribute to technical documentation",
      "Stay up-to-date with emerging trends and technologies in web development"
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or related field",
      "3+ years of experience in web application development",
      "Proficiency in JavaScript, TypeScript, and modern frameworks (e.g., React, Next.js)",
      "Strong understanding of web technologies and best practices",
      "Experience with RESTful APIs and database technologies",
      "Familiarity with version control systems (e.g., Git)"
    ]
  }
]

export default function CareersPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Careers at MediPro</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Join our team and help shape the future of healthcare software solutions
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <job.icon className="h-6 w-6 text-blue-600 mr-2" />
                  {job.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <h3 className="font-semibold text-lg mb-2">Key Responsibilities:</h3>
                <ul className="list-disc list-inside mb-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 mb-1">{resp}</li>
                  ))}
                </ul>
                <h3 className="font-semibold text-lg mb-2">Requirements:</h3>
                <ul className="list-disc list-inside mb-6">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="text-gray-600 mb-1">{req}</li>
                  ))}
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see a position that fits?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals to join our team. Send us your resume, and we'll keep it on file for future opportunities.
          </p>
          <Button variant="outline">Submit Your Resume</Button>
        </div>
      </div>
    </div>
  )
}

