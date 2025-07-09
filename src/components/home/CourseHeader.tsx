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
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-700 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-start gap-6">
          {/* Icône du cours */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex-shrink-0">
            <TrendingUp className="w-12 h-12 text-white" />
          </div>
          
          {/* Contenu principal */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Les Options Financières
            </h1>
            
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Maîtrisez les stratégies d'options, de la théorie de Black & Scholes aux applications pratiques. 
              Découvrez les calls, puts, et stratégies complexes pour optimiser vos investissements.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-5 h-5" />
                <span className="font-medium">Expert</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">4h 15min</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">6 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}