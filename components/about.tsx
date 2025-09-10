"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users, Star } from "lucide-react"

const stats = [
  {
    icon: Clock,
    number: "20+",
    label: "Years Experience",
  },
  {
    icon: Users,
    number: "500+",
    label: "Clients Served",
  },
  {
    icon: Award,
    number: "95%",
    label: "Success Rate",
  },
  {
    icon: Star,
    number: "4.9",
    label: "Client Rating",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Trusted Legal Partners
              <span className="block text-primary">Since 2003</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sterling & Associates has been at the forefront of legal excellence for over two decades. Our commitment
              to providing personalized, strategic legal solutions has earned us the trust of businesses and individuals
              across diverse industries.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in building lasting relationships with our clients, understanding their unique challenges, and
              delivering results that exceed expectations. Our team combines deep legal expertise with innovative
              thinking to navigate today's complex legal landscape.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Client-focused approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Proven track record of success</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Innovative legal solutions</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-md transition-shadow duration-300 border-border">
                  <CardContent className="p-0">
                    <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit mx-auto">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-serif font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
