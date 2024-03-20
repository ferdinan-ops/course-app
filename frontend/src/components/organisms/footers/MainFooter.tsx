import { HomeSection } from '..'
import { Brand } from '@/components/atoms'
import { HiEnvelope, HiPhone } from 'react-icons/hi2'

export default function MainFooter() {
  return (
    <footer className="py-5 xl:py-5">
      <HomeSection.Container className="flex items-center justify-between gap-5 py-0 xl:w-[1180px] xl:px-0">
        <Brand className="gap-2" />
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 text-sm font-medium text-font">
            <HiPhone />
            <p>081234567890</p>
          </div>
          <p>|</p>
          <div className="flex items-center gap-2 text-sm font-medium text-font">
            <HiEnvelope />
            <p>username@email.com</p>
          </div>
        </div>
      </HomeSection.Container>
    </footer>
  )
}
