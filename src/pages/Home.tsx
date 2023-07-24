import banner from '@/assets/banner.jpeg'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Panel } from '@/components/Panel'

export function Home() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="">
        <img src={banner} alt="Banner" className="rounded-lg shadow" />
      </div>
      <Panel title="New on Blah?" className="">
        <form className="flex flex-col px-4 gap-4">
          <Input type="email" name="email" placeholder="Your email" />
          <Input type="text" name="username" placeholder="Your username" />
          <Input type="text" name="name" placeholder="Your name" />
          <Input type="password" name="password" placeholder="Your password" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />

          <Button type="submit">Create your account</Button>
        </form>
      </Panel>
    </div>
  )
}
