'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, BookOpen, Award } from 'lucide-react'

export default function CourseHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-700 rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Icône du cours */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex-shrink-0 mx-auto sm:mx-0">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          
          {/* Contenu principal */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Les Options Financières
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-4 sm:mb-6 leading-relaxed">
              Maîtrisez les stratégies d&apos;options, de la théorie de Black & Scholes aux applications pratiques. 
              Découvrez les calls, puts, et stratégies complexes pour optimiser vos investissements.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">Expert</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">4h 15min</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">6 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}