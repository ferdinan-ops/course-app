import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { cn } from '@/lib/utils'
import * as React from 'react'
import { HiHashtag } from 'react-icons/hi2'
import { PiCommand, PiMagnifyingGlass } from 'react-icons/pi'

interface CourseSearchProps {
  action?: () => void
  className?: string
}

export default function CourseSearch({ action, className }: CourseSearchProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [keyword, setKeyword] = React.useState('')

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleClick = () => {
    setIsOpen((open) => !open)
    action && action()
  }

  return (
    <React.Fragment>
      <div
        onClick={handleClick}
        className={cn(
          'flex cursor-pointer items-center rounded-lg bg-black/5 px-4 py-3 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/5 md:w-80',
          className
        )}
      >
        <PiMagnifyingGlass className="text-lg text-black/40 dark:text-white/20" />
        <span className="ml-3 mr-3 mt-[1px] flex-1 text-[15px] font-medium text-black/40 dark:text-white/40">
          Search
        </span>
        <div className="flex items-center gap-[2px] rounded-md bg-black/10 px-1.5 py-1 text-black/60 dark:text-white/40">
          <PiCommand className="text-sm" />
          <span className="text-xs">+</span>
          <span className="text-xs">K</span>
        </div>
      </div>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Cari seluruh forum disini"
          value={keyword}
          onValueChange={(search: string) => setKeyword(search)}
        />
        <CommandList className="scroll-custom">
          <CommandEmpty>Tidak ada hasil yang dapat ditemukan</CommandEmpty>
          <CommandGroup>
            {/* {isLoading ? (
              <CommandItem className="flex items-center gap-3.5">Mengambil data...</CommandItem>
            ) : ( */}
            {/* forums?.map((forum) => ( */}
            <CommandItem>
              <button className="flex flex-1 items-center gap-3.5">
                <HiHashtag className="text-xl" />
                <span className="text-sm font-medium">title</span>
              </button>
            </CommandItem>
            {/* ))
            )} */}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </React.Fragment>
  )
}
