import multer from "multer";
import { TEMPLATE_UPLOAD_DIR } from "../constants/index.js";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, TEMPLATE_UPLOAD_DIR);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + '-' + file.originalname);
    }
  });

  export const upload = multer({storage});
