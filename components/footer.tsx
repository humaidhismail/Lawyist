"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <img
                src="/LAWYIST.png"
                alt="The Lawyist Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed text-sm max-w-sm">
              Comprehensive legal solutions tailored to meet your unique needs
              and objectives. Trusted guidance for individuals and businesses.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:mx-auto"
          >
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-secondary-foreground/80 text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#consultancy"
                  className="hover:text-primary transition-colors"
                >
                  Consultancy
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
            <div className="space-y-4 text-secondary-foreground/80 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+960 765-7125</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>thelawyist@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center"
        >
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 THE LAWYIST. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
