"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Home,
  Plus,
  Building2,
  Users,
  MessageSquare,
  Settings,
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  Square,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
  DollarSign,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DashboardHeader } from "@/components/dashboard-header"

// Mock data for landlord's properties
const myProperties = [
  {
    id: 1,
    title: "Luxury 3 Bedroom Apartment",
    location: "Victoria Island, Lagos",
    price: 3500000,
    beds: 3,
    baths: 2,
    sqm: 150,
    status: "active",
    agent: { name: "Adebayo Johnson", avatar: "AJ" },
    views: 234,
    inquiries: 12,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Modern 2 Bedroom Flat",
    location: "Lekki Phase 1, Lagos",
    price: 2200000,
    beds: 2,
    baths: 2,
    sqm: 95,
    status: "active",
    agent: { name: "Chioma Okafor", avatar: "CO" },
    views: 156,
    inquiries: 8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Spacious 4 Bedroom Duplex",
    location: "Ikoyi, Lagos",
    price: 5500000,
    beds: 4,
    baths: 3,
    sqm: 220,
    status: "pending",
    agent: null,
    views: 0,
    inquiries: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const agentApplications = [
  {
    id: 1,
    agent: { name: "Emeka Nwosu", avatar: "EN", rating: 4.8, properties: 15 },
    property: "Spacious 4 Bedroom Duplex",
    appliedAt: "2 hours ago",
    message: "I have extensive experience managing luxury properties in Ikoyi...",
  },
  {
    id: 2,
    agent: { name: "Funke Adeyemi", avatar: "FA", rating: 4.6, properties: 22 },
    property: "Spacious 4 Bedroom Duplex",
    appliedAt: "5 hours ago",
    message: "With over 5 years in property management, I can help you find...",
  },
]

const stats = [
  { label: "Total Properties", value: "3", icon: Building2, color: "bg-primary" },
  { label: "Active Listings", value: "2", icon: CheckCircle, color: "bg-secondary" },
  { label: "Total Views", value: "390", icon: Eye, color: "bg-accent" },
  { label: "Monthly Revenue", value: "5.7M", icon: DollarSign, color: "bg-primary" },
]

export default function LandlordDashboard() {
  const [activeTab, setActiveTab] = useState<"properties" | "applications">("properties")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center border-3 border-foreground bg-primary shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] lg:hidden"
      >
        {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-foreground/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 z-40 h-screen w-64 border-r-3 border-foreground bg-card pt-20 transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-full flex-col px-4 py-6">
          <div className="mb-8 border-3 border-foreground bg-accent p-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
            <p className="text-sm font-medium text-foreground">Logged in as</p>
            <p className="text-lg font-bold text-foreground">Chief Okonkwo</p>
            <p className="text-sm text-muted-foreground">Landlord</p>
          </div>

          <nav className="flex-1 space-y-2">
            <Link
              href="/dashboard/landlord"
              className="flex items-center gap-3 border-3 border-foreground bg-primary p-3 font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
              onClick={() => setSidebarOpen(false)}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/landlord/properties"
              className="flex items-center gap-3 border-3 border-foreground bg-card p-3 font-bold transition-all hover:bg-muted hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
              onClick={() => setSidebarOpen(false)}
            >
              <Building2 className="h-5 w-5" />
              My Properties
            </Link>
            <Link
              href="/dashboard/landlord/agents"
              className="flex items-center gap-3 border-3 border-foreground bg-card p-3 font-bold transition-all hover:bg-muted hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
              onClick={() => setSidebarOpen(false)}
            >
              <Users className="h-5 w-5" />
              My Agents
            </Link>
            <Link
              href="/messages"
              className="flex items-center gap-3 border-3 border-foreground bg-card p-3 font-bold transition-all hover:bg-muted hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
              onClick={() => setSidebarOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              Messages
              <span className="ml-auto flex h-6 w-6 items-center justify-center border-2 border-foreground bg-destructive text-xs font-bold text-destructive-foreground">
                3
              </span>
            </Link>
            <Link
              href="/dashboard/landlord/settings"
              className="flex items-center gap-3 border-3 border-foreground bg-card p-3 font-bold transition-all hover:bg-muted hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
              onClick={() => setSidebarOpen(false)}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-h-screen pt-20 lg:ml-64">
        <div className="p-4 md:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">Welcome back, Chief!</h1>
              <p className="mt-2 text-sm text-muted-foreground md:text-base lg:text-lg">
                Here&apos;s what&apos;s happening with your properties
              </p>
            </div>
            <Link href="/dashboard/landlord/properties/new">
              <Button className="w-full border-3 border-foreground bg-primary px-4 py-4 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] md:w-auto md:px-6 md:py-6 md:text-lg">
                <Plus className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Add Property
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="mb-6 grid grid-cols-2 gap-3 md:mb-8 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="border-3 border-foreground p-3 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] md:p-6"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center border-3 border-foreground md:h-14 md:w-14 ${stat.color}`}
                  >
                    <stat.icon className="h-5 w-5 md:h-7 md:w-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-muted-foreground md:text-sm">{stat.label}</p>
                    <p className="truncate text-xl font-bold text-foreground md:text-3xl">{stat.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-6 flex flex-wrap gap-2 md:gap-4">
            <button
              onClick={() => setActiveTab("properties")}
              className={`border-3 border-foreground px-3 py-2 text-sm font-bold transition-all md:px-6 md:py-3 md:text-base ${
                activeTab === "properties"
                  ? "bg-foreground text-background shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                  : "bg-card hover:bg-muted"
              }`}
            >
              Properties
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`border-3 border-foreground px-3 py-2 text-sm font-bold transition-all md:px-6 md:py-3 md:text-base ${
                activeTab === "applications"
                  ? "bg-foreground text-background shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                  : "bg-card hover:bg-muted"
              }`}
            >
              Applications
              {agentApplications.length > 0 && (
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center border-2 border-foreground bg-destructive text-xs text-destructive-foreground md:h-6 md:w-6">
                  {agentApplications.length}
                </span>
              )}
            </button>
          </div>

          {/* Properties Tab */}
          {activeTab === "properties" && (
            <div className="grid gap-6">
              {myProperties.map((property) => (
                <Card
                  key={property.id}
                  className="border-3 border-foreground p-0 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                >
                  <div className="flex">
                    {/* Property Image */}
                    <div className="relative h-48 w-72 flex-shrink-0 border-r-3 border-foreground bg-muted">
                      <div className="flex h-full items-center justify-center">
                        <Building2 className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <div
                        className={`absolute left-3 top-3 border-2 border-foreground px-3 py-1 text-sm font-bold ${
                          property.status === "active"
                            ? "bg-secondary"
                            : property.status === "pending"
                              ? "bg-accent"
                              : "bg-muted"
                        }`}
                      >
                        {property.status === "active" ? "Active" : property.status === "pending" ? "Pending Agent" : "Inactive"}
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{property.title}</h3>
                          <p className="mt-1 flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {property.location}
                          </p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="border-3 border-foreground bg-transparent"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="border-3 border-foreground">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" /> Edit Property
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" /> View Listing
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className="mb-4 flex gap-6">
                        <span className="flex items-center gap-1 text-sm font-medium">
                          <Bed className="h-4 w-4" /> {property.beds} Beds
                        </span>
                        <span className="flex items-center gap-1 text-sm font-medium">
                          <Bath className="h-4 w-4" /> {property.baths} Baths
                        </span>
                        <span className="flex items-center gap-1 text-sm font-medium">
                          <Square className="h-4 w-4" /> {property.sqm} sqm
                        </span>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <p className="text-2xl font-bold text-primary">
                            ₦{property.price.toLocaleString()}
                            <span className="text-sm font-normal text-muted-foreground">/year</span>
                          </p>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" /> {property.views} views
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" /> {property.inquiries} inquiries
                            </span>
                          </div>
                        </div>

                        {property.agent ? (
                          <div className="flex items-center gap-3 border-3 border-foreground bg-secondary/30 px-4 py-2">
                            <div className="flex h-10 w-10 items-center justify-center border-2 border-foreground bg-secondary font-bold">
                              {property.agent.avatar}
                            </div>
                            <div>
                              <p className="text-sm font-bold">{property.agent.name}</p>
                              <p className="text-xs text-muted-foreground">Managing Agent</p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 border-3 border-dashed border-foreground bg-accent/30 px-4 py-2">
                            <Clock className="h-5 w-5" />
                            <span className="font-medium">Awaiting Agent</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Agent Applications Tab */}
          {activeTab === "applications" && (
            <div className="grid gap-6">
              {agentApplications.length === 0 ? (
                <Card className="border-3 border-foreground p-12 text-center shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                  <Users className="mx-auto h-16 w-16 text-muted-foreground" />
                  <h3 className="mt-4 text-xl font-bold">No Applications Yet</h3>
                  <p className="mt-2 text-muted-foreground">
                    When agents apply to manage your properties, they&apos;ll appear here.
                  </p>
                </Card>
              ) : (
                agentApplications.map((application) => (
                  <Card
                    key={application.id}
                    className="border-3 border-foreground p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-16 w-16 items-center justify-center border-3 border-foreground bg-accent text-xl font-bold">
                          {application.agent.avatar}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{application.agent.name}</h3>
                          <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4" /> {application.agent.rating} rating
                            </span>
                            <span>{application.agent.properties} properties managed</span>
                          </div>
                          <p className="mt-2 text-sm">
                            Applied for: <span className="font-bold">{application.property}</span>
                          </p>
                          <p className="mt-2 text-muted-foreground">&quot;{application.message}&quot;</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <span className="text-sm text-muted-foreground">{application.appliedAt}</span>
                        <div className="flex gap-2">
                          <Button className="border-3 border-foreground bg-secondary font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Accept
                          </Button>
                          <Button
                            variant="outline"
                            className="border-3 border-foreground bg-transparent font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Decline
                          </Button>
                          <Button
                            variant="outline"
                            className="border-3 border-foreground bg-transparent font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                          >
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
