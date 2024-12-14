import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, User } from 'lucide-react'

const offices = [
  {
    name: "Kathmandu Head Office",
    address: "Komal Complex, Putalisadak, 1588 Ramshah Path, Kathmandu.",
    phone: "01-5970-396",
    email: ["medipro@mediprocomputers.com"],
  },
]

const contacts = [
  {
    name: "Kishan Pandey",
    region: "Western, Mid-Western, Far-Western",
    phone: ["980-202-0240", "985-802-0240"],
    email: "hrishavpandey@gmail.com",
  },
  {
    name: "Kumar Khatiwada",
    region: "Eastern",
    phone: ["980-202-0148", "985-202-0148"],
    email: "kumar.medipro@gmail.com",
  },
  {
    name: "Ashish Gurung",
    region: "Gandaki Province",
    phone: ["980-202-0194", "985-602-0194"],
    email: "hangdudh@gmail.com",
  },
  {
    name: "Shekhar Dulal",
    region: "KAVRE",
    phone: ["985-108-1595", "980-205-0888"],
    email: "shekhardulal@gmail.com",
  },
  {
    name: "Anil Shrestha",
    region: "Narayangarh",
    phone: ["985-506-0164"],
    email: "sthanil.medipro@gmail.com",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Contact Us</h1>
        
        {/* Head Office */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Head Office</h2>
          {offices.map((office, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{office.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p>{office.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <p>{office.phone}</p>
                </div>
                {office.email.map((email, emailIndex) => (
                  <div key={emailIndex} className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <p>{email}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Contacts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Regional Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{contact.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <p>{contact.region}</p>
                  </div>
                  {contact.phone.map((phone, phoneIndex) => (
                    <div key={phoneIndex} className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <p>{phone}</p>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <p>{contact.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

       {/* Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h2>
          <Card>
            <CardContent className="p-0">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2400069793905!2d85.32242731506156!3d27.70711798279492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0a4b5b5a3%3A0x3c8c2b9a7b7a6e8a!2sPutalisadak%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1621234567890!5m2!1sen!2snp" 
                  width="100%" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

