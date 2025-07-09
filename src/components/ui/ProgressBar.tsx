'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number // Pourcentage de 0 à 100
  color?: string
  height?: string
  showPercentage?: boolean
  animated?: boolean
}

export default function ProgressBar({ 
  progress, 
  color = 'bg-blue-600', 
  height = 'h-2', 
  showPercentage = false,
  animated = true 
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100)

  return (
    <div className="w-full">
      {showPercentage && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progression</span>
          <span className="text-sm font-medium text-gray-700">{Math.round(clampedProgress)}%</span>
        </div>
      )}
      
      <div className={`w-full bg-gray-200 rounded-full ${height}`}>
        {animated ? (
          <motion.div
            className={`${color} ${height} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${clampedProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ) : (
          <div
            className={`${color} ${height} rounded-full transition-all duration-300`}
            style={{ width: `${clampedProgress}%` }}
          />
        )}
      </div>
    </div>
  )
}