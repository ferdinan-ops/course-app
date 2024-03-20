import { cn } from '@/lib/utils'

interface HeadingProps {
  children: React.ReactNode
  className?: string
}
export default function Heading({ children, className }: HeadingProps) {
  return <div className={cn(className)}>{children}</div>
}

const Title = ({ children, className }: HeadingProps) => (
  <h1 className={cn('text-3xl font-bold text-font md:text-4xl', className)}>{children}</h1>
)

const SubTitle = ({ children, className }: HeadingProps) => (
  <p className={cn('text-[15px] font-medium text-[#47BB8E] md:text-base', className)}>{children}</p>
)

Heading.Title = Title
Heading.SubTitle = SubTitle
