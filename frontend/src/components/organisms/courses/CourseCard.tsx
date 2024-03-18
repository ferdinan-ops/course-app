import { Button } from '@/components/ui/button'
import { HiOutlineClock } from 'react-icons/hi2'

export default function CourseCard() {
  return (
    <article className="rounded-xl bg-white">
      <img
        src="https://i.ytimg.com/vi/qk3R3mYiuPA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZYQMHd6nep_NvbTssktITzU4CoA"
        alt="course"
        className="w-full rounded-xl object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-font">Web Development</h3>
        <h1 className="truncate-3 mt-2 text-[13px] text-font">
          UI (User Interface) and UX (User Experience) are two important aspects of digital product design that focus on
          the interaction between the user and the product. Learning UI/UX involves understanding how users interact
          with product interfaces, as well as creating satisfying and efficient experiences for users. In studying
          UI/UX, you will learn the basic concepts, principles and best practices in effective design. You will learn
          about visual design, such as color selection, typography, layout, and icons, which aim to create an attractive
          and easy-to-use interface. In addition, you will also understand design principles such as consistency,
          simplicity, and intuitive layouts, to provide a good user experience.
        </h1>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <HiOutlineClock className="text-lg" />
            <p className="mt-1 text-sm font-semibold text-primary">10 Pertemuan</p>
          </div>
          <Button className="text-xs">Join Now</Button>
        </div>
      </div>
    </article>
  )
}
