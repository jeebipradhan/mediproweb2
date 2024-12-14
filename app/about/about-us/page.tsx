import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUsPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">About Us</h1>
        
        {/* Business Philosophy */}
        <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Business Philosophy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              At MediPro, our business philosophy centers on delivering exceptional service through unwavering commitment and expertise. We are guided by the RAFT Principle:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Responsibility</li>
              <li>Accountability</li>
              <li>Fairness</li>
              <li>Transparency</li>
            </ul>
            <p className="text-gray-600">
              We believe in the continuous development of both our personnel and software solutions, driving us toward excellence and innovation in everything we do.
            </p>
          </CardContent>
        </Card>

        {/* Company Overview */}
        <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Company Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Established in 1991, MediPro was founded to revolutionize business data entry, ensuring speed, accuracy, and efficiency in delivering financial and management insights for the medicine distribution industry.
            </p>
            <p className="text-gray-600">
              Since its inception, MediPro has remained exclusively focused on Nepal's niche market of medicine and healthcare businesses. Our expertise spans inventory control, billing, accounting, and management information systems, serving a broad spectrum of clients, including medicine distributors, hospitals, and nursing homes.
            </p>
          </CardContent>
        </Card>

        {/* A Legacy of Excellence */}
        <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">A Legacy of Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Over the years, MediPro has established itself as a trusted name in Nepal's IT industry, recognized for its deep understanding and specialized expertise in the medicine and healthcare sectors.
            </p>
            <h3 className="text-xl font-semibold mb-2">Pioneering Solutions:</h3>
            <p className="text-gray-600 mb-4">
              MediPro is proud to be Nepal's first domestic software company specializing in comprehensive business software for the medicine industry. Our diverse clientele includes factories, super stockists, stockists, retailers, and hospitals.
            </p>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Capabilities:</h3>
            <p className="text-gray-600 mb-4">
              Our software solutions are tailored to the unique needs of the healthcare and medicine sectors, offering a complete suite of modules, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Billing Systems for Medicine and Healthcare</li>
              <li>Laboratory Reporting with Machine Integration</li>
              <li>Pharmacy Management</li>
              <li>Inventory Control</li>
              <li>Asset Management</li>
              <li>Time Punch and Payroll Systems</li>
              <li>Hospital-specific HMIS Reporting</li>
              <li>Many more customizable modules</li>
            </ul>
            <p className="text-gray-600">
              By combining innovation, practicality, and a focus on client success, MediPro continues to lead the way in healthcare and business automation in Nepal.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

