import * as React from 'react'
import { HiPlus } from 'react-icons/hi2'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Heading } from '@/components/organisms'
import { AdminAction, BackButton, Loading, TableSearch } from '@/components/atoms'

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem } from '@/components/ui/form'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { formatDate } from '@/lib/utils'
import { useDisableBodyScroll, useQueryParams, useTitle } from '@/hooks'
import { useGetCourse, useGetVideos } from '@/store/server/useCourse'

interface FormFields {
  search: string
}

export default function VideoCourse() {
  useTitle('Admin ~ Video Course')
  const navigate = useNavigate()
  const { courseId } = useParams<{ courseId: string }>()
  const forms = useForm<FormFields>()

  const { params, createParam, deleteParam } = useQueryParams(['search'])
  const { data: course, isLoading } = useGetCourse(courseId as string)
  const { data: videos, isFetching, refetch } = useGetVideos(courseId as string, params.search || '')

  useDisableBodyScroll(isFetching || isLoading)

  const onSubmit = (data: FormFields) => {
    if (data.search === '') {
      deleteParam('search')
    } else {
      createParam({ key: 'search', value: data.search })
    }

    refetch()
  }

  return (
    <React.Fragment>
      {(isFetching || isLoading) && <Loading />}
      <BackButton className="lg:static lg:mb-5" />
      <Heading className="flex items-center gap-5 text-font">
        <div className="flex flex-col gap-1">
          <Heading.Title>{course?.title} Videos</Heading.Title>
          <Heading.SubTitle className="text-font/80">
            Manage all videos in the course <span className="font-semibold">{course?.title}</span>
          </Heading.SubTitle>
        </div>
      </Heading>
      <div className="mt-16 flex items-center justify-between">
        <Button className="gap-3" onClick={() => navigate(`/admin/course/${courseId}/video/create`)}>
          <HiPlus className="text-xl" />
          <span className="text-[13px]">Add new video</span>
        </Button>
        <Form {...forms}>
          <form onSubmit={forms.handleSubmit(onSubmit)} className="w-4/12">
            <FormField
              name="search"
              control={forms.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <TableSearch {...field} value={field.value ?? ''} placeholder="Search..." />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <Table className="mt-6 overflow-hidden rounded-md text-font">
        <TableHeader className="bg-primary/80">
          <TableRow className="border-zinc-300">
            <TableHead className="text-white">Thumbnail</TableHead>
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="text-white">Channel</TableHead>
            <TableHead className="text-white">Youtube Link</TableHead>
            <TableHead className="text-white">Created At</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {videos?.data?.map((video) => (
            <TableRow key={video.id} className="text-[13px]">
              <TableCell>
                <img
                  src={video.youtube_info.thumbnails.default.url}
                  alt={video.youtube_info.title}
                  className="w-36 rounded-md object-cover md:h-20"
                />
              </TableCell>
              <TableCell className="font-semibold">{video.title}</TableCell>
              <TableCell position="center">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={video.youtube_info.channel.thumbnails.default.url}
                    alt={video.youtube_info.channel.title}
                    className="rounded-full object-cover md:h-10 md:w-10"
                  />
                  <p className="truncate-1 text-xs font-medium">{video.youtube_info.channel.title}</p>
                </div>
              </TableCell>
              <TableCell className="truncate-1 w-fit">
                <Link to={video.video_url} target="_blank" className="font-medium text-primary underline">
                  {video.video_url}
                </Link>
              </TableCell>
              <TableCell>{formatDate(video.created_at)}</TableCell>
              <TableCell position="center">
                <AdminAction>
                  <AdminAction.Item
                    type="edit"
                    onClick={() => navigate(`/admin/course/${courseId}/video/${video.id}`)}
                  />
                  <AdminAction.Item type="delete" />
                </AdminAction>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
