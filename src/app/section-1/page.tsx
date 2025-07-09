'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BarChart3 } from 'lucide-react'

export default function Section1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Plan du cours
          </Link>
          
          <div className="bg-green-100 rounded-full px-4 py-2">
            <span className="text-green-800 font-medium">Section I</span>
          </div>
          
          <Link href="/section-2" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors">
            Section II
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '33.33%' }}></div>
        </div>

        {/* Contenu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 rounded-full p-3">
              <BarChart3 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Décomposition de la prime</h1>
              <p className="text-gray-600 mt-2">Valeur intrinsèque et valeur temps</p>
            </div>
          </div>

          {/* Formules principales */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-3">📈 Valeur Intrinsèque d&apos;un CALL</h3>
              <div className="bg-white p-4 rounded border text-center">
                <code className="text-xl font-bold text-blue-600">VI = max(S - E ; 0)</code>
              </div>
              <p className="text-gray-600 mt-3 text-sm">
                S = cours du sous-jacent, E = prix d&apos;exercice
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-3">📉 Valeur Intrinsèque d&apos;un PUT</h3>
              <div className="bg-white p-4 rounded border text-center">
                <code className="text-xl font-bold text-red-600">VI = max(E - S ; 0)</code>
              </div>
              <p className="text-gray-600 mt-3 text-sm">
                E = prix d&apos;exercice, S = cours du sous-jacent
              </p>
            </div>
          </div>

          {/* Formule de la prime */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-bold text-purple-800 mb-3">🎯 Composition de la prime</h2>
            <div className="bg-white p-4 rounded border text-center mb-4">
              <code className="text-2xl font-bold text-purple-600">Prime = VI + VT</code>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>VT (Valeur Temps)</strong> : complément de prix au-delà de la valeur intrinsèque que l&apos;acheteur 
              est prêt à payer compte tenu de ses anticipations sur l&apos;évolution du cours du sous-jacent d&apos;ici à l&apos;échéance.
            </p>
            <div className="bg-yellow-100 p-3 rounded mt-4">
              <p className="text-yellow-800 font-medium">⚠️ À l&apos;échéance : VT = 0, donc Prime = VI</p>
            </div>
          </div>

          {/* Exemple CALL */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4">📊 Exemple - CALL (option d&apos;achat)</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-blue-700 mb-2">Cas 1: S = 120€, E = 100€</h4>
                <p className="text-gray-700">
                  Payer 100€ ce qui vaut 120€<br/>
                  <strong className="text-green-600">VI du call = 20€</strong>
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-blue-700 mb-2">Cas 2: S = 90€, E = 100€</h4>
                <p className="text-gray-700">
                  Aucun intérêt à exercer<br/>
                  <strong className="text-red-600">VI du call = 0€</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Exemple PUT */}
          <div className="bg-red-50 p-6 rounded-lg mb-8 border border-red-200">
            <h3 className="text-xl font-bold text-red-800 mb-4">📊 Exemple - PUT (option de vente)</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-red-700 mb-2">Cas 1: S = 120€, E = 100€</h4>
                <p className="text-gray-700">
                  Aucun intérêt à vendre à 100€ ce qui vaut 120€<br/>
                  <strong className="text-red-600">VI du put = 0€</strong>
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-red-700 mb-2">Cas 2: S = 90€, E = 100€</h4>
                <p className="text-gray-700">
                  Vendre à 100€ ce qui vaut 90€<br/>
                  <strong className="text-green-600">VI du put = 10€</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Point clé */}
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">💡 Point clé à retenir</h3>
            <p className="text-gray-700 text-lg">
              La VI peut valoir 0, mais cela ne signifie pas que la prime vaut 0. 
              Il reste toujours une <strong>valeur temps</strong> tant que l&apos;option n&apos;a pas atteint son échéance.
            </p>
          </div>

          {/* Moyen mnémotechnique */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-3">🧠 Moyen mnémotechnique</h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>"CALL = Course Ascendante Lucrative Logique"</strong><br/>
                <span className="text-sm text-gray-600">Le call est profitable quand le cours monte</span>
              </p>
              <p className="text-gray-700">
                <strong>"PUT = Prix Utile Tombant"</strong><br/>
                <span className="text-sm text-gray-600">Le put est profitable quand le prix tombe</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/introduction" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Introduction
          </Link>
          
          <Link href="/section-2" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            Section II - Stratégies spéculatives
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}