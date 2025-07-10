'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Clock,
  ChevronRight
} from 'lucide-react'

interface SectionBlockProps {
  section: {
    id: string;
    title: string;
    description: string;
    duration: string;
    difficulty: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    href: string;
    isCompleted?: boolean;
    isLocked?: boolean;
  };
  index: number;
}





export default function SectionBlock({ section, index }: SectionBlockProps) {
  const Icon = section.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Link href={section.href}>
        <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 hover:border-blue-200 cursor-pointer h-full">
          {/* En-tête avec icône */}
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className={`${section.color} rounded-lg p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                {section.title}
              </h3>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
            {section.description}
          </p>
          
          {/* Badges durée et difficulté */}
          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
              <Clock className="w-3 h-3" />
              {section.duration}
            </span>
            <span className="inline-flex items-center px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
              {section.difficulty}
            </span>
          </div>
          
          {/* Footer avec indicateur */}
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
            <span className="text-xs sm:text-sm text-gray-500 font-medium">
              Section {section.id}
            </span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}