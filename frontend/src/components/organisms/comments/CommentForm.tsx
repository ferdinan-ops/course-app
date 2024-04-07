import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { useCreateComment } from '@/store/server/useComment'
import { useForm } from 'react-hook-form'
import { HiPaperAirplane } from 'react-icons/hi2'

type FormFields = {
  content: string
}

interface CommentFormProps {
  videoId: string
}

export default function CommentForm({ videoId }: CommentFormProps) {
  const { toast } = useToast()
  const forms = useForm<FormFields>()

  const { mutate: createComment, isLoading } = useCreateComment()

  const onSubmit = (values: FormFields) => {
    if (values.content === '') {
      return toast({
        title: 'Comment is empty',
        description: 'Please fill the comment field',
        variant: 'destructive'
      })
    }

    const fields = { content: values.content, video_id: videoId }
    createComment(fields, { onSuccess: () => forms.reset() })
  }

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
          name="content"
          control={forms.control}
          rules={{ required: 'Comment is required' }}
          render={({ field }) => (
            <textarea
              spellCheck="false"
              rows={1}
              value={field.value}
              onChange={field.onChange}
              onInput={handleInput}
              placeholder="Type your comment here..."
              className="flex-1 resize-none self-start overflow-y-hidden border-none pt-[7px] text-sm outline-none placeholder:text-sm md:pt-[9px] md:text-base"
            />
          )}
        />
        <Button className="shadow-button self-end px-3 md:px-4 md:text-xs" loading={isLoading}>
          <span className="hidden md:flex">Upload Comment</span>
          <HiPaperAirplane className="md:hidden" />
        </Button>
      </form>
    </Form>
  )
}
