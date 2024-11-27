import { Card } from "@/components/ui/card"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-100 mt-auto">
      <Card className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            "Easy as MediPro."
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Our commitment to simplicity and efficiency in every solution we provide.
          </p>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} MediPro Computers (Pvt.) Ltd. All rights reserved.
        </div>
      </Card>
    </footer>
  )
}

