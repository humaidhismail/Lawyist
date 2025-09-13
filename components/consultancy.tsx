"use client"

import { useState, ComponentType } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BookOpen,
  Calendar,
  Users,
  Target,
  ArrowRight,
} from "lucide-react"
import BookConsultationModal from "@/components/BookConsultationModal"

type IconType = ComponentType<{ className?: string }>

const consultancyServices: { icon: IconType; title: string; description: string }[] = [
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

function AccentIconBadge({ Icon, index = 0 }: { Icon: IconType; index?: number }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={{ y: 16, scale: 0.96 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
        delay: index * 0.06,
      }}
      className="relative inline-flex items-center justify-center rounded-xl p-0"
      aria-hidden="true"
    >
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [-3, 0, -3] }}
        transition={
          prefersReducedMotion
            ? {}
            : { duration: 3, repeat: Infinity, ease: "easeInOut", type: "tween" }
        }
        className="inline-flex items-center justify-center rounded-xl p-4
                   bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md
                   border [border-color:var(--accent)/0.3] shadow-sm"
      >
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset [--tw-ring-color:var(--accent)/0.25] pointer-events-none" />
        <Icon className="h-7 w-7 [color:var(--accent)]" />
      </motion.div>
    </motion.div>
  )
}

export function Consultancy() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="consultancy"
      style={{ ["--accent" as any]: "#073C3C" }}
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <h2 className="mt-5 font-serif text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Legal Consultancy
                <span className="block [color:var(--accent)]">& Strategic Guidance</span>
              </h2>

              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Beyond traditional legal services, we help you navigate complex
                landscapes and make confident, strategic decisions.
              </p>

              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="mt-8 [background-color:var(--accent)] hover:[background-color:color-mix(in oklab,var(--accent) 90%, black 10%)] text-white group focus:outline-none focus:ring-2 focus:[--tw-ring-color:var(--accent)/0.5]"
              >
                Book Consultancy Session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {consultancyServices.map((service, index) => (
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
                               border [border-color:var(--accent)/0.3] bg-white/75 dark:bg-neutral-900/60
                               backdrop-blur-md transition-all duration-400
                               hover:[border-color:var(--accent)] hover:shadow-xl hover:shadow-[var(--accent)/0.15]
                               focus:outline-none focus:ring-2 focus:[--tw-ring-color:var(--accent)/0.5]"
                  >
                    <div className="h-1 w-full bg-gradient-to-r from-[var(--accent)] via-[color-mix(in oklab,var(--accent) 70%, transparent)] to-transparent" />

                    <CardHeader className="text-left pb-3">
                      <div className="mb-4">
                        <AccentIconBadge Icon={service.icon} index={index} />
                      </div>
                      <CardTitle className="text-lg font-serif transition-colors group-hover:[color:var(--accent)]">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <BookConsultationModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}
