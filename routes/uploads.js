import express from "express";
import multer from 'multer';
const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
  });
  
  const upload = multer({storage}).single('file');
  
  uploadRouter.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
  
        return res.status(200).send(req.files)
    })
  });

  export default uploadRouter;