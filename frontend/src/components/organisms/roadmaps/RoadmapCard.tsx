import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

interface RoadmapCardProps {
  title: string
  countClass: number
}

export default function RoadmapCard({ title, countClass }: RoadmapCardProps) {
  const navigate = useNavigate()

  return (
    <article className="rounded-lg bg-white p-5">
      <h1 className="text-xl font-bold text-font">{title}</h1>
      <p className="text-[15px] text-font/60">{countClass} courses is avaliable</p>
      <Button className="mt-5 w-full text-xs" onClick={() => navigate('/roadmap/1')}>
        Start Journey
      </Button>
    </article>
  )
}
