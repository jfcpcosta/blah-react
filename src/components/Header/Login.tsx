import { Button } from '../Button'
import { Input } from '../Input'

export function Login() {
  return (
    <form className="flex gap-2">
      <Input type="text" name="username" placeholder="Enter your username" />

      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
      />

      <Button type="submit">Login</Button>
    </form>
  )
}
