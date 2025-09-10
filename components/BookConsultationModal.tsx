"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface Props {
  onClose: () => void
}

export default function BookConsultationModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-background rounded-2xl shadow-lg w-full max-w-lg p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-contrast"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold text-contrast mb-2">
          Book a Consultation
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Fill the form and we’ll get back to you quickly.
        </p>

        {/* Formspree Form */}
        <form
          action="https://formspree.io/f/yourFormID" 
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Service *</label>
            <select
              name="service"
              required
              className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
            >
              <option value="">Select a service</option>
              <option>Consultation</option>
              <option>Contract & Policy Review</option>
              <option>Corporate & Business</option>
              <option>Family Law</option>
              <option>Criminal Defense</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">More Info</label>
            <textarea
              name="message"
              rows={3}
              className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
              placeholder="Tell us a bit more..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary hover:bg-primary/90 text-background px-4 py-2 font-medium"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  )
}
