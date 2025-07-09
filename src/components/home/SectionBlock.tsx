'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Rocket, 
  BarChart3, 
  TrendingUp, 
  Calculator, 
  HelpCircle, 
  Award,
  ArrowRight
} from 'lucide-react'

interface SectionBlockProps {
  id: string
  title: string
  description: string
  icon: string
  color: string
  href: string
}

const iconMap = {
  rocket: Rocket,
  chart: BarChart3,
  trending: TrendingUp,
  calculator: Calculator,
  quiz: HelpCircle,
  certificate: Award
}

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-500',
    border: 'border-blue-200',
    button: 'bg-blue-600 hover:bg-blue-700',
    text: 'text-blue-600'
  },
  green: {
    bg: 'bg-green-50',
    iconBg: 'bg-green-500',
    border: 'border-green-200',
    button: 'bg-green-600 hover:bg-green-700',
    text: 'text-green-600'
  },
  purple: {
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-500',
    border: 'border-purple-200',
    button: 'bg-purple-600 hover:bg-purple-700',
    text: 'text-purple-600'
  },
  orange: {
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-500',
    border: 'border-orange-200',
    button: 'bg-orange-600 hover:bg-orange-700',
    text: 'text-orange-600'
  },
  red: {
    bg: 'bg-red-50',
    iconBg: 'bg-red-500',
    border: 'border-red-200',
    button: 'bg-red-600 hover:bg-red-700',
    text: 'text-red-600'
  },
  violet: {
    bg: 'bg-violet-50',
    iconBg: 'bg-violet-500',
    border: 'border-violet-200',
    button: 'bg-violet-600 hover:bg-violet-700',
    text: 'text-violet-600'
  }
}

export default function SectionBlock({ title, description, icon, color, href }: SectionBlockProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap]
  const colors = colorMap[color as keyof typeof colorMap]

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 flex-1">
          {/* Icône */}
          <div className={`${colors.iconBg} rounded-full p-4 flex-shrink-0`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          {/* Contenu */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Bouton */}
        <Link href={href}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${colors.button} text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg`}
          >
            Commencer
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}