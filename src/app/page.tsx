import CourseHeader from '@/components/home/CourseHeader'
import CoursePlan from '@/components/home/CoursePlan'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span>Accueil</span>
          <span className="mx-2">&gt;</span>
          <span>Cours</span>
          <span className="mx-2">&gt;</span>
          <span className="text-blue-600 font-medium">Les Options Financières</span>
        </nav>
        
        <CourseHeader />
        <CoursePlan />
      </div>
    </main>
  )
}
