import { AdminAction, Image, Pagination } from '@/components/atoms'
import { Heading } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useQueryParams, useTitle } from '@/hooks'
import { cn, formatDate } from '@/lib/utils'
import { useGetCourses, usePublishCourse } from '@/store/server/useCourse'
import * as React from 'react'
import { HiOutlineBookOpen, HiOutlineEye, HiOutlineEyeSlash, HiOutlineVideoCamera, HiPlus } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

export default function AdminCourse() {
  useTitle('Admin ~ Course')
  const navigate = useNavigate()

  const { params, createParam } = useQueryParams(['page', 'search'])
  const { data: courses, isSuccess } = useGetCourses(params.search || '', Number(params.page) || 1)

  const { mutate: publishCourse } = usePublishCourse()

  if (!isSuccess) {
    return <div>Loading...</div>
  }

  return (
    <React.Fragment>
      <Heading className="flex items-center gap-5 text-font">
        <Heading.Icon icon={HiOutlineBookOpen} />
        <div className="flex flex-col">
          <Heading.Title>All Courses</Heading.Title>
          <Heading.SubTitle className="text-font/80">Manage all courses in the platform</Heading.SubTitle>
        </div>
      </Heading>
      <div className="mt-16 flex items-center justify-between">
        <Button className="gap-3" onClick={() => navigate('/admin/course/create')}>
          <HiPlus className="text-xl" />
          <span className="text-[13px]">Add new course</span>
        </Button>
      </div>

      <Table className="mt-6 overflow-hidden rounded-md text-font">
        <TableHeader className="bg-primary/80">
          <TableRow className="border-zinc-300">
            <TableHead className="text-white">Thumbnail</TableHead>
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="text-white">Description</TableHead>
            <TableHead className="text-white">Created At</TableHead>
            <TableHead className="text-white">Visibility</TableHead>
            <TableHead className="text-white">Total User</TableHead>
            <TableHead className="text-white">Total Videos</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.data?.map((course) => (
            <TableRow key={course.id} className="text-[13px]">
              <TableCell>
                <Image src={course.thumbnail} alt={course.title} className="w-36 rounded-md object-cover md:h-20" />
              </TableCell>
              <TableCell className="font-semibold">{course.title}</TableCell>
              <TableCell className="truncate-3 w-fit">{course.description}</TableCell>
              <TableCell position="center">{formatDate(course.created_at)}</TableCell>
              <TableCell position="center">
                <div
                  className={cn(
                    course.is_published
                      ? 'border-green-500 bg-green-200 text-green-700'
                      : 'border-red-500 bg-red-200 text-red-700',
                    'rounded-full border px-2 py-1 font-medium'
                  )}
                >
                  <p className="text-xs">{course.is_published ? 'Published' : 'Unpublished'}</p>
                </div>
              </TableCell>
              <TableCell position="center">{course._count.members}</TableCell>
              <TableCell position="center">{course._count.videos}</TableCell>
              <TableCell position="center">
                <AdminAction>
                  <AdminAction.Item type="edit" onClick={() => navigate(`/admin/course/${course.id}`)} />
                  <AdminAction.Item type="delete" />
                  <AdminAction.Item
                    label={course.is_published ? 'Unpublish' : 'Publish'}
                    icon={course.is_published ? HiOutlineEyeSlash : HiOutlineEye}
                    onClick={() => publishCourse({ id: course.id, published: !course.is_published })}
                  />
                  <AdminAction.Item
                    label="See videos"
                    icon={HiOutlineVideoCamera}
                    onClick={() => navigate(`/admin/course/${course.id}/video`)}
                  />
                </AdminAction>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {courses.meta.total >= 10 ? (
        <Pagination
          pageSize={courses.meta.limit as number}
          totalCount={courses.meta.total as number}
          currentPage={params.page !== '' ? parseInt(params.page) : 1}
          onPageChange={(page) => createParam({ key: 'page', value: page.toString() })}
        />
      ) : null}
    </React.Fragment>
  )
}
