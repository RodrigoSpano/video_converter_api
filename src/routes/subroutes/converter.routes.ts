import { Router } from "express";
import { converterToMp4 } from "../../controllers/converter/convertermp4";
import { converterToAudio } from "../../controllers/convertermp3";

const router = Router()

router.post('/mp4' , converterToMp4)
router.post('/mp3' , converterToAudio)

export default router