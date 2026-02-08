"use client"

import Link from "next/link"
import {
  Home,
  Building2,
  CreditCard,
  MessageSquare,
  Settings,
  Calendar,
  CheckCircle,
  MapPin,
  FileText,
  Download,
  User,
  Phone,
  Mail,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"

const leaseDetails = {
  property: {
    title: "Modern 3 Bedroom Flat",
    address: "15 Admiralty Way, Lekki Phase 1, Lagos",
    type: "Apartment",
    beds: 3,
    baths: 2,
    sqm: 120,
  },
  lease: {
    startDate: "Jan 1, 2025",
    endDate: "Dec 31, 2025",
    duration: "12 months",
    annualRent: 2580000,
    monthlyPayment: 215000,
    deposit: 516000,
    status: "Active",
  },
  landlord: {
    name: "Chief Emeka Okonkwo",
    company: "Okonkwo Properties Ltd",
    phone: "+234 803 456 7890",
    email: "chief@okonkwoproperties.com",
  },
  agent: {
    name: "Adebayo Johnson",
    phone: "+234 802 345 6789",
    email: "adebayo.j@sheltaflex.com",
    rating: 4.8,
  },
  documents: [
    { name: "Lease Agreement", date: "Jan 1, 2025", type: "PDF" },
    { name: "Property Inspection Report", date: "Dec 28, 2024", type: "PDF" },
    { name: "Payment Schedule", date: "Jan 1, 2025", type: "PDF" },
    { name: "House Rules", date: "Jan 1, 2025", type: "PDF" },
  ],
  paymentProgress: {
    totalPaid: 1290000,
    totalOwed: 2580000,
    paymentsCompleted: 6,
    totalPayments: 12,
  },
}

export default function TenantLeasePage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const progressPercentage = (leaseDetails.paymentProgress.totalPaid / leaseDetails.paymentProgress.totalOwed) * 100

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r-3 border-foreground bg-card pt-20">
        <div className="flex h-full flex-col px-4 py-6">
          <div className="mb-8 border-3 border-foreground bg-secondary p-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
            <p className="text-sm font-medium text-foreground">Logged in as</p>
            <p className="text-lg font-bold text-foreground">Ngozi Adekunle</p>
            <p className="text-sm text-muted-foreground">Tenant</p>
          </div>

          <nav className="flex-1 space-y-2">
            <Link
              href="/dashboard/tenant"
              className="flex items-center gap-3 border-3 border-foreground bg-card p-3 font-bold transition-all hover:bg-muted hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/tenant/payments"
              className="flex items-center gap-3 border-3 border-foreground bg-card p-3 font-bold transition-all hover:bg-muted hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
            >
              <CreditCard className="h-5 w-5" />
              Payments
            </Link>
            <Link
              href="/dashboard/tenant/lease"
              className="flex items-center gap-3 border-3 border-foreground bg-primary p-3 font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
            >
              <FileText className="h-5 w-5" />
              My Lease
            </Link>
            <Link
              href="/properties"
              className="flex items-center gap-3 border-3 border-foreground bg-card p-3 font-bold transition-all hover:bg-muted hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
            >
              <Building2 className="h-5 w-5" />
              Browse Properties
            </Link>
            <Link
              href="/messages"
              className="flex items-center gap-3 border-3 border-foreground bg-card p-3 font-bold transition-all hover:bg-muted hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
            >
              <MessageSquare className="h-5 w-5" />
              Messages
              <span className="ml-auto flex h-6 w-6 items-center justify-center border-2 border-foreground bg-destructive text-xs font-bold text-destructive-foreground">
                2
              </span>
            </Link>
            <Link
              href="/dashboard/tenant/settings"
              className="flex items-center gap-3 border-3 border-foreground bg-card p-3 font-bold transition-all hover:bg-muted hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen pt-20">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Lease</h1>
              <p className="mt-1 text-muted-foreground">View your lease details and documents</p>
            </div>
            <div className="flex items-center gap-2 border-3 border-foreground bg-secondary px-4 py-2 font-bold">
              <CheckCircle className="h-5 w-5" />
              Active Lease
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Property Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-3 border-foreground p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                <h3 className="mb-4 text-lg font-bold">Property Details</h3>
                <div className="mb-4 border-3 border-foreground bg-muted p-8">
                  <div className="flex items-center justify-center">
                    <Building2 className="h-20 w-20 text-muted-foreground" />
                  </div>
                </div>
                <h4 className="text-xl font-bold">{leaseDetails.property.title}</h4>
                <p className="mt-1 flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {leaseDetails.property.address}
                </p>
                <div className="mt-4 flex gap-4">
                  <span className="border-2 border-foreground bg-muted px-3 py-1 text-sm font-bold">
                    {leaseDetails.property.beds} Beds
                  </span>
                  <span className="border-2 border-foreground bg-muted px-3 py-1 text-sm font-bold">
                    {leaseDetails.property.baths} Baths
                  </span>
                  <span className="border-2 border-foreground bg-muted px-3 py-1 text-sm font-bold">
                    {leaseDetails.property.sqm} sqm
                  </span>
                </div>
              </Card>

              {/* Lease Terms */}
              <Card className="border-3 border-foreground p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                <h3 className="mb-4 text-lg font-bold">Lease Terms</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border-3 border-foreground bg-muted/50 p-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Start Date</span>
                    </div>
                    <p className="mt-1 font-bold">{leaseDetails.lease.startDate}</p>
                  </div>
                  <div className="border-3 border-foreground bg-muted/50 p-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">End Date</span>
                    </div>
                    <p className="mt-1 font-bold">{leaseDetails.lease.endDate}</p>
                  </div>
                  <div className="border-3 border-foreground bg-muted/50 p-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <p className="mt-1 font-bold">{leaseDetails.lease.duration}</p>
                  </div>
                  <div className="border-3 border-foreground bg-primary/10 p-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CreditCard className="h-4 w-4" />
                      <span className="text-sm">Monthly Payment</span>
                    </div>
                    <p className="mt-1 font-bold text-primary">{formatCurrency(leaseDetails.lease.monthlyPayment)}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-muted-foreground">Payment Progress</span>
                    <span className="font-bold">
                      {leaseDetails.paymentProgress.paymentsCompleted}/{leaseDetails.paymentProgress.totalPayments} payments
                    </span>
                  </div>
                  <div className="h-6 border-3 border-foreground bg-muted">
                    <div
                      className="h-full bg-secondary transition-all"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                    <span>{formatCurrency(leaseDetails.paymentProgress.totalPaid)} paid</span>
                    <span>{formatCurrency(leaseDetails.paymentProgress.totalOwed)} total</span>
                  </div>
                </div>
              </Card>

              {/* Documents */}
              <Card className="border-3 border-foreground p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                <h3 className="mb-4 text-lg font-bold">Lease Documents</h3>
                <div className="space-y-3">
                  {leaseDetails.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-3 border-foreground bg-card p-4 transition-all hover:bg-muted"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center border-2 border-foreground bg-muted">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">{doc.date}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-2 border-foreground bg-transparent font-bold"
                      >
                        <Download className="mr-1 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Agent */}
              <Card className="border-3 border-foreground p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                <h3 className="mb-4 text-lg font-bold">Your Agent</h3>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center border-3 border-foreground bg-accent text-xl font-bold">
                    AJ
                  </div>
                  <div>
                    <p className="font-bold">{leaseDetails.agent.name}</p>
                    <p className="text-sm text-muted-foreground">Property Agent</p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="text-sm font-bold">{leaseDetails.agent.rating}</span>
                      <span className="text-accent">★</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 border-t-2 border-foreground pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{leaseDetails.agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{leaseDetails.agent.email}</span>
                  </div>
                </div>
                <Link href="/messages">
                  <Button className="mt-4 w-full border-3 border-foreground bg-secondary font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Agent
                  </Button>
                </Link>
              </Card>

              {/* Landlord */}
              <Card className="border-3 border-foreground p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                <h3 className="mb-4 text-lg font-bold">Landlord</h3>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center border-3 border-foreground bg-primary text-xl font-bold">
                    <User className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-bold">{leaseDetails.landlord.name}</p>
                    <p className="text-sm text-muted-foreground">{leaseDetails.landlord.company}</p>
                  </div>
                </div>
                <div className="space-y-2 border-t-2 border-foreground pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{leaseDetails.landlord.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{leaseDetails.landlord.email}</span>
                  </div>
                </div>
              </Card>

              {/* Need Help */}
              <Card className="border-3 border-foreground bg-accent/30 p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                <h3 className="mb-2 font-bold">Need Help?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Having issues with your lease or property? Contact our support team.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-3 border-foreground bg-background font-bold"
                >
                  Contact Support
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
