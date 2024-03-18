import { Brand } from '@/components/atoms'
import { Button } from '@/components/ui/button'
import { HiBars3 } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/course', label: 'Course' },
  { to: '/roadmap', label: 'Roadmap' }
]

export default function MainHeader() {
  const navigate = useNavigate()

  return (
    <header className="fixed inset-x-0 top-0 flex h-20 items-center border-b border-zinc-200 bg-white px-5 lg:h-24 lg:border-0 lg:px-0">
      <div className="mx-auto flex w-[1180px] items-center justify-between">
        <Button variant="ghost" size="icon" className="bg-zinc-200 hover:bg-zinc-300 lg:hidden">
          <HiBars3 className="text-xl" />
        </Button>
        <Brand imageClassName="w-10" className="gap-3 text-primary" />
        <nav className="hidden items-center gap-10 text-[15px] font-medium text-font lg:flex">
          {links.map((link, i) => (
            <Link to={link.to} key={i} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={() => navigate('/sign-up')}
            className="hidden bg-zinc-200 text-xs hover:bg-zinc-300 md:flex"
          >
            Sign Up
          </Button>
          <Button
            className="bg-zinc-200 text-xs text-zinc-950 hover:bg-zinc-300 md:bg-primary md:text-zinc-50 md:hover:bg-primary/90"
            onClick={() => navigate('/sign-in')}
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
