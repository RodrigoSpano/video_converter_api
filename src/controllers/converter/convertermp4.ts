import { Request, Response } from "express";
import ytdl from "ytdl-core";
import fs from 'fs'
import path from 'path'

export const converterToMp4 = async (req: Request,res: Response) => {
  const {videoUrl}: {videoUrl:string} = req.body
  try {

    res.header("Content-Disposition", 'attachment; filename="audio.mp3');
    const info = await ytdl.getInfo(videoUrl)
    // const videosPath = path.join(__dirname, '../utils/convert/video' , `${info.videoDetails.title.split('-')[0].trim()}.mp4`)
    ytdl(videoUrl, {quality: 'highest' }).pipe(res)  
    // ytdl(videoUrl, {quality: 'highest' }).pipe(fs.createWriteStream(videosPath))  
    
    // const video = ytdl.chooseFormat({})
    // if(video){
    //   return res.status(201).json({success: true})
    // }
  } catch (error: unknown) {
    return res.status(500).json(error)
  }
}
