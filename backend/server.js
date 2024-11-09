const app = require("./app");
const path = require("path");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const configPath = path.resolve(__dirname,"../backend/Config/config.env");


const connectMongoDB = require("./db/connectMongoDB.js");


dotenv.config({ path: configPath });
connectMongoDB();
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});


const sever=app.listen(process.env.PORT, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT}`);
  
  });

  process.on("unhandleError",(err)=>{
	console.log(`Error :${err.message}`);
	console.log("shuting down the server becouse unhandle Error");
	sever.close(()=>{
	  process.exit(1)
	})
  })