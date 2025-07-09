'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, HelpCircle, CheckCircle, XCircle, Trophy } from 'lucide-react'
import { useState } from 'react'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la formule de la valeur intrinsèque d&apos;un CALL ?",
    options: [
      "VI = Max(0, E - S)",
      "VI = Max(0, S - E)",
      "VI = S + E",
      "VI = S × E"
    ],
    correct: 1,
    explanation: "La valeur intrinsèque d&apos;un CALL est Max(0, S - E) car elle représente le gain immédiat si l&apos;option était exercée maintenant."
  },
  {
    id: 2,
    question: "Que se passe-t-il quand on achète un CALL et que le cours monte ?",
    options: [
      "Perte limitée",
      "Gain limité",
      "Gain illimité",
      "Perte illimitée"
    ],
    correct: 2,
    explanation: "L&apos;achat d&apos;un CALL offre un potentiel de gain illimité car plus le cours monte, plus le gain augmente."
  },
  {
    id: 3,
    question: "Quelle est la formule de la valeur intrinsèque d&apos;un PUT ?",
    options: [
      "VI = Max(0, S - E)",
      "VI = Max(0, E - S)",
      "VI = E - S",
      "VI = S - E"
    ],
    correct: 1,
    explanation: "La valeur intrinsèque d&apos;un PUT est Max(0, E - S) car elle représente le gain si on vendait l&apos;actif au prix d&apos;exercice."
  },
  {
    id: 4,
    question: "Que représente la valeur temps (VT) d&apos;une option ?",
    options: [
      "Le prix d&apos;exercice",
      "La valeur intrinsèque",
      "Le complément de prix au-delà de la VI",
      "Le cours du sous-jacent"
    ],
    correct: 2,
    explanation: "La valeur temps est le complément de prix au-delà de la valeur intrinsèque que l&apos;acheteur est prêt à payer compte tenu de ses anticipations."
  },
  {
    id: 5,
    question: "Dans le modèle de Black & Scholes, que représente σ ?",
    options: [
      "Le taux sans risque",
      "La volatilité du sous-jacent",
      "Le prix d&apos;exercice",
      "La durée jusqu&apos;à l&apos;échéance"
    ],
    correct: 1,
    explanation: "σ (sigma) représente la volatilité du sous-jacent, un paramètre clé qui mesure l&apos;incertitude sur l&apos;évolution du cours."
  },
  {
    id: 6,
    question: "Qu&apos;est-ce qu&apos;un Straddle ?",
    options: [
      "Achat simultané d&apos;un CALL et d&apos;un PUT",
      "Vente simultanée d&apos;un CALL et d&apos;un PUT",
      "Achat d&apos;un CALL seulement",
      "Vente d&apos;un PUT seulement"
    ],
    correct: 0,
    explanation: "Un Straddle consiste à acheter simultanément un CALL et un PUT avec le même prix d&apos;exercice et la même échéance."
  },
  {
    id: 7,
    question: "Quelle est la perte maximale lors de la vente d&apos;un CALL ?",
    options: [
      "Limitée à la prime",
      "Illimitée",
      "Égale au prix d&apos;exercice",
      "Nulle"
    ],
    correct: 1,
    explanation: "La vente d&apos;un CALL expose à des pertes potentiellement illimitées si le cours monte fortement au-dessus du prix d&apos;exercice."
  },
  {
    id: 8,
    question: "À l&apos;échéance d&apos;une option, que vaut la valeur temps (VT) ?",
    options: [
      "Elle augmente",
      "Elle reste constante",
      "Elle vaut 0",
      "Elle devient négative"
    ],
    correct: 2,
    explanation: "À l&apos;échéance, la valeur temps vaut toujours 0, donc Prime = VI (valeur intrinsèque)."
  },
  {
    id: 9,
    question: "Dans les options réelles, les actionnaires détiennent implicitement :",
    options: [
      "Un PUT sur les actifs",
      "Un CALL sur les actifs",
      "Une obligation",
      "Une action privilégiée"
    ],
    correct: 1,
    explanation: "Les actionnaires détiennent un CALL implicite sur les actifs de l&apos;entreprise du fait de leur responsabilité limitée."
  },
  {
    id: 10,
    question: "Quelle stratégie privilégient les spéculateurs dépourvus de trésorerie pour parier à la baisse ?",
    options: [
      "Achat d&apos;un CALL",
      "Achat d&apos;un PUT",
      "Vente d&apos;un CALL",
      "Vente d&apos;un PUT"
    ],
    correct: 2,
    explanation: "La vente d&apos;un CALL est privilégiée par les spéculateurs dépourvus de trésorerie pour acheter un PUT, car elle permet de parier à la baisse sans capital initial."
  }
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculer le score
      const correctAnswers = selectedAnswers.filter((answer, index) => 
        answer === questions[index].correct
      ).length
      setScore(correctAnswers)
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
  }

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez bien les options.'
    if (percentage >= 60) return 'Bien ! Quelques révisions seraient bénéfiques.'
    return 'Il faut revoir le cours sur les options.'
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Plan du cours
            </Link>
            
            <div className="bg-red-100 rounded-full px-4 py-2">
              <span className="text-red-800 font-medium">Quiz terminé</span>
            </div>
            
            <Link href="/questions-dscg" className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
            Cas pratiques
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="mb-8">
              <Trophy className={`w-16 h-16 mx-auto mb-4 ${getScoreColor()}`} />
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz terminé !</h1>
              <p className="text-gray-600">Voici vos résultats</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>
              <div className={`text-2xl font-semibold mb-4 ${getScoreColor()}`}>
                {Math.round((score / questions.length) * 100)}%
              </div>
              <p className="text-gray-700 text-lg">{getScoreMessage()}</p>
            </div>

            {/* Détail des réponses */}
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => {
                const isCorrect = selectedAnswers[index] === question.correct
                return (
                  <div key={question.id} className={`p-4 rounded-lg border-2 ${
                    isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      )}
                      <div className="text-left">
                        <p className="font-medium text-gray-800 mb-2">
                          Question {index + 1}: {question.question}
                        </p>
                        <p className={`text-sm ${
                          isCorrect ? 'text-green-700' : 'text-red-700'
                        }`}>
                          Votre réponse: {question.options[selectedAnswers[index]]}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-green-700 mt-1">
                            Bonne réponse: {question.options[question.correct]}
                          </p>
                        )}
                        <p className="text-sm text-gray-600 mt-2 italic">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Recommencer le quiz
              </button>
              <Link
                href="/questions-dscg"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Cas pratiques
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Plan du cours
          </Link>
          
          <div className="bg-red-100 rounded-full px-4 py-2">
            <span className="text-red-800 font-medium">Quiz</span>
          </div>
          
          <Link href="/questions-dscg" className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
            Cas pratiques
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div 
            className="bg-red-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-100 rounded-full p-3">
              <HelpCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Question {currentQuestion + 1} sur {questions.length}
              </h1>
              <p className="text-gray-600 mt-1">Choisissez la bonne réponse</p>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-red-500 bg-red-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Question {currentQuestion + 1} / {questions.length}
            </div>
            
            <button
              onClick={nextQuestion}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors ${
                selectedAnswers[currentQuestion] !== undefined
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}