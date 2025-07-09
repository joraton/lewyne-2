'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { AlertCircle, CheckCircle, Info, Lightbulb, Calculator, TrendingUp } from 'lucide-react'

type BoxType = 'info' | 'success' | 'warning' | 'tip' | 'formula' | 'example'

interface InfoBoxProps {
  type: BoxType
  title?: string
  children: ReactNode
  icon?: ReactNode
}

const boxStyles = {
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-800',
    icon: <Info className="w-5 h-5" />,
    iconBg: 'bg-blue-500'
  },
  success: {
    container: 'bg-green-50 border-green-200 text-green-800',
    icon: <CheckCircle className="w-5 h-5" />,
    iconBg: 'bg-green-500'
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    icon: <AlertCircle className="w-5 h-5" />,
    iconBg: 'bg-yellow-500'
  },
  tip: {
    container: 'bg-purple-50 border-purple-200 text-purple-800',
    icon: <Lightbulb className="w-5 h-5" />,
    iconBg: 'bg-purple-500'
  },
  formula: {
    container: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    icon: <Calculator className="w-5 h-5" />,
    iconBg: 'bg-indigo-500'
  },
  example: {
    container: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    icon: <TrendingUp className="w-5 h-5" />,
    iconBg: 'bg-emerald-500'
  }
}

export default function InfoBox({ type, title, children, icon }: InfoBoxProps) {
  const style = boxStyles[type]
  const displayIcon = icon || style.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`p-4 rounded-lg border-2 ${style.container} mb-4`}
    >
      <div className="flex items-start gap-3">
        <div className={`${style.iconBg} text-white rounded-full p-2 flex-shrink-0`}>
          {displayIcon}
        </div>
        <div className="flex-1">
          {title && (
            <h4 className="font-bold mb-2 text-lg">{title}</h4>
          )}
          <div className="text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Composants spécialisés pour plus de facilité d'utilisation
export function InfoNote({ title, children }: { title?: string; children: ReactNode }) {
  return <InfoBox type="info" title={title}>{children}</InfoBox>
}

export function SuccessNote({ title, children }: { title?: string; children: ReactNode }) {
  return <InfoBox type="success" title={title}>{children}</InfoBox>
}

export function WarningNote({ title, children }: { title?: string; children: ReactNode }) {
  return <InfoBox type="warning" title={title}>{children}</InfoBox>
}

export function TipNote({ title, children }: { title?: string; children: ReactNode }) {
  return <InfoBox type="tip" title={title}>{children}</InfoBox>
}

export function FormulaBox({ title, children }: { title?: string; children: ReactNode }) {
  return <InfoBox type="formula" title={title}>{children}</InfoBox>
}

export function ExampleBox({ title, children }: { title?: string; children: ReactNode }) {
  return <InfoBox type="example" title={title}>{children}</InfoBox>
}