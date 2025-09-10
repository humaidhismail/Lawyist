"use client"

import { motion } from "framer-motion"

export function AnimatedBalanceScale() {
  return (
    <div className="flex justify-center items-center mb-12">
      <motion.svg
        width="200"
        height="160"
        viewBox="0 0 200 160"
        className="drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        {/* Ornate base with gold accent */}
        <ellipse cx="100" cy="145" rx="35" ry="8" fill="#2C4A52" />
        <ellipse cx="100" cy="143" rx="30" ry="6" fill="#D4AF37" />
        <rect x="85" y="135" width="30" height="12" rx="6" fill="#2C4A52" />

        {/* Main pillar with realistic shading */}
        <defs>
          <linearGradient id="pillarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A1A1A" />
            <stop offset="30%" stopColor="#2C4A52" />
            <stop offset="70%" stopColor="#2C4A52" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#B8941F" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          <radialGradient id="panGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B8941F" />
            <stop offset="100%" stopColor="#8B7355" />
          </radialGradient>
        </defs>

        <rect x="96" y="40" width="8" height="95" rx="4" fill="url(#pillarGradient)" />

        {/* Ornate top piece */}
        <circle cx="100" cy="42" r="8" fill="#D4AF37" />
        <circle cx="100" cy="42" r="5" fill="#2C4A52" />

        {/* Main beam with gold finish */}
        <rect x="25" y="38" width="150" height="8" rx="4" fill="url(#beamGradient)" />

        {/* Fulcrum point */}
        <polygon points="100,46 95,38 105,38" fill="#1A1A1A" />

        {/* Left chain with realistic links */}
        <motion.g
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <rect x="48" y="46" width="4" height="6" rx="2" fill="#2C4A52" />
          <rect x="48" y="52" width="4" height="6" rx="2" fill="#2C4A52" />
          <rect x="48" y="58" width="4" height="6" rx="2" fill="#2C4A52" />
          <rect x="48" y="64" width="4" height="6" rx="2" fill="#2C4A52" />
        </motion.g>

        {/* Right chain with realistic links */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <rect x="148" y="46" width="4" height="6" rx="2" fill="#2C4A52" />
          <rect x="148" y="52" width="4" height="6" rx="2" fill="#2C4A52" />
          <rect x="148" y="58" width="4" height="6" rx="2" fill="#2C4A52" />
          <rect x="148" y="64" width="4" height="6" rx="2" fill="#2C4A52" />
        </motion.g>

        {/* Left pan with realistic depth */}
        <motion.g
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ellipse cx="50" cy="75" rx="25" ry="6" fill="url(#panGradient)" />
          <ellipse cx="50" cy="73" rx="25" ry="4" fill="#D4AF37" />
          <ellipse cx="50" cy="71" rx="22" ry="3" fill="#F4E4A6" />
        </motion.g>

        {/* Right pan with realistic depth */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ellipse cx="150" cy="75" rx="25" ry="6" fill="url(#panGradient)" />
          <ellipse cx="150" cy="73" rx="25" ry="4" fill="#D4AF37" />
          <ellipse cx="150" cy="71" rx="22" ry="3" fill="#F4E4A6" />
        </motion.g>

        {/* Decorative elements */}
        <circle cx="50" cy="42" r="3" fill="#D4AF37" />
        <circle cx="150" cy="42" r="3" fill="#D4AF37" />
      </motion.svg>
    </div>
  )
}
