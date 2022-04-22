// Import server API
import express, {Request,Response}  from "express";
// Import module path
import path from "path";
// Import function and variables that will be used
import {resize, file, createDir} from '../utilities/imgUtils';
// use routes and middlewares
const imgroutes= express.Router()
imgroutes.get('/',async (req:Request,res:Response) => {
const name=req.query.name as string
const width=req.query.width as string
const height=req.query.height as string
// if there is a value to width and height 
// resize the image
// then save it in thumbs file with its new size
if (parseInt(width)>0 &&parseInt(height)>0 ){
    const mainPath =path.join(__dirname, '../../images/')
    const thumbs =path.join(
        __dirname, '../../images/thumbs/thumb_' + parseInt(width) + 'x' + parseInt(height) + '-' +name
    )
    // making thumbs directory if it is not found
    await createDir(mainPath, 'thumbs/')
    .catch((err)=> {
        console.log('Error:',err)
    })
    .then((data)=> {
        console.log('Found',data)
    })
    await file (thumbs)
    .catch(async (err)=> {
        console.log('Look at:',(thumbs),err )
        console.log('Resize')
        await resize(req.query)
        .then((filePath)=> {
            res.sendFile(filePath)
        })
        .catch((err) => {
            console.log('Error in process',err)
            res.status(404).send('Error in process')
        })
    })
    .then(()=>{
        res.sendFile(thumbs)
    })
}else{
    res.status(404).send('wrong dimensions')
}
// if the file isnt exist send error message
if (!name) {
    res.status(404).send('no file')
    return
}
// if the user didnt add dimensions 
// send a message it is found before 
// we can add the image bath also 
if (!width && !height) {
    const place = path.join(__dirname, '../../images/full/'+ name)
    await file(place)
    .catch((err)=> {
        res.status(404).send(err)
    })
    .then(()=>{
        console.log('Found before')
        res.sendFile(place)
    })
}
})
export default imgroutes