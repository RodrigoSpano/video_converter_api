import { Request, Response } from "express";
import ytdl from "ytdl-core";
import fs from 'fs'
import path from 'path'

export const converterToAudio = async (req: Request,res: Response) => {
  try {
    const {videoUrl}: {videoUrl:string} = req.body
    res.header("Content-Disposition", 'attachment; filename="audio.mp3');
    const info = await ytdl.getInfo(videoUrl)
    const filePath: string = path.join(__dirname, '../utils/convert/audio', `${info.videoDetails.title.split('-')[0].trim()}.mp3`)
    //  ytdl(videoUrl, {quality: 'highest', filter: 'audioonly' }).pipe(fs.createWriteStream(filePath))  
    ytdl(videoUrl, {quality: 'highest', filter: 'audioonly' }).pipe(res)  
      // return res.status(201)
      // return res.status(201).download(filePath)
  } catch (error: unknown) {
    return res.status(500).json(error)
  }
}
