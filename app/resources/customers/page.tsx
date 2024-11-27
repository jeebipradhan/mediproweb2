import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const customers = [
  {
    product: "Visual Medipro",
    customer: "Medi Surg Impex"
  },
  {
    product: "HM-Sys",
    customer: "Blue Cross Nursing Home"
  },
  {
    product: "eMediPro",
    customer: "Birat Hospital Pvt. Ltd."
  }
]

export default function CustomersPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Key Customers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{item.product}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">{item.customer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

