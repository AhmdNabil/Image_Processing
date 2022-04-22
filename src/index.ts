// Import express 
import express, {Request,Response} from "express";
// Import the route file
import imgroutes from './routes/img' ;
// Build server
const app = express();
// Define the port
const port = 3000;
// Operating the server
app.get('/', (req: Request, res: Response)=> {
res.send("Done!!!")
});
// Making app url 
app.use('/img', imgroutes );
app.listen(port, ()=> {
    // show port in termenal 
    console.log("server on:", {port});
});
export default app;