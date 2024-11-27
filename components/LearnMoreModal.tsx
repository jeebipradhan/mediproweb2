'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function LearnMoreModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
          Learn more
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>About MediPro</DialogTitle>
          <DialogDescription>
            Learn more about our business philosophy and company history
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-6 max-h-[calc(100vh-200px)] pr-4">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-medium text-gray-900">Business Philosophy</h3>
              <p className="mt-2 text-sm text-gray-500">
                At MediPro, our business philosophy centers on delivering exceptional service through unwavering commitment and expertise. We are guided by the RAFT Principle:
              </p>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-500">
                <li>Responsibility</li>
                <li>Accountability</li>
                <li>Fairness</li>
                <li>Transparency</li>
              </ul>
              <p className="mt-2 text-sm text-gray-500">
                We believe in the continuous development of both our personnel and software solutions, driving us toward excellence and innovation in everything we do.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-gray-900">Company Overview</h3>
              <p className="mt-2 text-sm text-gray-500">
                Established in 1991, MediPro was founded to revolutionize business data entry, ensuring speed, accuracy, and efficiency in delivering financial and management insights for the medicine distribution industry.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Since its inception, MediPro has remained exclusively focused on Nepal's niche market of medicine and healthcare businesses. Our expertise spans inventory control, billing, accounting, and management information systems, serving a broad spectrum of clients, including medicine distributors, hospitals, and nursing homes.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-gray-900">A Legacy of Excellence</h3>
              <p className="mt-2 text-sm text-gray-500">
                Over the years, MediPro has established itself as a trusted name in Nepal's IT industry, recognized for its deep understanding and specialized expertise in the medicine and healthcare sectors.
              </p>
              <h4 className="mt-4 text-base font-medium text-gray-900">Pioneering Solutions:</h4>
              <p className="mt-2 text-sm text-gray-500">
                MediPro is proud to be Nepal's first domestic software company specializing in comprehensive business software for the medicine industry. Our diverse clientele includes factories, super stockists, stockists, retailers, and hospitals.
              </p>
              <h4 className="mt-4 text-base font-medium text-gray-900">Comprehensive Capabilities:</h4>
              <p className="mt-2 text-sm text-gray-500">
                Our software solutions are tailored to the unique needs of the healthcare and medicine sectors, offering a complete suite of modules, including:
              </p>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-500">
                <li>Billing Systems for Medicine and Healthcare</li>
                <li>Laboratory Reporting with Machine Integration</li>
                <li>Pharmacy Management</li>
                <li>Inventory Control</li>
                <li>Asset Management</li>
                <li>Time Punch and Payroll Systems</li>
                <li>Hospital-specific HMIS Reporting</li>
                <li>Many more customizable modules</li>
              </ul>
              <p className="mt-2 text-sm text-gray-500">
                By combining innovation, practicality, and a focus on client success, MediPro continues to lead the way in healthcare and business automation in Nepal.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

