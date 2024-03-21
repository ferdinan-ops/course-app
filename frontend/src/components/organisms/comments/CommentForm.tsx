import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { HiPaperAirplane } from 'react-icons/hi2'

export default function CommentForm() {
  const forms = useForm()

  const onSubmit = () => {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInput = (e: any) => {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <Form {...forms}>
      <form
        className="flex justify-between gap-5 rounded-lg border-2 border-slate-200 p-2 focus-within:border-primary md:p-3"
        onSubmit={forms.handleSubmit(onSubmit)}
      >
        <div className="flex h-8 w-8 overflow-hidden rounded-full border-2 md:h-10 md:w-10">
          <img src="https://github.com/shadcn.png" alt="profile" className="h-full w-full object-cover" />
        </div>
        <FormField
          name="comment"
          control={forms.control}
          render={({ field }) => (
            <textarea
              spellCheck="false"
              rows={1}
              value={field.value}
              onChange={field.onChange}
              onInput={handleInput}
              className="flex-1 resize-none self-start overflow-y-hidden border-none pt-[7px] text-sm outline-none md:pt-[9px] md:text-base"
            />
          )}
        />
        <Button className="shadow-button self-end px-3 md:px-4 md:text-xs">
          <span className="hidden md:flex">Upload Comment</span>
          <HiPaperAirplane className="md:hidden" />
        </Button>
      </form>
    </Form>
  )
}
