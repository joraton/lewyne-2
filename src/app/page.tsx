import CourseHeader from '@/components/home/CourseHeader'
import CoursePlan from '@/components/home/CoursePlan'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        {/* En-tête du cours */}
        <CourseHeader />
        
        {/* Plan du cours */}
        <CoursePlan />
      </div>
    </div>
  )
}
