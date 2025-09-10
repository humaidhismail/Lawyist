"use client"

import { motion } from "framer-motion"

export function AnimatedCourthouse() {
  return (
    <div className="flex justify-center items-center mb-12">
      <svg
        viewBox="0 0 280 200"
        className="w-full max-w-2xl h-auto drop-shadow-xl"
      >
        <defs>
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3A5A62" />
            <stop offset="50%" stopColor="#2C4A52" />
            <stop offset="100%" stopColor="#1A2B31" />
          </linearGradient>
          <linearGradient id="pillarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8E8E8" />
            <stop offset="50%" stopColor="#F0F0F0" />
            <stop offset="100%" stopColor="#D8D8D8" />
          </linearGradient>
          <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4E4A6" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8941F" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#1A1A1A" floodOpacity="0.3" />
          </filter>
          {/* ClipPath for circular image */}
          <clipPath id="emblemClip">
            <circle cx="140" cy="52" r="11" />
          </clipPath>
        </defs>

        {/* Base/Foundation */}
        <rect x="40" y="160" width="200" height="20" rx="2" fill="url(#buildingGradient)" filter="url(#shadow)" />

        {/* Main building body */}
        <rect x="60" y="100" width="160" height="60" fill="url(#buildingGradient)" />

        {/* Pillars */}
        <rect x="80" y="80" width="12" height="80" fill="url(#pillarGradient)" filter="url(#shadow)" />
        <rect x="100" y="80" width="12" height="80" fill="url(#pillarGradient)" filter="url(#shadow)" />
        <rect x="120" y="80" width="12" height="80" fill="url(#pillarGradient)" filter="url(#shadow)" />
        <rect x="140" y="80" width="12" height="80" fill="url(#pillarGradient)" filter="url(#shadow)" />
        <rect x="160" y="80" width="12" height="80" fill="url(#pillarGradient)" filter="url(#shadow)" />
        <rect x="180" y="80" width="12" height="80" fill="url(#pillarGradient)" filter="url(#shadow)" />

        {/* Pillar capitals */}
        <rect x="78" y="75" width="16" height="8" rx="2" fill="url(#pillarGradient)" />
        <rect x="98" y="75" width="16" height="8" rx="2" fill="url(#pillarGradient)" />
        <rect x="118" y="75" width="16" height="8" rx="2" fill="url(#pillarGradient)" />
        <rect x="138" y="75" width="16" height="8" rx="2" fill="url(#pillarGradient)" />
        <rect x="158" y="75" width="16" height="8" rx="2" fill="url(#pillarGradient)" />
        <rect x="178" y="75" width="16" height="8" rx="2" fill="url(#pillarGradient)" />

        {/* Triangular pediment */}
        <polygon points="70,75 140,30 210,75" fill="url(#roofGradient)" filter="url(#glow)" />

        {/* Pediment outline */}
        <polygon points="80,70 140,35 200,70" fill="none" stroke="#B8941F" strokeWidth="1" />

        {/* Central emblem/seal with small pulse */}
        <g style={{ transformOrigin: "140px 52px" }}>
          <circle cx="140" cy="52" r="12" fill="url(#roofGradient)" stroke="#1A2B31" strokeWidth="1" />

          <motion.image
            href="/LAWYIST-1.png"   // <-- replace with your image path in /public
            x="129"
            y="41"
            width="22"
            height="22"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#emblemClip)"
            animate={{ scale: [1, 1.03, 1] }}   // small gentle pulse
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "140px 52px" }}
          />
        </g>

        {/* Steps with gentle up/down motion */}
        <motion.g
          animate={{ y: [0, -2, 0] }} // move up 2px and back
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <rect x="50" y="155" width="180" height="7" rx="1" fill="#254f5c" />
          <rect x="55" y="150" width="170" height="5" rx="1" fill="#1c434f" />
          <rect x="60" y="145" width="160" height="5" rx="1" fill="#2a5e6e" />
        </motion.g>
      </svg>
    </div>
  )
}
