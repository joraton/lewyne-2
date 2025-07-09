'use client'

import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import SectionBlock from './SectionBlock'

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Définitions et concepts de base des options financières',
    icon: 'rocket',
    color: 'blue',
    href: '/introduction'
  },
  {
    id: 'section-1',
    title: 'Section I - Décomposition de la prime',
    description: 'Valeur intrinsèque, valeur temps et mécanismes de pricing',
    icon: 'chart',
    color: 'green',
    href: '/section-1'
  },
  {
    id: 'section-2',
    title: 'Section II - Stratégies spéculatives',
    description: 'Calls, puts et stratégies combinées pour la spéculation',
    icon: 'trending',
    color: 'purple',
    href: '/section-2'
  },
  {
    id: 'section-3',
    title: 'Section III - Modèle de Black & Scholes',
    description: 'Formule de pricing et options réelles en finance d\'entreprise',
    icon: 'calculator',
    color: 'orange',
    href: '/section-3'
  },
  {
    id: 'quiz',
    title: 'Quiz',
    description: 'Évaluation interactive de vos connaissances',
    icon: 'quiz',
    color: 'red',
    href: '/quiz'
  },
  {
    id: 'questions-dscg',
    title: 'Cas pratiques',
    description: 'Exercices pratiques et cas d\'application pour l\'examen',
    icon: 'certificate',
    color: 'violet',
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
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-blue-100 rounded-full p-3">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Plan du cours</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Suivez un parcours structuré pour maîtriser les options financières, 
          de la théorie fondamentale aux applications pratiques.
        </p>
      </div>
      
      {/* Blocs des sections */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <SectionBlock {...section} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}