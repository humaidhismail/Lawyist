"use client"

import { motion } from "framer-motion"
import { Scale, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
              src="/LAWYIST.PNG" 
              alt="The Lawyist Logo"
              className="h-10 w-auto object-contain" // same height as old icon
            />
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Comprehensive legal solutions tailored to meet your unique needs and objectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Corporate Law
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Employment Law
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Contract Law
                </a>
              </li>
              <li>
                <a href="#consultancy" className="hover:text-primary transition-colors">
                  Legal Consultancy
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-secondary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+960 765-7125</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">thelawyist@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center"
        >
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 THE LAWYIST. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
