import { Image } from '@/components/atoms'
import { Heading } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useUserInfo } from '@/store/client'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import {
  HiCamera,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineCog6Tooth,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineUser
} from 'react-icons/hi2'

export default function AdminProfile() {
  const user = useUserInfo((state) => state.user)

  const forms = useForm()
  const onSubmit = () => {}

  return (
    <React.Fragment>
      <Heading className="flex items-center gap-5 text-font">
        <Heading.Icon icon={HiOutlineUser} />
        <div className="flex flex-col">
          <Heading.Title>Edit Profile</Heading.Title>
          <Heading.SubTitle className="text-font/80">Manage your profile information</Heading.SubTitle>
        </div>
      </Heading>
      <section className="mx-auto mt-16 w-6/12">
        <div className="group relative mx-auto mb-8 h-[200px] w-[200px] cursor-pointer overflow-hidden rounded-full">
          <div className="absolute inset-0 z-[2] flex bg-font/60 opacity-0 transition-opacity group-hover:opacity-100">
            <HiCamera className="m-auto text-4xl text-white md:text-6xl" />
          </div>
          <Image
            src={user?.photo}
            alt={user?.fullname as string}
            className="relative z-[1] h-full w-full object-cover"
          />
        </div>
        <Form {...forms}>
          <form onSubmit={forms.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              name="fullname"
              control={forms.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="font-semibold dark:text-white">Fullname</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="username"
              control={forms.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="font-semibold dark:text-white">Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="john.doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="ml-auto mt-2 w-fit">Save Changes</Button>
          </form>
        </Form>
        <div className="mt-8 border-t pt-5 text-font">
          <p className="mb-5 flex items-center gap-2 text-lg font-semibold">
            <HiOutlineCog6Tooth className="text-xl" />
            User Settings
          </p>
          <div className="flex items-center gap-4">
            <Button className="w-fit gap-2.5 text-xs" variant="outline">
              <HiOutlineLockClosed className="text-lg" />
              Reset Password
            </Button>
            <Button className="w-fit gap-2.5 bg-zinc-200 text-xs hover:bg-zinc-300" variant="ghost">
              <HiOutlineEnvelope className="text-lg" />
              Change Email
            </Button>
            <Button className="w-fit gap-2.5 text-xs" variant="destructive">
              <HiOutlineArrowLeftOnRectangle className="text-lg" />
              Sign Out from App
            </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
