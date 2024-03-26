import { type Request, type Response } from 'express'
import { validVideo } from '../validations/video.validation'
import { type IVideo } from '../types/video.type'
import { logError, logInfo } from '../utils/logger'
import * as VideoService from '../services/video.service'

export const createVideo = async (req: Request, res: Response) => {
  const { value, error } = validVideo(req.body as IVideo)
  if (error) {
    logError(req, error)
    return res.status(400).json({ error: error.details[0].message })
  }

  try {
    const data = await VideoService.addNewVideo(value, req.userId as string)

    logInfo(req, 'Creating new video')
    res.status(200).json({ message: 'Berhasil membuat video baru', data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const updateVideo = async (req: Request, res: Response) => {
  const { value, error } = validVideo(req.body as IVideo)
  if (error) {
    logError(req, error)
    return res.status(400).json({ error: error.details[0].message })
  }

  try {
    const data = await VideoService.updateVideoById(req.params.videoId, value)

    logInfo(req, 'Updating video data')
    res.status(200).json({ message: 'Berhasil mengubah data video', data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const deleteVideo = async (req: Request, res: Response) => {
  try {
    await VideoService.deleteVideoById(req.params.videoId)

    logInfo(req, 'Deleting video')
    res.status(200).json({ message: 'Berhasil menghapus video' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const getVideo = async (req: Request, res: Response) => {
  try {
    const data = await VideoService.getVideoById(req.params.videoId)

    logInfo(req, 'Fetching video')
    res.status(200).json({ message: 'Berhasil mendapatkan video', data })
  } catch (error) {
    res.status(500).json({ error })
  }
}
