"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, BookOpen } from "lucide-react"
import { AnimatedCourthouse } from "./animated-courthouse"
import BookConsultationModal from "@/components/BookConsultationModal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedCourthouse />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              Expert Legal Counsel
              <span className="block text-primary">You Can Trust</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Providing clarity, confidence, and results in every legal matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {/* Schedule Consultation -> opens modal */}
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A1A1A] px-8 py-4 text-lg group font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            {/* Learn More -> #services */}
            <Link href="#services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#B8941F] text-[#B8941F] hover:bg-[#B8941F] hover:text-white px-8 py-4 text-lg bg-transparent font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <Scale className="h-6 w-6 text-[#B8941F]" />
              <span className="text-lg">Legal Excellence</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <BookOpen className="h-6 w-6 text-[#B8941F]" />
              <span className="text-lg">Strategic Consultancy</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal mount */}
      {isModalOpen && <BookConsultationModal onClose={() => setIsModalOpen(false)} />}
    </section>
  )
}
