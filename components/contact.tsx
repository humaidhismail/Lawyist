"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      // Deep teal accent for button + highlights
      style={{ ["--accent" as any]: "#073C3C" }}
      className="py-24 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your legal needs? Reach out today and let us help
            guide you with trusted expertise.
          </p>
        </motion.div>

        {/* Contact Form only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="rounded-2xl border [border-color:var(--accent)/0.2] bg-white/90 backdrop-blur-sm shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="First Name" className="border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Last Name" className="border-border" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="mail@example.com"
                  className="border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="123-4567"
                  className="border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your legal needs..."
                  rows={4}
                  className="border-border"
                />
              </div>
              <Button className="w-full [background-color:var(--accent)] hover:[background-color:color-mix(in oklab,var(--accent) 90%, black 10%)] text-white group">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
