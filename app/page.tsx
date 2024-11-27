import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LearnMoreModal } from '@/components/LearnMoreModal'
import { CheckCircle, BarChart, Stethoscope, Pill, Clock, FileText } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Empowering Healthcare</span>
            <span className="block text-blue-600">and Business Since 1991</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            MediPro is a pioneer in innovative software solutions, specializing in the automation of medicine and healthcare businesses.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <LearnMoreModal />
          </div>
        </div>

        {/* About MediPro Section */}
        <div className="mt-24 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-12 sm:px-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About MediPro</h2>
            <p className="mt-6 text-lg text-gray-600">
              For over three decades, we've been committed to transforming operations, optimizing inventory control, enhancing financial management, and delivering actionable insights through advanced MIS reporting. Our solutions are trusted by businesses and healthcare facilities across Nepal.
            </p>
          </div>
        </div>

        {/* Comprehensive and Flexible Solutions Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">Comprehensive and Flexible Solutions</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Our integrated suite of software is designed to streamline and simplify your operations, offering flexibility to meet diverse needs and budgets.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "OPD/IPD Billing with Insurance Claim Management", icon: FileText },
              { title: "Pharmacy Management", icon: Pill },
              { title: "Laboratory Machine Integration for Seamless Report Generation", icon: Stethoscope },
              { title: "Inventory Control and Asset Management", icon: BarChart },
              { title: "Time Punch and Payroll Systems", icon: Clock },
              { title: "Hospital-specific MIS Reports and HMIS Compliance", icon: FileText }
            ].map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <module.icon className="h-6 w-6 text-blue-600 mr-2" />
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Each module can work independently or as part of a cohesive system, ensuring you have the tools to achieve your operational goals.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose MediPro Section */}
        <div className="mt-24 bg-blue-50 rounded-lg overflow-hidden">
          <div className="px-6 py-12 sm:px-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose MediPro?</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <p className="text-lg text-gray-600">
                At MediPro, we blend cutting-edge technology with practical functionality. Our team of experienced developers and industry experts delivers user-friendly software solutions tailored to the unique challenges of healthcare and business management.
              </p>
              <p className="text-lg text-gray-600">
                From our headquarters in Kathmandu, we serve clients nationwide through a trusted network of agents, ensuring exceptional support and reliability every step of the way.
              </p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Cutting-edge technology",
                "Practical functionality",
                "Experienced team",
                "Tailored solutions",
                "Nationwide support",
                "Reliable service"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

