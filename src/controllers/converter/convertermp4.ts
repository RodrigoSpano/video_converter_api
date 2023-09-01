import { Request, Response } from "express";
import ytdl from "ytdl-core";
import fs from 'fs'
import path from 'path'

export const converterToMp4 = async (req: Request,res: Response) => {
  const {videoUrl}: {videoUrl:string} = req.body
  try {

    res.header("Content-Disposition", 'attachment; filename="audio.mp3');
    const info = await ytdl.getInfo(videoUrl)
    const videoPath: string = path.join(__dirname, '../../utils/convert/video' , `${info.videoDetails.title.split('-')[0].trim()}.mp4`)
    const video = ytdl(videoUrl, {quality: 'highest' }).pipe(fs.createWriteStream(videoPath))  
    video.on('close', () => {
      console.log('downloading...')
      return res.download(videoPath)
    })
  } catch (error: unknown) {
    return res.status(500).json(error)
  }
}
