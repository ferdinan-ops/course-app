import { TextEditor } from '@/components/atoms'
import { Heading } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import * as React from 'react'
import { useForm } from 'react-hook-form'

export default function CreateVideo() {
  const forms = useForm()
  const onSubmit = () => {}

  return (
    <React.Fragment>
      <Heading className="flex flex-col gap-1 text-font">
        <Heading.Title>Add New Video</Heading.Title>
        <Heading.SubTitle className="text-font/80">
          Fill in the form below to create a new video to course
        </Heading.SubTitle>
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
            name="title"
            control={forms.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Youtube Link</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="https://youtu.be/random" />
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
                  <TextEditor
                    id="description"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Write something here..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="ml-auto mt-3 w-fit text-[13px]">Add Video</Button>
        </form>
      </Form>
    </React.Fragment>
  )
}
