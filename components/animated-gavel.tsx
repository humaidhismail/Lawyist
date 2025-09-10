"use client"

import { motion } from "framer-motion"

export function AnimatedGavel() {
  return (
    <div className="flex justify-center items-center mb-12">
      <motion.svg
        width="240"
        height="180"
        viewBox="0 0 240 180"
        className="drop-shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <defs>
          <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A2B31" />
            <stop offset="30%" stopColor="#2C4A52" />
            <stop offset="70%" stopColor="#2C4A52" />
            <stop offset="100%" stopColor="#1A2B31" />
          </linearGradient>
          <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4E4A6" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B8941F" />
            <stop offset="100%" stopColor="#8B7355" />
          </linearGradient>
          <linearGradient id="blockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2C4A52" />
            <stop offset="50%" stopColor="#1A2B31" />
            <stop offset="100%" stopColor="#0F1A1D" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#1A1A1A" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Block (stationary) */}
        <rect x="80" y="140" width="80" height="25" rx="4" fill="url(#blockGradient)" filter="url(#shadow)" />
        <rect x="82" y="142" width="76" height="3" rx="2" fill="#3A5A62" />

        {/* Gavel animation group */}
        <motion.g
          animate={{
            rotate: [0, 15, 0],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            times: [0, 0.3, 1],
          }}
          style={{ transformOrigin: "120px 60px" }}
        >
          {/* Gavel handle */}
          <rect x="115" y="30" width="10" height="80" rx="5" fill="url(#handleGradient)" />
          <rect x="116" y="32" width="2" height="76" rx="1" fill="#3A5A62" />
          <rect x="121" y="32" width="2" height="76" rx="1" fill="#1A2B31" />

          {/* Gavel head */}
          <rect x="105" y="45" width="30" height="20" rx="10" fill="url(#headGradient)" />
          <rect x="107" y="47" width="26" height="4" rx="2" fill="#F4E4A6" />
          <rect x="107" y="59" width="26" height="4" rx="2" fill="#8B7355" />

          {/* Handle grip details */}
          <circle cx="120" cy="100" r="6" fill="#2C4A52" />
          <circle cx="120" cy="100" r="4" fill="#1A2B31" />
        </motion.g>

        {/* Impact effect (appears during tap) */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0, 0.6, 0],
            scale: [0, 0, 1.2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.25, 0.35, 0.45],
          }}
        >
          <circle cx="120" cy="135" r="8" fill="#D4AF37" opacity="0.3" />
          <circle cx="120" cy="135" r="12" fill="#D4AF37" opacity="0.1" />
        </motion.g>

        {/* Bounce effect on block */}
        <motion.rect
          x="80"
          y="140"
          width="80"
          height="25"
          rx="4"
          fill="url(#blockGradient)"
          animate={{
            y: [140, 140, 142, 140],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.25, 0.35, 0.45],
          }}
        />
      </motion.svg>
    </div>
  )
}
