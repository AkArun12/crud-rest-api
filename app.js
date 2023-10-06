import express from "express";
import connectDB from "./db /connectdb.js";
import web from './routes/web.js'

const app = express();

const port = process.env.PORT || "3000";
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"

// Database connection 
connectDB(DATABASE_URL)

// API JSON
// if we want to provide data through json format in postman
// we have to use this middleware
app.use(express.json())



// Load routes
app.use('/student',web)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
