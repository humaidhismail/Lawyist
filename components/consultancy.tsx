"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, Users, Target, ArrowRight } from "lucide-react"
import BookConsultationModal from "@/components/BookConsultationModal"

const consultancyServices = [
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "Develop comprehensive legal strategies aligned with your business objectives and risk tolerance.",
  },
  {
    icon: Users,
    title: "Team Training",
    description:
      "Educational workshops and training sessions to keep your team informed on legal compliance.",
  },
  {
    icon: BookOpen,
    title: "Policy Development",
    description:
      "Create robust policies and procedures to minimize legal risks and ensure regulatory compliance.",
  },
  {
    icon: Calendar,
    title: "Ongoing Support",
    description:
      "Regular consultations and legal health checks to maintain optimal legal positioning.",
  },
]

export function Consultancy() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="consultancy" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Legal Consultancy
              <span className="block text-primary">& Strategic Guidance</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Beyond traditional legal services, we offer comprehensive consultancy to help you navigate complex legal
              landscapes and make informed strategic decisions.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Proactive legal risk assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Customized compliance frameworks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Strategic business planning support</span>
              </div>
            </div>

            {/* Open modal on click */}
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Book Consultancy Session
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {consultancyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300 border-border">
                  <CardHeader className="pb-3">
                    <div className="mb-3 p-2 rounded-lg bg-primary/10 w-fit">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-serif text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal mount */}
      {isModalOpen && <BookConsultationModal onClose={() => setIsModalOpen(false)} />}
    </section>
  )
}
