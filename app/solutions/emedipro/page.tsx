import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function EMediProPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">eMediPro</h1>
        
        {/* Overview */}
        <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              eMedipro is a state-of-the-art, cloud-based hospital management system designed to transform healthcare facility operations. With a user-friendly interface, comprehensive features, and robust cloud architecture, it offers unparalleled flexibility, scalability, and security.
            </p>
          </CardContent>
        </Card>

        {/* Modules */}
        <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Registration & Billing" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Registration & Billing</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Patient registration</li>
                  <li>Service billing</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Outpatient Department (OPD)" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Outpatient Department (OPD)</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Streamlined patient registration</li>
                  <li>Efficient service billing</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Inpatient Department (IPD)" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Inpatient Department (IPD)</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>IPD registration</li>
                  <li>Bed management</li>
                  <li>Deposit management</li>
                  <li>Discharge process</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Revenue Sharing" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Revenue Sharing</h3>
                <p className="text-gray-600">Customizable revenue-sharing options to meet specific needs</p>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Insurance Integration" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Insurance Integration</h3>
                <p className="text-gray-600">Seamless HIB and SSF insurance integration</p>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Accounts Management" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Accounts Management</h3>
                <p className="text-gray-600">Comprehensive accounting features</p>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Electronic Medical Records (EMR)" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Electronic Medical Records (EMR)</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Patient charting</li>
                  <li>Medical history, diagnoses, treatments, progress notes, and lab results</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="E-Prescription" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">E-Prescription</h3>
                <p className="text-gray-600">Electronic transmission of prescriptions to pharmacies</p>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Interoperability" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Interoperability</h3>
                <p className="text-gray-600">Seamless data exchange with other healthcare systems</p>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Pharmacy Management" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Pharmacy Management</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Barcoded labeling and dispensing system</li>
                  <li>Inventory management system</li>
                  <li>Automated purchase orders for low stock</li>
                  <li>Expiry management</li>
                  <li>Pharmacy analytics (medication usage, stock turnover)</li>
                  <li>Online pharmacy store management</li>
                  <li>Multi-branch management</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Laboratory Management" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Laboratory Management</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>LIS integration</li>
                  <li>Automated machine synchronization</li>
                  <li>Report entry and verification</li>
                  <li>Online and SMS reporting</li>
                  <li>Compliance with Nepal government HMIS reports</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Telemedicine" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Telemedicine</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Virtual consultations</li>
                  <li>Appointment scheduling</li>
                  <li>Document sharing</li>
                  <li>Prescription generation</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Asset & Inventory Management" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Asset & Inventory Management</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Equipment and asset inventory tracking</li>
                  <li>Depreciation management</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image src="/placeholder.svg?height=200&width=300" alt="Attendance & Payroll System" width={300} height={200} className="rounded-lg" />
                <h3 className="font-semibold text-lg">Attendance & Payroll System</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Biometric attendance tracking</li>
                  <li>Enhanced security measures</li>
                  <li>Automated overtime calculations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Platform Independence: Tailored modules to meet customer requirements.",
                "User-Friendly Interface: Simplified adaptation for healthcare staff.",
                "Seamless Integration: Works with existing hospital infrastructures.",
                "Certified Billing: IRD-certified automatic HIB and SSF insurance billing.",
                "Paperless Operations: Digital record accessibility via a web-based interface."
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Why Choose eMedipro */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Why Choose eMedipro?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              eMedipro simplifies hospital management while ensuring efficiency, accuracy, and compliance with industry standards. By leveraging cloud technology, it empowers healthcare facilities to provide better patient care while optimizing operational workflows.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

