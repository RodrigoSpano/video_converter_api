import fs from 'fs'
import path from 'path'

export const deleteAllFiles = async (directory: 'audio' | 'video') => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;
  
    for (const file of files) {
      fs.unlink(path.join(__dirname, `../convert/${directory}`, file), (err) => {
        if (err) throw err;
      });
    }
  });
}