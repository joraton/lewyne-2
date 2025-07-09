'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calculator } from 'lucide-react'

export default function Section3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Plan du cours
          </Link>
          
          <div className="bg-orange-100 rounded-full px-4 py-2">
            <span className="text-orange-800 font-medium">Section III</span>
          </div>
          
          <Link href="/quiz" className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors">
            Quiz
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div className="bg-orange-600 h-2 rounded-full" style={{ width: '66.67%' }}></div>
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
            <div className="bg-orange-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Formule de Black & Scholes</h1>
              <p className="text-gray-600 mt-2">Modèle de pricing et options réelles</p>
            </div>
          </div>

          {/* Paramètres du modèle */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">📊 Paramètres du modèle</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full w-3 h-3 flex-shrink-0"></div>
                  <span><strong>C :</strong> Prime du call à calculer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full w-3 h-3 flex-shrink-0"></div>
                  <span><strong>S :</strong> Cours comptant du sous-jacent</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full w-3 h-3 flex-shrink-0"></div>
                  <span><strong>E :</strong> Prix d&apos;exercice</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full w-3 h-3 flex-shrink-0"></div>
                  <span><strong>σ :</strong> Volatilité du sous-jacent</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full w-3 h-3 flex-shrink-0"></div>
                  <span><strong>τ :</strong> Durée jusqu&apos;à l&apos;échéance (en années)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full w-3 h-3 flex-shrink-0"></div>
                  <span><strong>r :</strong> Taux sans risque</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formule principale */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">🧮 Formule de Black & Scholes</h2>
            
            <div className="bg-white p-6 rounded border text-center mb-4">
              <div className="text-2xl font-bold text-purple-600 mb-4">
                C = S × N(d₁) - E × e^(-rτ) × N(d₂)
              </div>
              <div className="text-lg text-gray-700">
                <p className="mb-2">où :</p>
                <p className="mb-1">d₁ = [ln(S/E) + (r + σ²/2)τ] / (σ√τ)</p>
                <p>d₂ = d₁ - σ√τ</p>
              </div>
            </div>
            
            <div className="bg-purple-100 p-4 rounded mb-4">
              <p className="text-purple-800 font-medium">
                <strong>Prime du PUT :</strong> P = C - S + E × e^(-rτ)
              </p>
            </div>

            {/* Schéma conceptuel */}
            <div className="bg-white p-6 rounded border">
              <h3 className="font-bold text-purple-700 mb-4 text-center">Schéma conceptuel du modèle</h3>
              <svg viewBox="0 0 800 400" className="w-full h-64">
                {/* Axes */}
                <line x1="50" y1="350" x2="750" y2="350" stroke="#374151" strokeWidth="2"/>
                <line x1="50" y1="350" x2="50" y2="50" stroke="#374151" strokeWidth="2"/>
                
                {/* Labels des axes */}
                <text x="400" y="380" textAnchor="middle" className="text-sm fill-gray-600">Cours du sous-jacent (S)</text>
                <text x="20" y="200" textAnchor="middle" className="text-sm fill-gray-600" transform="rotate(-90 20 200)">Prime de l&apos;option (C)</text>
                
                {/* Courbe de Black & Scholes */}
                <path d="M 50 340 Q 200 320 350 250 Q 500 150 650 80 Q 700 60 750 50" 
                      fill="none" stroke="#7c3aed" strokeWidth="3"/>
                
                {/* Valeur intrinsèque */}
                <line x1="300" y1="350" x2="750" y2="50" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"/>
                
                {/* Prix d&apos;exercice */}
                <line x1="300" y1="350" x2="300" y2="50" stroke="#059669" strokeWidth="2" strokeDasharray="3,3"/>
                <text x="305" y="40" className="text-sm fill-green-600">E = 100€</text>
                
                {/* Zones */}
                <text x="150" y="30" className="text-sm fill-red-600 font-bold">Hors de la monnaie</text>
                <text x="500" y="30" className="text-sm fill-green-600 font-bold">Dans la monnaie</text>
                
                {/* Légende */}
                <g transform="translate(550, 300)">
                  <rect x="0" y="0" width="180" height="80" fill="white" stroke="#d1d5db" rx="5"/>
                  <line x1="10" y1="20" x2="30" y2="20" stroke="#7c3aed" strokeWidth="3"/>
                  <text x="35" y="25" className="text-xs fill-gray-700">Prime Black & Scholes</text>
                  <line x1="10" y1="40" x2="30" y2="40" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"/>
                  <text x="35" y="45" className="text-xs fill-gray-700">Valeur intrinsèque</text>
                  <line x1="10" y1="60" x2="30" y2="60" stroke="#059669" strokeWidth="2" strokeDasharray="3,3"/>
                  <text x="35" y="65" className="text-xs fill-gray-700">Prix d&apos;exercice</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Analyse de sensibilité - Les Grecques */}
          <div className="bg-orange-50 p-6 rounded-lg mb-8 border border-orange-200">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">📊 Analyse de sensibilité - Les Grecques</h2>
            
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-orange-700 mb-3">Delta (Δ)</h3>
                <p className="text-gray-700 text-sm mb-2">Sensibilité au cours du sous-jacent</p>
                <div className="bg-orange-100 p-3 rounded">
                  <p className="text-orange-800 font-mono text-sm">Δ = ∂C/∂S = N(d₁)</p>
                  <p className="text-orange-700 text-xs mt-1">Varie entre 0 et 1 pour un call</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-orange-700 mb-3">Gamma (Γ)</h3>
                <p className="text-gray-700 text-sm mb-2">Sensibilité du delta</p>
                <div className="bg-orange-100 p-3 rounded">
                  <p className="text-orange-800 font-mono text-sm">Γ = ∂²C/∂S²</p>
                  <p className="text-orange-700 text-xs mt-1">Maximum à la monnaie</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-orange-700 mb-3">Theta (Θ)</h3>
                <p className="text-gray-700 text-sm mb-2">Sensibilité au temps</p>
                <div className="bg-orange-100 p-3 rounded">
                  <p className="text-orange-800 font-mono text-sm">Θ = ∂C/∂τ</p>
                  <p className="text-orange-700 text-xs mt-1">Toujours négatif (érosion)</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-orange-700 mb-3">Vega (ν)</h3>
                <p className="text-gray-700 text-sm mb-2">Sensibilité à la volatilité</p>
                <div className="bg-orange-100 p-3 rounded">
                  <p className="text-orange-800 font-mono text-sm">ν = ∂C/∂σ</p>
                  <p className="text-orange-700 text-xs mt-1">Toujours positif</p>
                </div>
              </div>
            </div>
            
            {/* Graphique des grecques */}
            <div className="bg-white p-6 rounded border">
              <h3 className="font-bold text-orange-700 mb-4 text-center">Évolution des Grecques selon le cours du sous-jacent</h3>
              <svg viewBox="0 0 800 300" className="w-full h-48">
                {/* Axes */}
                <line x1="50" y1="250" x2="750" y2="250" stroke="#374151" strokeWidth="2"/>
                <line x1="50" y1="250" x2="50" y2="50" stroke="#374151" strokeWidth="2"/>
                
                {/* Labels */}
                <text x="400" y="280" textAnchor="middle" className="text-sm fill-gray-600">Cours du sous-jacent</text>
                <text x="20" y="150" textAnchor="middle" className="text-sm fill-gray-600" transform="rotate(-90 20 150)">Valeur</text>
                
                {/* Prix d&apos;exercice */}
                <line x1="400" y1="250" x2="400" y2="50" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
                <text x="405" y="60" className="text-xs fill-gray-600">E</text>
                
                {/* Delta - courbe S */}
                <path d="M 50 240 Q 200 220 400 150 Q 600 80 750 70" 
                      fill="none" stroke="#3b82f6" strokeWidth="2"/>
                <text x="700" y="80" className="text-xs fill-blue-600">Delta</text>
                
                {/* Gamma - courbe en cloche */}
                <path d="M 50 250 Q 200 200 400 100 Q 600 200 750 250" 
                      fill="none" stroke="#ef4444" strokeWidth="2"/>
                <text x="420" y="90" className="text-xs fill-red-600">Gamma</text>
                
                {/* Theta - courbe négative */}
                <path d="M 50 180 Q 200 160 400 120 Q 600 160 750 180" 
                      fill="none" stroke="#10b981" strokeWidth="2"/>
                <text x="420" y="110" className="text-xs fill-green-600">|Theta|</text>
                
                {/* Vega - courbe similaire à Gamma */}
                <path d="M 50 230 Q 200 190 400 130 Q 600 190 750 230" 
                      fill="none" stroke="#8b5cf6" strokeWidth="2"/>
                <text x="420" y="140" className="text-xs fill-purple-600">Vega</text>
              </svg>
            </div>
          </div>

          {/* Exemple 1 */}
          <div className="bg-green-50 p-6 rounded-lg mb-8 border border-green-200">
            <h2 className="text-2xl font-bold text-green-800 mb-4">📈 Exemple 1 - Call dans la monnaie</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-green-700 mb-3">Données :</h3>
                <ul className="space-y-1 text-gray-700">
                  <li><strong>S :</strong> 120€</li>
                  <li><strong>E :</strong> 100€</li>
                  <li><strong>σ :</strong> 30%</li>
                  <li><strong>τ :</strong> 3 mois (0,25)</li>
                  <li><strong>r :</strong> 3%</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-green-700 mb-3">Calculs détaillés :</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Étape 1 :</strong> ln(S/E) = ln(120/100) = 0,1823</p>
                  <p><strong>Étape 2 :</strong> (r + σ²/2)τ = (0,03 + 0,09/2) × 0,25 = 0,0188</p>
                  <p><strong>Étape 3 :</strong> σ√τ = 0,30 × √0,25 = 0,15</p>
                  <p><strong>d₁ :</strong> (0,1823 + 0,0188) / 0,15 = 1,34</p>
                  <p><strong>d₂ :</strong> 1,34 - 0,15 = 1,19</p>
                  <p><strong>N(1,34) :</strong> 0,9099</p>
                  <p><strong>N(1,19) :</strong> 0,8830</p>
                </div>
              </div>
            </div>
            
            {/* Calcul final détaillé */}
            <div className="bg-white p-4 rounded border mt-4">
              <h3 className="font-bold text-green-700 mb-3">Calcul final du CALL :</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Partie 1 :</strong> S × N(d₁) = 120 × 0,9099 = 109,19€</p>
                <p><strong>Partie 2 :</strong> E × e^(-rτ) = 100 × e^(-0,03×0,25) = 100 × 0,9925 = 99,25€</p>
                <p><strong>Partie 3 :</strong> E × e^(-rτ) × N(d₂) = 99,25 × 0,8830 = 87,64€</p>
                <p className="font-bold text-green-800"><strong>Prime CALL :</strong> 109,19 - 87,64 = 21,55€</p>
              </div>
            </div>
            
            <div className="bg-green-100 p-4 rounded mt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Résultat CALL :</h4>
                  <p className="text-green-700">
                    <strong>Prime :</strong> 21,55€<br/>
                    <strong>VI :</strong> 20€<br/>
                    <strong>VT :</strong> 1,55€
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Résultat PUT :</h4>
                  <p className="text-green-700">
                    <strong>Prime :</strong> 0,80€<br/>
                    <strong>VI :</strong> 0€<br/>
                    <strong>VT :</strong> 0,80€
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple 2 */}
          <div className="bg-red-50 p-6 rounded-lg mb-8 border border-red-200">
            <h2 className="text-2xl font-bold text-red-800 mb-4">📉 Exemple 2 - Call hors de la monnaie</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-red-700 mb-3">Données :</h3>
                <ul className="space-y-1 text-gray-700">
                  <li><strong>S :</strong> 70€</li>
                  <li><strong>E :</strong> 100€</li>
                  <li><strong>σ :</strong> 20%</li>
                  <li><strong>τ :</strong> 3 mois (0,25)</li>
                  <li><strong>r :</strong> 2%</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-red-700 mb-3">Calculs :</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>d₁ :</strong> -3,47</p>
                  <p><strong>d₂ :</strong> -3,57</p>
                  <p><strong>N(-3,47) :</strong> 0,0003</p>
                  <p><strong>N(-3,57) :</strong> 0,0002</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-100 p-4 rounded mt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Résultat CALL :</h4>
                  <p className="text-red-700">
                    <strong>Prime :</strong> 0,001€<br/>
                    <strong>VI :</strong> 0€<br/>
                    <strong>VT :</strong> 0,001€
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Résultat PUT :</h4>
                  <p className="text-red-700">
                    <strong>Prime :</strong> 29,50€<br/>
                    <strong>VI :</strong> 30€<br/>
                    <strong>VT :</strong> -0,50€ (impossible!)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-100 p-3 rounded mt-3">
              <p className="text-yellow-800 text-sm">
                ⚠️ <strong>Note :</strong> Une prime ne peut jamais être négative. 
                Le calcul du put montre les limites du modèle dans certaines conditions extrêmes.
              </p>
            </div>
          </div>

          {/* Exemple 3 - Analyse de sensibilité */}
          <div className="bg-cyan-50 p-6 rounded-lg mb-8 border border-cyan-200">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">🔍 Exemple 3 - Analyse de sensibilité</h2>
            
            <div className="bg-white p-4 rounded border mb-4">
              <h3 className="font-bold text-cyan-700 mb-3">Données de base :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-gray-700">
                  <li><strong>S :</strong> 100€</li>
                  <li><strong>E :</strong> 100€ (à la monnaie)</li>
                  <li><strong>σ :</strong> 25%</li>
                </ul>
                <ul className="space-y-1 text-gray-700">
                  <li><strong>τ :</strong> 6 mois (0,5)</li>
                  <li><strong>r :</strong> 4%</li>
                  <li><strong>Prime initiale :</strong> 8,92€</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-cyan-700 mb-3">Impact des variations :</h4>
                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded">
                    <p className="font-bold text-cyan-800">Si S passe à 105€ :</p>
                    <p className="text-cyan-700">Nouvelle prime : 11,45€</p>
                    <p className="text-cyan-700">Variation : +2,53€</p>
                    <p className="text-cyan-700">Delta ≈ 0,51</p>
                  </div>
                  
                  <div className="bg-cyan-50 p-3 rounded">
                    <p className="font-bold text-cyan-800">Si σ passe à 30% :</p>
                    <p className="text-cyan-700">Nouvelle prime : 10,68€</p>
                    <p className="text-cyan-700">Variation : +1,76€</p>
                    <p className="text-cyan-700">Vega ≈ 35,2</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-cyan-700 mb-3">Érosion temporelle :</h4>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <p className="font-bold text-red-800">Après 1 mois :</p>
                    <p className="text-red-700">Nouvelle prime : 8,15€</p>
                    <p className="text-red-700">Perte : -0,77€</p>
                    <p className="text-red-700">Theta ≈ -0,026/jour</p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <p className="font-bold text-red-800">À 1 mois de l&apos;échéance :</p>
                    <p className="text-red-700">Prime restante : 3,45€</p>
                    <p className="text-red-700">Accélération de l&apos;érosion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple 4 - Arbitrage */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">⚖️ Exemple 4 - Détection d&apos;arbitrage</h2>
            
            <div className="bg-white p-4 rounded border mb-4">
              <h3 className="font-bold text-amber-700 mb-3">Situation de marché :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-amber-800">Prix observés :</p>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>Call coté :</strong> 15€</li>
                    <li><strong>Put coté :</strong> 8€</li>
                    <li><strong>Action :</strong> 105€</li>
                    <li><strong>Strike :</strong> 100€</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-amber-800">Paramètres :</p>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>Échéance :</strong> 3 mois</li>
                    <li><strong>Taux :</strong> 3%</li>
                    <li><strong>Volatilité :</strong> 20%</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-amber-700 mb-3">Calcul théorique :</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Call théorique :</strong> 12,85€</p>
                  <p><strong>Put théorique :</strong> 7,10€</p>
                  <p className="text-amber-800 font-bold mt-3">Écarts détectés :</p>
                  <p className="text-red-600">Call surévalué : +2,15€</p>
                  <p className="text-red-600">Put surévalué : +0,90€</p>
                </div>
              </div>
              
              <div className="bg-amber-100 p-4 rounded">
                <h4 className="font-bold text-amber-800 mb-3">Stratégie d&apos;arbitrage :</h4>
                <div className="space-y-2 text-sm text-amber-700">
                  <p><strong>1.</strong> Vendre le call à 15€</p>
                  <p><strong>2.</strong> Vendre le put à 8€</p>
                  <p><strong>3.</strong> Acheter l&apos;action à 105€</p>
                  <p><strong>4.</strong> Placer 100×e^(-0,03×0,25) = 99,25€</p>
                  <p className="font-bold text-green-600 mt-3">Profit garanti : 0,75€</p>
                </div>
              </div>
            </div>
          </div>

          {/* Options réelles */}
          <div className="bg-violet-50 p-6 rounded-lg mb-8 border border-violet-200">
            <h2 className="text-2xl font-bold text-violet-800 mb-4">🏢 Options réelles en finance d&apos;entreprise</h2>
            
            <div className="bg-white p-4 rounded border mb-4">
              <h3 className="font-bold text-violet-700 mb-3">Concept :</h3>
              <p className="text-gray-700 leading-relaxed">
                Les actionnaires détiennent implicitement un <strong>call sur les actifs de l&apos;entreprise</strong> 
                du fait de leur responsabilité limitée. À l&apos;échéance de la dette :
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Si <strong>Valeur des actifs &gt; Dette</strong> : exercice du call (remboursement)</li>
                <li>• Si <strong>Valeur des actifs &lt; Dette</strong> : abandon aux créanciers (faillite)</li>
              </ul>
            </div>
            
            {/* Schéma de la structure financière */}
            <div className="bg-white p-6 rounded border mb-4">
              <h3 className="font-bold text-violet-700 mb-4 text-center">Structure financière vue comme option</h3>
              <svg viewBox="0 0 800 300" className="w-full h-48">
                {/* Entreprise */}
                <rect x="50" y="50" width="200" height="100" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="10"/>
                <text x="150" y="80" textAnchor="middle" className="text-sm font-bold fill-violet-700">ENTREPRISE</text>
                <text x="150" y="100" textAnchor="middle" className="text-xs fill-violet-600">Valeur des actifs</text>
                <text x="150" y="115" textAnchor="middle" className="text-xs fill-violet-600">VE = 100M€</text>
                <text x="150" y="130" textAnchor="middle" className="text-xs fill-violet-600">σ = 30%</text>
                
                {/* Flèches */}
                <path d="M 250 80 L 350 60" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <path d="M 250 120 L 350 140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                
                {/* Créanciers */}
                <rect x="400" y="40" width="150" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5"/>
                <text x="475" y="60" textAnchor="middle" className="text-sm font-bold fill-amber-700">CRÉANCIERS</text>
                <text x="475" y="75" textAnchor="middle" className="text-xs fill-amber-600">Dette = 80M€</text>
                <text x="475" y="90" textAnchor="middle" className="text-xs fill-amber-600">Échéance = 2 ans</text>
                
                {/* Actionnaires */}
                <rect x="400" y="120" width="150" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5"/>
                <text x="475" y="140" textAnchor="middle" className="text-sm font-bold fill-green-700">ACTIONNAIRES</text>
                <text x="475" y="155" textAnchor="middle" className="text-xs fill-green-600">Call sur actifs</text>
                <text x="475" y="170" textAnchor="middle" className="text-xs fill-green-600">Strike = 80M€</text>
                
                {/* Scénarios */}
                <g transform="translate(600, 50)">
                  <rect x="0" y="0" width="180" height="120" fill="white" stroke="#d1d5db" rx="5"/>
                  <text x="90" y="20" textAnchor="middle" className="text-sm font-bold fill-gray-700">À l&apos;échéance :</text>
                  
                  <text x="10" y="40" className="text-xs fill-green-600">Si VE &gt; 80M€ :</text>
                  <text x="10" y="55" className="text-xs fill-green-600">• Remboursement</text>
                  <text x="10" y="70" className="text-xs fill-green-600">• Actionnaires gardent</text>
                  <text x="10" y="85" className="text-xs fill-green-600">  le surplus</text>
                  
                  <text x="10" y="105" className="text-xs fill-red-600">Si VE &lt; 80M€ :</text>
                  <text x="10" y="120" className="text-xs fill-red-600">• Faillite</text>
                </g>
                
                {/* Définition des marqueurs */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#374151"/>
                  </marker>
                </defs>
              </svg>
            </div>
            
            <div className="bg-violet-100 p-4 rounded">
              <h4 className="font-bold text-violet-800 mb-2">Paramètres du call implicite :</h4>
              <ul className="space-y-1 text-violet-700 text-sm">
                <li><strong>S :</strong> Valeur économique des actifs (VE)</li>
                <li><strong>E :</strong> Montant de la dette à rembourser (D)</li>
                <li><strong>σ :</strong> Volatilité des actifs</li>
                <li><strong>τ :</strong> Maturité résiduelle de la dette</li>
              </ul>
            </div>
          </div>

          {/* Exemple options réelles */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">💼 Exemple - Évaluation des capitaux propres</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-gray-700 mb-3">Données :</h3>
                <ul className="space-y-1 text-gray-700">
                  <li><strong>VE :</strong> 80M€</li>
                  <li><strong>D :</strong> 100M€</li>
                  <li><strong>σ :</strong> 40%</li>
                  <li><strong>τ :</strong> 3 mois (0,25)</li>
                  <li><strong>r :</strong> 3%</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-gray-700 mb-3">Résultats :</h3>
                <ul className="space-y-1 text-gray-700">
                  <li><strong>Valeur des CP :</strong> 1,27M€</li>
                  <li><strong>Valeur de la dette :</strong> 78,73M€</li>
                  <li><strong>Probabilité de faillite :</strong> 88,1%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exemple décision d&apos;investissement */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8 border border-indigo-200">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">🌎 Exemple - Décision d&apos;investissement international</h2>
            
            <div className="bg-white p-4 rounded border mb-4">
              <h3 className="font-bold text-indigo-700 mb-3">Contexte :</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Acquisition en Uruguay (100M€) pour tester le marché, avec option d&apos;expansion au Brésil 
                dans 3 ans (1Md€). VAN classique = -10M€, mais l&apos;investissement donne accès à une option réelle.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-indigo-700 mb-2">Option sur le Brésil :</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><strong>S :</strong> 900M€ (valeur actuelle)</li>
                  <li><strong>E :</strong> 1000M€ (prix d&apos;acquisition)</li>
                  <li><strong>σ :</strong> 40%</li>
                  <li><strong>τ :</strong> 3 ans</li>
                  <li><strong>r :</strong> 5%</li>
                </ul>
              </div>
              
              <div className="bg-indigo-100 p-4 rounded">
                <h4 className="font-bold text-indigo-800 mb-2">Résultat :</h4>
                <p className="text-indigo-700">
                  <strong>Valeur de l&apos;option :</strong> 258M€<br/>
                  <strong>VAN ajustée :</strong> -10 + 258 = 248M€
                </p>
                <p className="text-green-700 font-bold mt-2">✅ Recommandation : INVESTIR</p>
              </div>
            </div>
          </div>

          {/* Conseils pratiques et erreurs courantes */}
          <div className="bg-rose-50 p-6 rounded-lg mb-8 border border-rose-200">
            <h2 className="text-2xl font-bold text-rose-800 mb-4">⚠️ Conseils pratiques et erreurs courantes</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-rose-700 mb-3">❌ Erreurs fréquentes :</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Oublier l&apos;actualisation :</strong> E × e^(-rτ) et non E</li>
                  <li>• <strong>Confondre d₁ et d₂ :</strong> d₂ = d₁ - σ√τ</li>
                  <li>• <strong>Mauvaise volatilité :</strong> σ annualisée obligatoire</li>
                  <li>• <strong>Temps en années :</strong> 3 mois = 0,25 et non 3</li>
                  <li>• <strong>Taux en décimal :</strong> 5% = 0,05 et non 5</li>
                  <li>• <strong>Logarithme népérien :</strong> ln et non log₁₀</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h3 className="font-bold text-rose-700 mb-3">✅ Bonnes pratiques :</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Vérifier la cohérence :</strong> Call &gt; max(S-E×e^(-rτ), 0)</li>
                  <li>• <strong>Tester les limites :</strong> σ→0, τ→0, S→∞</li>
                  <li>• <strong>Utiliser la parité :</strong> C - P = S - E×e^(-rτ)</li>
                  <li>• <strong>Analyser les grecques :</strong> Delta entre 0 et 1</li>
                  <li>• <strong>Volatilité implicite :</strong> Inverser le modèle</li>
                  <li>• <strong>Calibrer régulièrement :</strong> Paramètres évolutifs</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-rose-100 p-4 rounded mt-4">
              <h4 className="font-bold text-rose-800 mb-2">🎯 Points clés à retenir :</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-rose-700">
                <div>
                  <p className="font-bold">Hypothèses du modèle :</p>
                  <p>• Volatilité constante</p>
                  <p>• Pas de dividendes</p>
                  <p>• Taux sans risque constant</p>
                </div>
                <div>
                  <p className="font-bold">Limites pratiques :</p>
                  <p>• Volatilité smile</p>
                  <p>• Sauts de prix</p>
                  <p>• Coûts de transaction</p>
                </div>
                <div>
                  <p className="font-bold">Applications :</p>
                  <p>• Pricing d&apos;options</p>
                  <p>• Gestion des risques</p>
                  <p>• Évaluation d&apos;entreprises</p>
                </div>
              </div>
            </div>
          </div>

          {/* Moyen mnémotechnique */}
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">🧠 Moyens mnémotechniques</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>&quot;BLACK & SCHOLES = BANQUE & SCIENCE&quot;</strong> - Modèle scientifique utilisé par les banques</p>
              <p><strong>&quot;N(d) = NORMALE DISTRIBUTION&quot;</strong> - N représente la fonction de répartition normale</p>
              <p><strong>&quot;OPTIONS RÉELLES = OPPORTUNITÉS RÉELLES&quot;</strong> - Valoriser les opportunités futures</p>
              <p><strong>&quot;DELTA GAMMA THETA VEGA = DGTV&quot;</strong> - Les 4 grecques principales dans l&apos;ordre</p>
              <p><strong>&quot;CALL = COURS × NORMALE - EXERCICE × EXPONENTIELLE × NORMALE&quot;</strong> - Structure de la formule</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/section-2" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Section II
          </Link>
          
          <Link href="/quiz" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            Quiz d&apos;évaluation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}