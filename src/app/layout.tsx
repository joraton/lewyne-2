import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Options Financières - Cours DSCG",
  description: "Cours complet sur les options financières : définitions, stratégies, modèle de Black & Scholes et options réelles. Formation DSCG avec exercices pratiques.",
  keywords: "options financières, DSCG, Black Scholes, call, put, finance, cours",
  authors: [{ name: "Cours DSCG" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {children}
        </div>
      </body>
    </html>
  )
}
