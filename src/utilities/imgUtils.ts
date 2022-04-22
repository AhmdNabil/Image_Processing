// import modules that will be used  
import sharp from 'sharp';
import fs from 'fs';
import QueryString from 'qs';
import path from 'path';
import ErrnoException=NodeJS.ErrnoException
export function resize(query: QueryString.ParsedQs){
    return new Promise<string>(function (resolve,reject){
        // define some variables 
        const width: string = query['width'] as string
        const height: string = query['height'] as string
        const name: string = query['name'] as string
        // Define the files pathes
        const thumbs: string = path.join(__dirname, '../../images/thumbs/','thumb_' + width + 'x' + height + '-' + name)
        const place: string = path.join(__dirname,'../../images/full/' + name)
        // Using sharp to take width and height 
        sharp(place)
        .resize(parseInt(query['width'] as string),
        parseInt(query['height'] as string)
        )
        .toFile(thumbs)
        .catch((err)=>{
            reject(err.message)
        })
        .then(()=> resolve(thumbs))
    })
}

export function file(filePath: string){
    return new Promise<string>(function(resolve, reject){
        fs.stat(filePath, function (err: ErrnoException | null){
            if(err){
                reject('NO file')
            } else {
                resolve(filePath)
            }
        })
    })
}

export function createDir(dirPath: string, folder: string){
    return new Promise<string>(function(resolve, reject){
        const exist = fs.existsSync(dirPath + folder)
        if(exist){
            resolve('FOUND!!!')
        } else{
            console.log('Make one!!!')
            fs.promises
            .mkdir(dirPath + folder)
            .catch((err)=>{
                reject(err)
            })
            .then(()=>{
                resolve("Generated!!")
            })
        }
    })
}