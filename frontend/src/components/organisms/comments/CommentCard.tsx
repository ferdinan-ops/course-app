import { Button } from '@/components/ui/button'
import { HiEllipsisHorizontal } from 'react-icons/hi2'

export default function CommentCard() {
  return (
    <article className="flex items-start">
      <div className="flex h-8 w-8 overflow-hidden rounded-full border-2 md:mr-3">
        <img src="https://github.com/shadcn.png" alt="profile" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2 border-b-2 border-slate-200 pb-3 md:pb-4">
        <div className="flex h-8 w-full items-center justify-between md:h-8">
          <div className="flex flex-col gap-0 md:flex-row md:items-center md:gap-2">
            <div className="text-[13px] font-semibold hover:text-primary md:text-[15px]">
              <p className="w-max">Budiana</p>
            </div>
            <span className="hidden text-xs text-font/60 md:text-sm">&bull;</span>
            <span className="text-xs text-font/60 md:text-sm">3 days ago</span>
          </div>
          <Button size="icon" variant="outline" className="h-6 w-6 p-0">
            <HiEllipsisHorizontal />
          </Button>
          {/* {userLogin && <More comment={comment} questionId={questionId} />} */}
        </div>
        <p className="text-[13px] md:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima rerum officia impedit soluta recusandae
          omnis, ipsum beatae sunt ea, provident voluptate perferendis a sequi laboriosam velit nobis itaque porro rem.
        </p>
      </div>
    </article>
  )
}
