'use client'

import { motion } from 'framer-motion'
import { Target, Rocket, BarChart3, TrendingUp, Calculator, HelpCircle, Award } from 'lucide-react'
import SectionBlock from './SectionBlock'

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Définitions et concepts de base des options financières',
    duration: '30 min',
    difficulty: 'Débutant',
    icon: Rocket,
    color: 'bg-blue-500',
    href: '/introduction'
  },
  {
    id: 'section-1',
    title: 'Section I - Décomposition de la prime',
    description: 'Valeur intrinsèque, valeur temps et mécanismes de pricing',
    duration: '45 min',
    difficulty: 'Intermédiaire',
    icon: BarChart3,
    color: 'bg-green-500',
    href: '/section-1'
  },
  {
    id: 'section-2',
    title: 'Section II - Stratégies spéculatives',
    description: 'Calls, puts et stratégies combinées pour la spéculation',
    duration: '60 min',
    difficulty: 'Intermédiaire',
    icon: TrendingUp,
    color: 'bg-purple-500',
    href: '/section-2'
  },
  {
    id: 'section-3',
    title: 'Section III - Modèle de Black & Scholes',
    description: 'Formule de pricing et options réelles en finance d&apos;entreprise',
    duration: '75 min',
    difficulty: 'Avancé',
    icon: Calculator,
    color: 'bg-orange-500',
    href: '/section-3'
  },
  {
    id: 'quiz',
    title: 'Quiz',
    description: 'Évaluation interactive de vos connaissances',
    duration: '20 min',
    difficulty: 'Tous niveaux',
    icon: HelpCircle,
    color: 'bg-red-500',
    href: '/quiz'
  },
  {
    id: 'questions-dscg',
    title: 'Cas pratiques',
    description: 'Exercices pratiques et cas d&apos;application pour l&apos;examen',
    duration: '90 min',
    difficulty: 'Expert',
    icon: Award,
    color: 'bg-violet-500',
    href: '/questions-dscg'
  }
]

export default function CoursePlan() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-4xl mx-auto"
    >
      {/* Titre de la section */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
          <div className="bg-blue-100 rounded-full p-2 sm:p-3">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Plan du cours</h2>
        </div>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Suivez un parcours structuré pour maîtriser les options financières, 
          de la théorie fondamentale aux applications pratiques.
        </p>
      </div>
      
      {/* Grille des sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}