import { Dropzone } from '@/components/atoms'
import { FileWithPreview } from '@/components/atoms/forms/Dropzone'
import { Heading } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTitle } from '@/hooks'
import * as React from 'react'
import { useForm } from 'react-hook-form'

export default function CreateCourse() {
  useTitle('Create Course')
  const [, setIsOpen] = React.useState(false)

  const forms = useForm()
  const onSubmit = () => {}

  return (
    <React.Fragment>
      <Heading className="flex flex-col gap-1 text-font">
        <Heading.Title>Create Course</Heading.Title>
        <Heading.SubTitle className="text-font/80">Fill in the form below to create a new course</Heading.SubTitle>
      </Heading>
      <Form {...forms}>
        <form onSubmit={forms.handleSubmit(onSubmit)} className="mt-16 flex w-6/12 flex-col gap-5">
          <FormField
            name="title"
            control={forms.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="thumbnail"
            control={forms.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Thumbnail</FormLabel>
                <FormControl>
                  <Dropzone
                    id="thumbnail"
                    closedModal={() => setIsOpen(false)}
                    setValue={field.onChange}
                    fileValue={field.value as unknown as FileWithPreview[]}
                    accept={{ 'image/jpeg': ['.jpg', '.jpeg'], 'image/png': ['.png'] }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="description"
            control={forms.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Description</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Write something here..." className="h-[160px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="ml-auto mt-3 w-fit text-[13px]">Create Course</Button>
        </form>
      </Form>
    </React.Fragment>
  )
}
