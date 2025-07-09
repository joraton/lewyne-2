'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Données pour les graphiques
const callBuyData = [
  { price: 80, result: -10 },
  { price: 90, result: -10 },
  { price: 100, result: -10 },
  { price: 110, result: 0 },
  { price: 120, result: 10 }
]

const putBuyData = [
  { price: 80, result: 10 },
  { price: 90, result: 0 },
  { price: 100, result: -10 },
  { price: 110, result: -10 },
  { price: 120, result: -10 }
]

export default function Section2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Plan du cours
          </Link>
          
          <div className="bg-purple-100 rounded-full px-4 py-2">
            <span className="text-purple-800 font-medium">Section II</span>
          </div>
          
          <Link href="/section-3" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
            Section III
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '50%' }}></div>
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
            <div className="bg-purple-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Stratégies spéculatives de base</h1>
              <p className="text-gray-600 mt-2">Achat et vente d&apos;options : calls et puts</p>
            </div>
          </div>

          {/* 1. Achat d'un call */}
          <div className="bg-green-50 p-6 rounded-lg mb-8 border border-green-200">
            <h2 className="text-2xl font-bold text-green-800 mb-4">📈 1. Achat d&apos;un CALL</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div className="bg-white p-4 rounded border mb-4">
                  <h3 className="font-bold text-green-700 mb-2">Paramètres de l&apos;exemple :</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>Prix d&apos;exercice (E) :</strong> 100€</li>
                    <li><strong>Prime payée :</strong> 10€</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-green-100">
                      <tr>
                        <th className="p-2 text-left">S à l&apos;échéance</th>
                        <th className="p-2 text-center">Prime payée</th>
                        <th className="p-2 text-center">VI</th>
                        <th className="p-2 text-center">Résultat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[80, 90, 100, 110, 120].map((price) => {
                        const vi = Math.max(price - 100, 0)
                        const result = vi - 10
                        return (
                          <tr key={price} className="border-t">
                            <td className="p-2 font-medium">{price}€</td>
                            <td className="p-2 text-center text-red-600">(10)€</td>
                            <td className="p-2 text-center">{vi}€</td>
                            <td className={`p-2 text-center font-bold ${
                              result >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {result >= 0 ? result : `(${Math.abs(result)})`}€
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-green-700 mb-3">Profil de gain/perte :</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={callBuyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="price" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="result" stroke="#16a34a" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border mt-4">
              <h3 className="font-bold text-green-700 mb-3">Graphique de profil :</h3>
              <div className="relative h-48 bg-gray-50 rounded border">
                <svg viewBox="0 0 400 160" className="w-full h-full">
                  {/* Axes */}
                  <line x1="50" y1="140" x2="350" y2="140" stroke="#374151" strokeWidth="2"/>
                  <line x1="200" y1="20" x2="200" y2="140" stroke="#374151" strokeWidth="2"/>
                  
                  {/* Labels */}
                  <text x="200" y="155" textAnchor="middle" className="text-xs fill-gray-600">100€</text>
                  <text x="250" y="155" textAnchor="middle" className="text-xs fill-gray-600">110€</text>
                  <text x="40" y="145" textAnchor="middle" className="text-xs fill-gray-600">0</text>
                  <text x="40" y="115" textAnchor="middle" className="text-xs fill-gray-600">-10€</text>
                  
                  {/* Profil Call */}
                  <path d="M 50 115 L 200 115 L 350 40" 
                        stroke="#16a34a" strokeWidth="3" fill="none"/>
                  
                  {/* Zone de perte */}
                  <rect x="50" y="115" width="150" height="25" fill="#fca5a5" opacity="0.3"/>
                  <text x="125" y="130" textAnchor="middle" className="text-xs fill-red-600">Perte = prime</text>
                  
                  {/* Zone de gain */}
                  <text x="275" y="60" textAnchor="middle" className="text-xs fill-green-600">Gain illimité</text>
                  
                  {/* Point de seuil */}
                  <circle cx="250" cy="90" r="4" fill="#16a34a"/>
                  <text x="250" y="80" textAnchor="middle" className="text-xs fill-green-600">Seuil: 110€</text>
                </svg>
              </div>
            </div>
            
            <div className="bg-green-100 p-4 rounded mt-4">
              <p className="text-green-800 font-medium">
                🎯 <strong>Stratégie :</strong> Spéculation à la hausse. Pertes limitées à la prime (10€), 
                gains illimités si le cours monte.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded mt-4">
              <h3 className="font-bold text-blue-700 mb-3">💡 Exemple détaillé :</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Situation :</strong> Vous pensez que l&apos;action XYZ va monter fortement</p>
                <p><strong>Action :</strong> Achat d&apos;un CALL à 100€ pour 10€ de prime</p>
                <p><strong>Scénarios à l&apos;échéance :</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Si S = 95€ :</strong> Option non exercée → Perte = 10€</li>
                  <li><strong>Si S = 105€ :</strong> Gain = (105-100) - 10 = -5€ (perte réduite)</li>
                  <li><strong>Si S = 110€ :</strong> Gain = (110-100) - 10 = 0€ (seuil de rentabilité)</li>
                  <li><strong>Si S = 120€ :</strong> Gain = (120-100) - 10 = 10€</li>
                  <li><strong>Si S = 150€ :</strong> Gain = (150-100) - 10 = 40€</li>
                </ul>
                <p className="text-green-700 font-medium">✅ <strong>Avantage :</strong> Effet de levier important (contrôler 100 actions pour 10€)</p>
              </div>
            </div>
          </div>

          {/* 2. Achat d'un put */}
          <div className="bg-red-50 p-6 rounded-lg mb-8 border border-red-200">
            <h2 className="text-2xl font-bold text-red-800 mb-4">📉 2. Achat d&apos;un PUT</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div className="bg-white p-4 rounded border mb-4">
                  <h3 className="font-bold text-red-700 mb-2">Paramètres de l&apos;exemple :</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>Prix d&apos;exercice (E) :</strong> 100€</li>
                    <li><strong>Prime payée :</strong> 10€</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-red-100">
                      <tr>
                        <th className="p-2 text-left">S à l&apos;échéance</th>
                        <th className="p-2 text-center">Prime payée</th>
                        <th className="p-2 text-center">VI</th>
                        <th className="p-2 text-center">Résultat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[80, 90, 100, 110, 120].map((price) => {
                        const vi = Math.max(100 - price, 0)
                        const result = vi - 10
                        return (
                          <tr key={price} className="border-t">
                            <td className="p-2 font-medium">{price}€</td>
                            <td className="p-2 text-center text-red-600">(10)€</td>
                            <td className="p-2 text-center">{vi}€</td>
                            <td className={`p-2 text-center font-bold ${
                              result >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {result >= 0 ? result : `(${Math.abs(result)})`}€
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-red-700 mb-3">Profil de gain/perte :</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={putBuyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="price" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="result" stroke="#dc2626" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border mt-4">
              <h3 className="font-bold text-red-700 mb-3">Graphique de profil :</h3>
              <div className="relative h-48 bg-gray-50 rounded border">
                <svg viewBox="0 0 400 160" className="w-full h-full">
                  {/* Axes */}
                  <line x1="50" y1="140" x2="350" y2="140" stroke="#374151" strokeWidth="2"/>
                  <line x1="200" y1="20" x2="200" y2="140" stroke="#374151" strokeWidth="2"/>
                  
                  {/* Labels */}
                  <text x="200" y="155" textAnchor="middle" className="text-xs fill-gray-600">100€</text>
                  <text x="150" y="155" textAnchor="middle" className="text-xs fill-gray-600">90€</text>
                  <text x="40" y="145" textAnchor="middle" className="text-xs fill-gray-600">0</text>
                  <text x="40" y="125" textAnchor="middle" className="text-xs fill-gray-600">-10€</text>
                  
                  {/* Profil Put */}
                  <path d="M 50 40 L 200 125 L 350 125" 
                        stroke="#dc2626" strokeWidth="3" fill="none"/>
                  
                  {/* Zone de gain */}
                  <text x="100" y="60" textAnchor="middle" className="text-xs fill-green-600">Gain max: 90€</text>
                  
                  {/* Zone de perte */}
                  <rect x="200" y="125" width="150" height="15" fill="#fca5a5" opacity="0.3"/>
                  <text x="275" y="135" textAnchor="middle" className="text-xs fill-red-600">Perte = prime</text>
                  
                  {/* Point de seuil */}
                  <circle cx="150" cy="100" r="4" fill="#dc2626"/>
                  <text x="150" y="90" textAnchor="middle" className="text-xs fill-red-600">Seuil: 90€</text>
                </svg>
              </div>
            </div>
            
            <div className="bg-red-100 p-4 rounded mt-4">
              <p className="text-red-800 font-medium">
                🎯 <strong>Stratégie :</strong> Spéculation à la baisse. Pertes limitées à la prime (10€), 
                gains d&apos;autant plus importantes que le cours diminue.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded mt-4">
              <h3 className="font-bold text-blue-700 mb-3">💡 Exemple détaillé :</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Situation :</strong> Vous pensez que l&apos;action XYZ va baisser ou vous voulez protéger votre portefeuille</p>
                <p><strong>Action :</strong> Achat d&apos;un PUT à 100€ pour 10€ de prime</p>
                <p><strong>Scénarios à l&apos;échéance :</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Si S = 110€ :</strong> Option non exercée → Perte = 10€</li>
                  <li><strong>Si S = 95€ :</strong> Gain = (100-95) - 10 = -5€ (perte réduite)</li>
                  <li><strong>Si S = 90€ :</strong> Gain = (100-90) - 10 = 0€ (seuil de rentabilité)</li>
                  <li><strong>Si S = 80€ :</strong> Gain = (100-80) - 10 = 10€</li>
                  <li><strong>Si S = 50€ :</strong> Gain = (100-50) - 10 = 40€</li>
                </ul>
                <p className="text-red-700 font-medium">✅ <strong>Avantage :</strong> Protection contre la baisse avec risque limité</p>
              </div>
            </div>
          </div>

          {/* 3. Vente d'un call */}
          <div className="bg-orange-50 p-6 rounded-lg mb-8 border border-orange-200">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">📊 3. Vente d&apos;un CALL</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div className="bg-white p-4 rounded border mb-4">
                  <h3 className="font-bold text-orange-700 mb-2">Paramètres de l&apos;exemple :</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>Prix d&apos;exercice (E) :</strong> 100€</li>
                    <li><strong>Prime perçue :</strong> 10€</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-orange-100">
                      <tr>
                        <th className="p-2 text-left">S à l&apos;échéance</th>
                        <th className="p-2 text-center">Prime perçue</th>
                        <th className="p-2 text-center">Financement VI</th>
                        <th className="p-2 text-center">Résultat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[80, 90, 100, 110, 120].map((price) => {
                        const financementVI = price > 100 ? -(price - 100) : 0
                        const result = 10 + financementVI
                        return (
                          <tr key={price} className="border-t">
                            <td className="p-2 font-medium">{price}€</td>
                            <td className="p-2 text-center text-green-600">10€</td>
                            <td className="p-2 text-center">
                              {financementVI === 0 ? '0€' : `(${Math.abs(financementVI)})€`}
                            </td>
                            <td className={`p-2 text-center font-bold ${
                              result >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {result >= 0 ? result : `(${Math.abs(result)})`}€
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-orange-700 mb-3">Mécanisme détaillé :</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p><strong>Si S = 110€ :</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>La contrepartie exerce son call</li>
                    <li>Le vendeur doit acheter l&apos;action à 110€</li>
                    <li>Il la revend à 100€ (prix d&apos;exercice)</li>
                    <li>Perte de 10€ sur la transaction</li>
                    <li>Mais il a encaissé 10€ de prime</li>
                    <li><strong>Résultat net : 0€</strong></li>
                  </ul>
                  
                  <div className="bg-yellow-100 p-3 rounded mt-4">
                    <p className="text-yellow-800 text-xs">
                      ⚠️ <strong>Attention :</strong> Le vendeur ne détient pas l&apos;action sous-jacente 
                      et doit l&apos;acheter au prix du marché si l&apos;option est exercée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border mt-4">
              <h3 className="font-bold text-orange-700 mb-3">Graphique de profil :</h3>
              <div className="relative h-48 bg-gray-50 rounded border">
                <svg viewBox="0 0 400 160" className="w-full h-full">
                  {/* Axes */}
                  <line x1="50" y1="140" x2="350" y2="140" stroke="#374151" strokeWidth="2"/>
                  <line x1="200" y1="20" x2="200" y2="140" stroke="#374151" strokeWidth="2"/>
                  
                  {/* Labels */}
                  <text x="200" y="155" textAnchor="middle" className="text-xs fill-gray-600">100€</text>
                  <text x="250" y="155" textAnchor="middle" className="text-xs fill-gray-600">110€</text>
                  <text x="40" y="145" textAnchor="middle" className="text-xs fill-gray-600">0</text>
                  <text x="40" y="125" textAnchor="middle" className="text-xs fill-gray-600">+10€</text>
                  
                  {/* Profil Vente Call */}
                  <path d="M 50 125 L 200 125 L 350 40" 
                        stroke="#ea580c" strokeWidth="3" fill="none"/>
                  
                  {/* Zone de gain */}
                  <rect x="50" y="125" width="150" height="15" fill="#86efac" opacity="0.3"/>
                  <text x="125" y="135" textAnchor="middle" className="text-xs fill-green-600">Gain = prime</text>
                  
                  {/* Zone de perte */}
                  <text x="275" y="60" textAnchor="middle" className="text-xs fill-red-600">Perte illimitée</text>
                  
                  {/* Point de seuil */}
                  <circle cx="250" cy="90" r="4" fill="#ea580c"/>
                  <text x="250" y="80" textAnchor="middle" className="text-xs fill-orange-600">Seuil: 110€</text>
                </svg>
              </div>
            </div>
            
            <div className="bg-orange-100 p-4 rounded mt-4">
              <p className="text-orange-800 font-medium">
                🎯 <strong>Stratégie :</strong> Spéculation à la baisse sans trésorerie. Gains limités à la prime (10€), 
                pertes potentiellement illimitées si le cours monte. Privilégiée par les spéculateurs 
                dépourvus de trésorerie pour acheter un put.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded mt-4">
              <h3 className="font-bold text-blue-700 mb-3">💡 Exemple détaillé :</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Situation :</strong> Vous pensez que l&apos;action XYZ va stagner ou baisser</p>
                <p><strong>Action :</strong> Vente d&apos;un CALL à 100€ pour 10€ de prime</p>
                <p><strong>Scénarios à l&apos;échéance :</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Si S = 95€ :</strong> Option non exercée → Gain = 10€ (prime conservée)</li>
                  <li><strong>Si S = 105€ :</strong> Gain = 10 - (105-100) = 5€</li>
                  <li><strong>Si S = 110€ :</strong> Gain = 10 - (110-100) = 0€ (seuil de rentabilité)</li>
                  <li><strong>Si S = 120€ :</strong> Perte = 10 - (120-100) = -10€</li>
                  <li><strong>Si S = 150€ :</strong> Perte = 10 - (150-100) = -40€</li>
                </ul>
                <p className="text-orange-700 font-medium">⚠️ <strong>Risque :</strong> Perte potentiellement illimitée si forte hausse</p>
              </div>
            </div>
          </div>

          {/* 4. Vente d'un put */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">📊 4. Vente d&apos;un PUT</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div className="bg-white p-4 rounded border mb-4">
                  <h3 className="font-bold text-blue-700 mb-2">Paramètres de l&apos;exemple :</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>Prix d&apos;exercice (E) :</strong> 100€</li>
                    <li><strong>Prime perçue :</strong> 10€</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="p-2 text-left">S à l&apos;échéance</th>
                        <th className="p-2 text-center">Prime perçue</th>
                        <th className="p-2 text-center">Financement VI</th>
                        <th className="p-2 text-center">Résultat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[80, 90, 100, 110, 120].map((price) => {
                        const financementVI = price < 100 ? -(100 - price) : 0
                        const result = 10 + financementVI
                        return (
                          <tr key={price} className="border-t">
                            <td className="p-2 font-medium">{price}€</td>
                            <td className="p-2 text-center text-green-600">10€</td>
                            <td className="p-2 text-center">
                              {financementVI === 0 ? '0€' : `(${Math.abs(financementVI)})€`}
                            </td>
                            <td className={`p-2 text-center font-bold ${
                              result >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {result >= 0 ? result : `(${Math.abs(result)})`}€
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-blue-700 mb-3">Mécanisme détaillé :</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p><strong>Si S = 80€ :</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>La contrepartie exerce son put</li>
                    <li>Le vendeur doit acheter l&apos;action à 100€</li>
                    <li>Il la revend immédiatement à 80€ (prix du marché)</li>
                    <li>Perte de 20€ sur la transaction</li>
                    <li>Mais il a encaissé 10€ de prime</li>
                    <li><strong>Résultat net : -10€</strong></li>
                  </ul>
                  
                  <div className="bg-yellow-100 p-3 rounded mt-4">
                    <p className="text-yellow-800 text-xs">
                      ⚠️ <strong>Note :</strong> Le trader ne peut conserver l&apos;action sous-jacente 
                      et doit la revendre immédiatement au prix du marché.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border mt-4">
              <h3 className="font-bold text-blue-700 mb-3">Graphique de profil :</h3>
              <div className="relative h-48 bg-gray-50 rounded border">
                <svg viewBox="0 0 400 160" className="w-full h-full">
                  {/* Axes */}
                  <line x1="50" y1="140" x2="350" y2="140" stroke="#374151" strokeWidth="2"/>
                  <line x1="200" y1="20" x2="200" y2="140" stroke="#374151" strokeWidth="2"/>
                  
                  {/* Labels */}
                  <text x="200" y="155" textAnchor="middle" className="text-xs fill-gray-600">100€</text>
                  <text x="150" y="155" textAnchor="middle" className="text-xs fill-gray-600">90€</text>
                  <text x="40" y="145" textAnchor="middle" className="text-xs fill-gray-600">0</text>
                  <text x="40" y="125" textAnchor="middle" className="text-xs fill-gray-600">+10€</text>
                  
                  {/* Profil Vente Put */}
                  <path d="M 50 40 L 200 125 L 350 125" 
                        stroke="#2563eb" strokeWidth="3" fill="none"/>
                  
                  {/* Zone de perte */}
                  <text x="100" y="60" textAnchor="middle" className="text-xs fill-red-600">Perte max: 90€</text>
                  
                  {/* Zone de gain */}
                  <rect x="200" y="125" width="150" height="15" fill="#86efac" opacity="0.3"/>
                  <text x="275" y="135" textAnchor="middle" className="text-xs fill-green-600">Gain = prime</text>
                  
                  {/* Point de seuil */}
                  <circle cx="150" cy="100" r="4" fill="#2563eb"/>
                  <text x="150" y="90" textAnchor="middle" className="text-xs fill-blue-600">Seuil: 90€</text>
                </svg>
              </div>
            </div>
            
            <div className="bg-blue-100 p-4 rounded mt-4">
              <p className="text-blue-800 font-medium">
                🎯 <strong>Stratégie :</strong> Spéculation à la hausse. Gains limités à la prime (10€), 
                pertes d&apos;autant plus importantes que le cours diminue.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded mt-4">
              <h3 className="font-bold text-blue-700 mb-3">💡 Exemple détaillé :</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Situation :</strong> Vous pensez que l&apos;action XYZ va rester stable autour de 100€</p>
                <p><strong>Action :</strong> Vente d&apos;un PUT à 100€ pour 10€ de prime</p>
                <p><strong>Scénarios à l&apos;échéance :</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Si S = 110€ :</strong> Option non exercée → Gain = 10€ (prime conservée)</li>
                  <li><strong>Si S = 95€ :</strong> Perte = 10 - (100-95) = 5€</li>
                  <li><strong>Si S = 90€ :</strong> Perte = 10 - (100-90) = 0€ (seuil de rentabilité)</li>
                  <li><strong>Si S = 80€ :</strong> Perte = 10 - (100-80) = -10€</li>
                  <li><strong>Si S = 50€ :</strong> Perte = 10 - (100-50) = -40€</li>
                </ul>
                <p className="text-blue-700 font-medium">✅ <strong>Avantage :</strong> Génération de revenus avec obligation d&apos;achat à prix attractif</p>
              </div>
            </div>
          </div>

          {/* 5. Straddle - Achat simultané */}
          <div className="bg-violet-50 p-6 rounded-lg mb-8 border border-violet-200">
            <h2 className="text-2xl font-bold text-violet-800 mb-4">🎭 5. Straddle - Achat simultané Call + Put</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div className="bg-white p-4 rounded border mb-4">
                  <h3 className="font-bold text-violet-700 mb-2">Paramètres de l&apos;exemple :</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>Prix d&apos;exercice identique :</strong> 100€</li>
                    <li><strong>Échéance identique</strong></li>
                    <li><strong>Prime call :</strong> 8€</li>
                    <li><strong>Prime put :</strong> 6€</li>
                    <li><strong>Coût total :</strong> 14€</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-violet-100">
                      <tr>
                        <th className="p-2 text-left">S à l&apos;échéance</th>
                        <th className="p-2 text-center">Résultat Call</th>
                        <th className="p-2 text-center">Résultat Put</th>
                        <th className="p-2 text-center">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[80, 90, 100, 110, 120].map((price) => {
                        const callResult = Math.max(0, price - 100) - 8
                        const putResult = Math.max(0, 100 - price) - 6
                        const total = callResult + putResult
                        return (
                          <tr key={price} className="border-t">
                            <td className="p-2 font-medium">{price}€</td>
                            <td className={`p-2 text-center ${
                              callResult >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {callResult >= 0 ? callResult : `(${Math.abs(callResult)})`}€
                            </td>
                            <td className={`p-2 text-center ${
                              putResult >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {putResult >= 0 ? putResult : `(${Math.abs(putResult)})`}€
                            </td>
                            <td className={`p-2 text-center font-bold ${
                              total >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {total >= 0 ? total : `(${Math.abs(total)})`}€
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-violet-700 mb-3">Graphique de profil :</h3>
                <div className="relative h-64 bg-gray-50 rounded border">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Axes */}
                    <line x1="50" y1="180" x2="350" y2="180" stroke="#374151" strokeWidth="2"/>
                    <line x1="200" y1="20" x2="200" y2="180" stroke="#374151" strokeWidth="2"/>
                    
                    {/* Labels */}
                    <text x="200" y="195" textAnchor="middle" className="text-xs fill-gray-600">100€</text>
                    <text x="120" y="195" textAnchor="middle" className="text-xs fill-gray-600">86€</text>
                    <text x="280" y="195" textAnchor="middle" className="text-xs fill-gray-600">114€</text>
                    <text x="40" y="185" textAnchor="middle" className="text-xs fill-gray-600">0</text>
                    <text x="40" y="125" textAnchor="middle" className="text-xs fill-gray-600">+</text>
                    <text x="40" y="155" textAnchor="middle" className="text-xs fill-gray-600">-14€</text>
                    
                    {/* Profil Straddle */}
                    <path d="M 50 155 L 120 155 L 200 95 L 280 155 L 350 95" 
                          stroke="#7c3aed" strokeWidth="3" fill="none"/>
                    
                    {/* Zone de perte */}
                    <rect x="120" y="155" width="160" height="25" fill="#fca5a5" opacity="0.3"/>
                    <text x="200" y="170" textAnchor="middle" className="text-xs fill-red-600">Zone de perte</text>
                    
                    {/* Points de seuil */}
                    <circle cx="120" cy="155" r="4" fill="#dc2626"/>
                    <circle cx="280" cy="155" r="4" fill="#dc2626"/>
                    <circle cx="200" cy="155" r="4" fill="#7c3aed"/>
                  </svg>
                </div>
                
                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  <p><strong>Seuils de rentabilité :</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Seuil bas : 100€ - 14€ = 86€</li>
                    <li>Seuil haut : 100€ + 14€ = 114€</li>
                  </ul>
                  <p className="text-violet-700 font-medium mt-2">
                    💡 Profitable si S &lt; 86€ ou S &gt; 114€
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-violet-100 p-4 rounded mt-4">
              <p className="text-violet-800 font-medium">
                🎯 <strong>Stratégie :</strong> Pari sur la volatilité sans direction. Idéale avant des annonces 
                importantes (résultats, OPA, etc.). Perte maximale limitée à 14€ si le cours reste stable.
              </p>
            </div>
          </div>

          {/* 6. Straddle inversé - Vente simultanée */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⚖️ 6. Straddle inversé - Vente simultanée Call + Put</h2>
            
            <div className="bg-white p-4 rounded border mb-4">
              <h3 className="font-bold text-gray-700 mb-2">Mécanisme :</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Encaissement des deux primes (15€ total). Profitable si le cours reste proche du prix d&apos;exercice.
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-800 font-medium">
                🎯 <strong>Stratégie :</strong> Spéculation sur la stabilité. Gains maximaux si le cours reste 
                à 100€, pertes croissantes si le cours s&apos;écarte du prix d&apos;exercice.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded mt-4">
              <h3 className="font-bold text-blue-700 mb-3">💡 Exemple détaillé :</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Situation :</strong> Vous pensez que l&apos;action XYZ va rester stable autour de 100€</p>
                <p><strong>Action :</strong> Vente simultanée d&apos;un CALL et d&apos;un PUT à 100€</p>
                <p><strong>Primes encaissées :</strong> 8€ (CALL) + 6€ (PUT) = 14€</p>
                <p><strong>Scénarios à l&apos;échéance :</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Si S = 100€ :</strong> Aucune option exercée → Gain maximal = 14€</li>
                  <li><strong>Si S = 95€ :</strong> PUT exercé → Gain = 14 - (100-95) = 9€</li>
                  <li><strong>Si S = 105€ :</strong> CALL exercé → Gain = 14 - (105-100) = 9€</li>
                  <li><strong>Si S = 86€ :</strong> PUT exercé → Gain = 14 - (100-86) = 0€ (seuil bas)</li>
                  <li><strong>Si S = 114€ :</strong> CALL exercé → Gain = 14 - (114-100) = 0€ (seuil haut)</li>
                  <li><strong>Si S = 80€ :</strong> PUT exercé → Perte = 14 - (100-80) = -6€</li>
                  <li><strong>Si S = 120€ :</strong> CALL exercé → Perte = 14 - (120-100) = -6€</li>
                </ul>
                <p className="text-gray-700 font-medium">⚠️ <strong>Risque :</strong> Perte importante si forte volatilité (seuils : 86€ et 114€)</p>
              </div>
            </div>
          </div>

          {/* Moyen mnémotechnique */}
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">🧠 Moyens mnémotechniques</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>&quot;ACHETER = ANTICIPER&quot;</strong> - Acheter une option = anticiper un mouvement favorable</p>
                <p><strong>&quot;VENDRE = VOLATILITÉ LIMITÉE&quot;</strong> - Vendre une option = parier sur une faible volatilité</p>
                <p><strong>&quot;STRADDLE = STRESS&quot;</strong> - Position profitable en cas de forte volatilité (stress du marché)</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/section-1" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Section I
          </Link>
          
          <Link href="/section-3" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            Section III - Black & Scholes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}