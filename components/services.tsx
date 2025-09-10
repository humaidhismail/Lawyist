"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Users, FileText, Shield, Briefcase, Gavel } from "lucide-react"

const services = [
  {
    icon: Building,
    title: "Corporate Law",
    description: "Comprehensive corporate legal services including mergers, acquisitions, and compliance.",
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Expert guidance on employment contracts, workplace disputes, and HR compliance.",
  },
  {
    icon: FileText,
    title: "Contract Law",
    description: "Drafting, reviewing, and negotiating contracts to protect your business interests.",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    description: "Protecting your innovations, trademarks, and creative works with strategic IP law.",
  },
  {
    icon: Briefcase,
    title: "Business Formation",
    description: "Guiding entrepreneurs through entity selection, incorporation, and business setup.",
  },
  {
    icon: Gavel,
    title: "Litigation Support",
    description: "Experienced representation in commercial disputes and civil litigation matters.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Our Legal <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal solutions tailored to meet your unique needs and objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 border-border group hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-[#D4AF37]/10 w-fit group-hover:bg-[#D4AF37]/20 transition-colors border border-[#D4AF37]/20">
                    <service.icon className="h-8 w-8 text-[#D4AF37]" />
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
