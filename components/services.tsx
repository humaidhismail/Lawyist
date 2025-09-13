"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Users, FileText, Shield, Briefcase, Gavel } from "lucide-react"
import type { ComponentType } from "react"

type IconType = ComponentType<{ className?: string }>

const services: { icon: IconType; title: string; description: string }[] = [
  { icon: Building, title: "Corporate Law", description: "Comprehensive corporate legal services including mergers, acquisitions, and compliance." },
  { icon: Users, title: "Employment Law", description: "Expert guidance on employment contracts, workplace disputes, and HR compliance." },
  { icon: FileText, title: "Contract Law", description: "Drafting, reviewing, and negotiating contracts to protect your business interests." },
  { icon: Shield, title: "Intellectual Property", description: "Protecting your innovations, trademarks, and creative works with strategic IP law." },
  { icon: Briefcase, title: "Business Formation", description: "Guiding entrepreneurs through entity selection, incorporation, and business setup." },
  { icon: Gavel, title: "Litigation Support", description: "Experienced representation in commercial disputes and civil litigation matters." },
]

function IconBadge({ Icon, index }: { Icon: IconType; index: number }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ y: 16, scale: 0.95 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.06 }}
      className="relative inline-flex items-center justify-center rounded-xl p-0"
      aria-hidden="true"
    >
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [-3, 0, -3] }}
        transition={prefersReducedMotion ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut", type: "tween" }}
        className="inline-flex items-center justify-center rounded-xl p-4
                   bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md
                   border border-[#D4AF37]/30 shadow-sm"
      >
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[#D4AF37]/25 pointer-events-none" />
        <Icon className="h-8 w-8 text-[#D4AF37]" />
      </motion.div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Sticky intro */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="mt-5 font-serif text-4xl md:text-5xl font-bold leading-tight">
                Expert Legal <span className="text-[#D4AF37]">Services</span>
              </h2>

              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Premium, client-focused counsel across corporate, contracts, IP, and litigation—designed to protect your interests and move your business forward.
              </p>
            </div>
          </div>

          {/* Services grid */}
          <div className="lg:col-span-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 20, scale: 0.98 }}
                  whileInView={{ y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <Card
                    tabIndex={0}
                    className="group h-full overflow-hidden rounded-2xl
                               border border-[#D4AF37]/30 bg-white/75 dark:bg-neutral-900/60
                               backdrop-blur-md transition-all duration-400
                               hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/15
                               focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                  >
                    <div className="h-1 w-full bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/70 to-transparent" />

                    <CardHeader className="text-left pb-3">
                      <div className="mb-4">
                        <IconBadge Icon={service.icon} index={i} />
                      </div>
                      <CardTitle className="text-xl font-serif transition-colors group-hover:text-[#D4AF37]">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <CardDescription className="leading-relaxed">
                        {service.description}
                      </CardDescription>

                      <div className="mt-5 flex items-center justify-between">
                        <motion.span
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-block h-2 w-10 rounded-full bg-[#D4AF37]/70"
                          aria-hidden="true"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
