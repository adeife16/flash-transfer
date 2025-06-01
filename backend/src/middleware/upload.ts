import aws from 'aws-sdk'; 
import multer from 'multer';
import multerS3 from 'multer-s3';
import { v4 } from 'uuid';
import { Request, Response, NextFunction } from 'express';
import config from "../../enviorments/default";

const spacesEndpoint = new aws.Endpoint('sgp1.digitaloceanspaces.com');
const spaces = new aws.S3({
endpoint: spacesEndpoint,
accessKeyId: config.SPACE_ACCESS_KEY,
// secretAccessKey: config.SPACE_SECRET_KEY
 });

 export const uploadFiles = async (req: Request, res: Response, next: NextFunction) => {
  const imageUpload = multer({
      storage: multerS3({
          s3: spaces,
          bucket: 'postad-images',
          acl: "public-read",
          key: (req, file, cb) => {
              cb(null, v4() + '.' + file.mimetype.split('/')[1]);
          }
      })
  });

  const fileUpload = imageUpload.array('files', 12);

  fileUpload(req, res, (err) => {
      /* Validate FormData */
      if (!err) {
          next();
      }
      else {
          console.log(err);
          res.status(500).send({ error: 'Error in uploading files' });
      }
  });
};