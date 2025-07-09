'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Award, CheckCircle2, AlertCircle, Calculator, FileText, TrendingUp } from 'lucide-react'
import { useState } from 'react'

interface Exercise {
  id: number
  title: string
  difficulty: 'Facile' | 'Moyen' | 'Difficile'
  points: number
  statement: string
  data: string[]
  questions: string[]
  solution: {
    steps: string[]
    result: string
    explanation: string
  }
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Calcul de prime avec Black & Scholes",
    difficulty: "Moyen",
    points: 8,
    statement: "Une entreprise souhaite évaluer des options sur ses actions pour un plan d&apos;intéressement.",
    data: [
      "Cours actuel de l&apos;action : 150€",
      "Prix d&apos;exercice : 140€",
      "Volatilité annuelle : 25%",
      "Durée jusqu&apos;à l&apos;échéance : 6 mois",
      "Taux sans risque : 2,5%"
    ],
    questions: [
      "Calculer la valeur intrinsèque du call",
      "Appliquer la formule de Black & Scholes",
      "Déterminer la prime du put correspondant",
      "Analyser la répartition VI/VT"
    ],
    solution: {
      steps: [
        "VI du call = Max(0, 150 - 140) = 10€",
        "Calcul de d₁ = [ln(150/140) + (0,025 + 0,25²/2) × 0,5] / (0,25 × √0,5) = 0,89",
        "Calcul de d₂ = 0,89 - 0,25 × √0,5 = 0,71",
        "N(0,89) = 0,8133 et N(0,71) = 0,7611",
        "Prime call = 150 × 0,8133 - 140 × e^(-0,025×0,5) × 0,7611 = 16,24€",
        "Prime put = 16,24 - 150 + 140 × e^(-0,025×0,5) = 4,49€"
      ],
      result: "Prime du call : 16,24€ (VI : 10€, VT : 6,24€) | Prime du put : 4,49€",
      explanation: "Le call est dans la monnaie avec une valeur temps significative. Le put, hors de la monnaie, n&apos;a que de la valeur temps."
    }
  },
  {
    id: 2,
    title: "Stratégie spéculative - Straddle",
    difficulty: "Difficile",
    points: 12,
    statement: "Un investisseur anticipe une forte volatilité sur l&apos;action LVMH autour de la publication des résultats, sans savoir le sens de la variation.",
    data: [
      "Cours actuel LVMH : 800€",
      "Prix d&apos;exercice des options : 800€",
      "Prime du call : 45€",
      "Prime du put : 42€",
      "Échéance : dans 1 mois"
    ],
    questions: [
      "Décrire la stratégie Straddle appropriée",
      "Calculer le coût total de la stratégie",
      "Déterminer les seuils de rentabilité",
      "Analyser les scénarios de gain/perte"
    ],
    solution: {
      steps: [
        "Stratégie : Achat simultané d&apos;un call et d&apos;un put à 800€",
        "Coût total = 45€ + 42€ = 87€",
        "Seuil haut = 800€ + 87€ = 887€",
        "Seuil bas = 800€ - 87€ = 713€",
        "Zone de perte : entre 713€ et 887€",
        "Gain maximum si cours < 713€ ou > 887€"
      ],
      result: "Seuils de rentabilité : 713€ et 887€ | Perte maximale : 87€",
      explanation: "Le Straddle est profitable si le cours sort de la fourchette [713€ ; 887€]. La perte est limitée au coût des primes si le cours reste stable."
    }
  },
  {
    id: 3,
    title: "Options réelles - Évaluation d&apos;entreprise",
    difficulty: "Difficile",
    points: 15,
    statement: "Une PME en difficulté financière doit être évaluée. Les actionnaires bénéficient de la responsabilité limitée.",
    data: [
      "Valeur économique des actifs : 60M€",
      "Dette totale à rembourser : 80M€",
      "Volatilité des actifs : 50%",
      "Maturité résiduelle de la dette : 2 ans",
      "Taux sans risque : 3%"
    ],
    questions: [
      "Modéliser la situation comme une option",
      "Calculer la valeur des capitaux propres",
      "Déterminer la valeur de la dette",
      "Estimer la probabilité de faillite"
    ],
    solution: {
      steps: [
        "Modèle : Call sur les actifs (S=60M€, E=80M€, σ=50%, τ=2, r=3%)",
        "d₁ = [ln(60/80) + (0,03 + 0,5²/2) × 2] / (0,5 × √2) = -0,057",
        "d₂ = -0,057 - 0,5 × √2 = -0,764",
        "N(-0,057) = 0,477 et N(-0,764) = 0,222",
        "Valeur CP = 60 × 0,477 - 80 × e^(-0,03×2) × 0,222 = 12,0M€",
        "Valeur dette = 60 - 12,0 = 48,0M€",
        "Probabilité faillite = 1 - N(-0,764) = 1 - 0,222 = 77,8%"
      ],
      result: "Capitaux propres : 12,0M€ | Dette : 48,0M€ | Probabilité faillite : 77,8%",
      explanation: "Malgré une valeur d&apos;actifs inférieure à la dette, les capitaux propres ont une valeur positive grâce à l&apos;option implicite. Le risque de faillite reste élevé."
    }
  }
]

export default function QuestionsDSCG() {
  const [showSolution, setShowSolution] = useState<boolean[]>(new Array(exercises.length).fill(false))

  const toggleSolution = (index: number) => {
    const newShowSolution = [...showSolution]
    newShowSolution[index] = !newShowSolution[index]
    setShowSolution(newShowSolution)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800'
      case 'Moyen': return 'bg-yellow-100 text-yellow-800'
      case 'Difficile': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Plan du cours
          </Link>
          
          <div className="bg-purple-100 rounded-full px-4 py-2">
            <span className="text-purple-800 font-medium">Cas pratiques</span>
          </div>
          
          <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
            Retour au plan
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 rounded-full p-3">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Cas pratiques</h1>
              <p className="text-gray-600 mt-2">Exercices pratiques d&apos;application sur les options financières</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h2 className="text-xl font-bold text-purple-800 mb-3">🎯 Objectifs pédagogiques</h2>
            <ul className="space-y-2 text-purple-700">
              <li>• Maîtriser les calculs de primes avec Black & Scholes</li>
              <li>• Analyser les stratégies spéculatives complexes</li>
              <li>• Appliquer les options réelles en finance d&apos;entreprise</li>
              <li>• Développer une méthodologie de résolution DSCG</li>
            </ul>
          </div>
        </motion.div>

        {/* Exercices */}
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Header de l&apos;exercice */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Exercice {exercise.id}</h3>
                      <p className="text-purple-100">{exercise.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {exercise.points} points
                    </span>
                  </div>
                </div>
                <p className="text-purple-100 leading-relaxed">{exercise.statement}</p>
              </div>

              {/* Contenu de l'exercice */}
              <div className="p-6">
                {/* Données */}
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Données
                    </h4>
                    <ul className="space-y-2 text-blue-700">
                      {exercise.data.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="bg-blue-500 rounded-full w-2 h-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Questions
                    </h4>
                    <ol className="space-y-2 text-green-700">
                      {exercise.questions.map((question, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          {question}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Bouton solution */}
                <div className="flex justify-center mb-6">
                  <button
                    onClick={() => toggleSolution(index)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                      showSolution[index]
                        ? 'bg-gray-600 hover:bg-gray-700 text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    {showSolution[index] ? (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        Masquer la solution
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Voir la solution
                      </>
                    )}
                  </button>
                </div>

                {/* Solution */}
                {showSolution[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.4 }}
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                  >
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Solution détaillée
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Étapes de résolution :</h5>
                        <ol className="space-y-2">
                          {exercise.solution.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      <div className="bg-green-100 p-4 rounded border border-green-200">
                        <h5 className="font-semibold text-green-800 mb-2">Résultat final :</h5>
                        <p className="text-green-700 font-medium">{exercise.solution.result}</p>
                      </div>
                      
                      <div className="bg-blue-100 p-4 rounded border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Explication :</h5>
                        <p className="text-blue-700">{exercise.solution.explanation}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conseils méthodologiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-8"
        >
          <h3 className="text-xl font-bold text-yellow-800 mb-4">💡 Conseils méthodologiques DSCG</h3>
          <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
            <div>
              <h4 className="font-semibold mb-2">Avant de commencer :</h4>
              <ul className="space-y-1 text-sm">
                <li>• Lire attentivement l&apos;énoncé</li>
                <li>• Identifier le type d&apos;option et la stratégie</li>
                <li>• Lister les données disponibles</li>
                <li>• Choisir la formule appropriée</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Pendant la résolution :</h4>
              <ul className="space-y-1 text-sm">
                <li>• Détailler chaque étape de calcul</li>
                <li>• Vérifier la cohérence des résultats</li>
                <li>• Interpréter économiquement</li>
                <li>• Conclure sur la stratégie optimale</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/quiz" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Retour au Quiz
          </Link>
          
          <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Retour au plan du cours
          </Link>
        </div>
      </div>
    </div>
  )
}