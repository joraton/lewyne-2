'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Retour au plan
          </Link>
          
          <div className="bg-blue-100 rounded-full px-4 py-2">
            <span className="text-blue-800 font-medium">Introduction</span>
          </div>
          
          <Link href="/section-1" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            Section I
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '16.67%' }}></div>
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
            <div className="bg-blue-100 rounded-full p-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Introduction aux Options Financières</h1>
              <p className="text-gray-600 mt-2">Concepts fondamentaux et définitions essentielles</p>
            </div>
          </div>

          {/* Définition principale */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-3">📚 Définition</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Une <strong>option</strong> est un droit d&apos;acheter (<strong>call</strong>) ou de vendre (<strong>put</strong>) 
              un actif financier sous-jacent à une date donnée (option à l&apos;européenne) ou pendant une période donnée 
              (option à l&apos;américaine), à un prix donné à l&apos;avance : le <strong>&laquo; prix d&apos;exercice &raquo;</strong>. 
              Le prix de l&apos;option s&apos;appelle la <strong>prime</strong>.
            </p>
          </div>

          {/* Concepts clés */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">🚀 Call (Option d&apos;achat)</h3>
              <p className="text-gray-700">
                Donne le <strong>droit d&apos;acheter</strong> l&apos;actif sous-jacent au prix d&apos;exercice. 
                Profitable quand le cours monte au-dessus du prix d&apos;exercice.
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-3">📉 Put (Option de vente)</h3>
              <p className="text-gray-700">
                Donne le <strong>droit de vendre</strong> l&apos;actif sous-jacent au prix d&apos;exercice. 
                Profitable quand le cours descend en-dessous du prix d&apos;exercice.
              </p>
            </div>
          </div>

          {/* Vocabulaire essentiel */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Vocabulaire essentiel</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-800">S :</strong> 
                  <span className="text-gray-600"> Cours de l&apos;actif sous-jacent</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-800">E :</strong> 
                  <span className="text-gray-600"> Prix d&apos;exercice</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-800">Prime :</strong> 
                  <span className="text-gray-600"> Prix de l&apos;option</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-800">Échéance :</strong> 
                  <span className="text-gray-600"> Date limite d&apos;exercice</span>
                </div>
              </div>
            </div>
          </div>

          {/* Types d'options */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4">🌍 Types d&apos;options selon l&apos;exercice</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-purple-800">Option européenne :</strong> 
                  <span className="text-gray-700"> Ne peut être exercée qu&apos;à la date d&apos;échéance</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-purple-800">Option américaine :</strong> 
                  <span className="text-gray-700"> Peut être exercée à tout moment jusqu&apos;à l&apos;échéance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Moyen mnémotechnique */}
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">💡 Moyen mnémotechnique</h3>
            <p className="text-gray-700 text-lg font-medium">
              <strong>&quot;CAPE&quot;</strong> - <strong>C</strong>all <strong>A</strong>chat, <strong>P</strong>ut <strong>E</strong>xercice
            </p>
            <p className="text-gray-600 mt-2">
              Le Call donne le droit d&apos;<strong>Acheter</strong>, le Put permet l&apos;<strong>Exercice</strong> de vente.
            </p>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Plan du cours
          </Link>
          
          <Link href="/section-1" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            Section I - Décomposition de la prime
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}