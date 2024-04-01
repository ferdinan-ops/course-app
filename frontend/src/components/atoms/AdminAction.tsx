import { HiOutlineCog6Tooth, HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { IconType } from 'react-icons'

interface AdminActionProps {
  children: React.ReactNode
}

export default function AdminAction({ children }: AdminActionProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="bg-font text-white hover:bg-font/80 hover:text-white">
          <HiOutlineCog6Tooth className="text-xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{children}</DropdownMenuContent>
    </DropdownMenu>
  )
}

interface ItemProps {
  label?: string
  icon?: IconType
  type?: 'edit' | 'delete' | 'default'
  onClick?: () => void
}

function Item({ label, type = 'default', icon: Icon, onClick }: ItemProps) {
  return (
    <DropdownMenuItem className="flex cursor-pointer items-center gap-2.5" onClick={onClick}>
      {type === 'edit' && <HiOutlinePencilSquare className="text-lg" />}
      {type === 'delete' && <HiOutlineTrash className="text-lg" />}
      {type === 'default' && Icon && <Icon className="text-lg" />}
      <p className="text-xs font-medium capitalize">{label ?? type}</p>
    </DropdownMenuItem>
  )
}

AdminAction.Item = Item
