import { Loading, Markdown, NoData } from '@/components/atoms'
import { CommentCard, CommentForm, Container, Heading } from '@/components/organisms'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useDisableBodyScroll, useTitle } from '@/hooks'
import { cn } from '@/lib/utils'
import { useToken } from '@/store/client'
import { useGetComments } from '@/store/server/useComment'
import { useGetCourse, useGetVideos, useJoinCourse } from '@/store/server/useCourse'
import { useGetMemberLogin } from '@/store/server/useMember'
import { useGetVideo } from '@/store/server/useVideo'
import { HiArrowLeft, HiArrowRight, HiLockClosed, HiOutlineChatBubbleLeftRight, HiPlayCircle } from 'react-icons/hi2'
import { useNavigate, useParams } from 'react-router-dom'

export default function DetailCourse() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const { courseId, videoId } = useParams<{ courseId: string; videoId: string }>()

  const token = useToken((state) => state.accessToken)
  const { data: course, isSuccess: successCourse } = useGetCourse(courseId as string)
  const { data: videos, isSuccess: successVideos } = useGetVideos(courseId as string)
  const { data: comments, isSuccess: successComments } = useGetComments(
    (videoId as string) || (course?.videos[0].id as string)
  )

  const { data: video } = useGetVideo(videoId as string)
  const { data: member } = useGetMemberLogin(courseId as string, token as string)

  const { mutate: joinCourse, isLoading } = useJoinCourse()

  useTitle(`${course?.title} ~ ${!videoId ? course?.videos[0].title : video?.title}` || 'Course')
  useDisableBodyScroll(!successCourse || !successVideos || !successComments)

  const handleJoin = () => {
    if (!token) {
      return toast({
        title: 'You need to sign in first',
        description: 'Please sign in to join this course',
        variant: 'destructive'
      })
    }

    joinCourse(courseId as string)
  }

  const handleNavigateVideo = (videoId: string) => {
    if (!token) {
      return toast({
        title: 'You need to sign in first',
        description: 'Please sign in to see this video',
        variant: 'destructive'
      })
    }

    if (!member) {
      return toast({
        title: 'You need to join this course first',
        description: 'Please join this course to see this video',
        variant: 'destructive'
      })
    }

    navigate(`/course/${courseId}/video/${videoId}`)
  }

  const currentVideoIndex = videos?.data.findIndex((video) => video.id === videoId) as number

  return (
    <Container className="xl:pb-56">
      {(!successCourse || !successVideos || !successComments) && <Loading />}
      <section className="flex items-center justify-between">
        <Heading>
          <Heading.SubTitle className="mb-2">{course?.title}</Heading.SubTitle>
          <Heading.Title>{course?.videos[0].title}</Heading.Title>
        </Heading>
        {member ? (
          <div className="flex items-center gap-4">
            <Button
              className="gap-3"
              variant="outline"
              disabled={!videoId || videoId === course?.videos[0].id}
              onClick={() => handleNavigateVideo(videos?.data[currentVideoIndex - 1].id as string)}
            >
              <HiArrowLeft />
              <p>Prev</p>
            </Button>
            <Button
              className="gap-3"
              variant="outline"
              disabled={videoId === videos?.data[videos?.data.length - 1].id}
              onClick={() =>
                handleNavigateVideo((!videoId ? videos?.data[1].id : videos?.data[currentVideoIndex + 1].id) as string)
              }
            >
              <p>Next</p>
              <HiArrowRight />
            </Button>
          </div>
        ) : (
          <Button className="gap-3" onClick={handleJoin} loading={isLoading}>
            <p>Join Now</p>
            <HiArrowRight />
          </Button>
        )}
      </section>
      <section className="mt-6 grid grid-cols-6 gap-8">
        <div className="col-span-4">
          <div className="flex h-[400px] w-full rounded-md bg-black">
            <HiPlayCircle className="m-auto cursor-pointer text-6xl text-white" />
          </div>
          <div className="mt-8">
            <h1 className="mb-2.5 text-2xl font-semibold text-font">About Video</h1>
            <Markdown values={(videoId ? (video?.description as string) : course?.videos[0].description) as string} />
          </div>
          <div className="mt-8 border-t-2 border-slate-200 py-5 xl:py-4">
            <div className="flex w-full flex-col gap-5">
              {token && member && <CommentForm videoId={((videoId as string) || course?.videos[0].id) as string} />}
              <h3 className="px-4 text-sm font-semibold">{comments?.length} comments</h3>

              {comments?.length === 0 ? (
                <NoData
                  icon={HiOutlineChatBubbleLeftRight}
                  title="Your compliments and feedback are welcome!"
                  text="Share your thoughts using the comment box below."
                />
              ) : (
                <div className="flex flex-col gap-4 px-4">
                  {comments?.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="col-span-2 max-h-[400px] rounded-lg border">
            <div className="border-b p-4">
              <h3 className="text-[15px] font-semibold text-font">{course?._count.videos} Lessons [1.5 Hours]</h3>
            </div>
            <div className="scroll-custom flex max-h-[calc(400px-56px)] flex-col gap-2.5 overflow-y-auto p-4">
              {videos?.data.map((video, index) => (
                <div
                  key={video.id}
                  onClick={() => handleNavigateVideo(video.id)}
                  className={cn(
                    'flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-font/60',
                    !videoId && index === 0 && 'bg-primary text-white/80',
                    videoId === video.id && 'bg-primary text-white/80'
                  )}
                >
                  <div className="text-xl">
                    {(!videoId && index === 0) || member ? <HiPlayCircle /> : <HiLockClosed />}
                  </div>
                  <span
                    className={cn(
                      'truncate-1 text-sm text-font',
                      !videoId && index === 0 && 'text-white',
                      videoId === video.id && 'text-white'
                    )}
                  >
                    {video.title}
                  </span>
                  <p className="ml-auto text-sm">11:25</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
