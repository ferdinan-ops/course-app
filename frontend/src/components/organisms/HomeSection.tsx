import { cn } from '@/lib/utils'

interface HomeSectionProps {
  children: React.ReactNode
  className?: string
}

export default function HomeSection({ children, className }: HomeSectionProps) {
  return (
    <section className={cn('flex flex-col items-center justify-center overflow-hidden xl:min-h-screen', className)}>
      {children}
    </section>
  )
}

const Container = ({ children, className }: HomeSectionProps) => (
  <div
    className={cn(
      'flex flex-col items-center gap-5 px-5 py-10 md:px-10 xl:mx-auto xl:w-[980px] xl:flex-row xl:gap-20 xl:py-0',
      className
    )}
  >
    {children}
  </div>
)

interface ImageProps {
  src: string
  alt: string
  className?: string
}

const Image = ({ src, alt, className }: ImageProps) => (
  <img src={src} alt={alt} className={cn('w-full object-cover xl:w-[60%]', className)} />
)

const Body = ({ children, className }: HomeSectionProps) => (
  <div className={cn('flex flex-col items-start', className)}>{children}</div>
)

const Title = ({ children, className }: HomeSectionProps) => (
  <h1 className={cn('text-3xl font-bold text-font md:text-4xl', className)}>{children}</h1>
)

const SubTitle = ({ children, className }: HomeSectionProps) => (
  <p className={cn('text-[15px] font-medium text-[#47BB8E] md:text-base', className)}>{children}</p>
)

HomeSection.Container = Container
HomeSection.Image = Image
HomeSection.Body = Body
HomeSection.Title = Title
HomeSection.SubTitle = SubTitle
