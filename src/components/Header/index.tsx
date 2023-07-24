import logo from '@/assets/logo.png'
import { useAuth } from '@/contexts/AuthContext'
import { Login } from './Login'
import { Menu } from './Menu'

export function Header() {
  const { isLoggedIn } = useAuth()

  return (
    <header className="bg-white shadow border-t-8 border-t-green-500 border-b">
      <div className="w-wrapper mx-auto p-2 flex justify-between items-center">
        <img src={logo} alt="Blah!" />

        {isLoggedIn ? <Menu /> : <Login />}
      </div>
    </header>
  )
}
