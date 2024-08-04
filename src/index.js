import { TEMPLATE_UPLOAD_DIR, UPLOAD_DIR } from "./constants/index.js";
import { initMongoConection } from "./db/initMongoConection.js";
// import { Student } from "./db/models/student.js";
import { startServer } from "./server.js";
import { createFolder } from "./utils/createFolder.js";

( async() => {
    await initMongoConection();
    await createFolder(TEMPLATE_UPLOAD_DIR);
    await createFolder(UPLOAD_DIR);
    // const students = await Student.find({});
    // console.log(students);
    startServer();
}) ();


