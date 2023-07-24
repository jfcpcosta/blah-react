import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="h-full flex flex-col gap-8">
      <Header />
      <main className="w-wrapper mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
