import { Link } from 'react-router-dom'
import { Button } from '../Button'

export function Menu() {
  return (
    <nav className="flex gap-4 items-center text-green-500 font-semibold">
      <Link
        to="/friends"
        className="drop-shadow-sm shadow-green-600 hover:underline"
      >
        Your Buddies
      </Link>
      <Link
        to="/public"
        className="drop-shadow-sm shadow-green-600 hover:underline"
      >
        Public Blah&acute;s
      </Link>
      <Link
        to="/profiles"
        className="drop-shadow-sm shadow-green-600 hover:underline"
      >
        Profiles
      </Link>

      <Button>Logout</Button>
    </nav>
  )
}
