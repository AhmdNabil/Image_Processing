// import modules
import path from 'path';
// Define the functions in the utilises file
import {resize} from '../../utilities/imgUtils'
import {file} from '../../utilities/imgUtils'
// testing starts here
describe(' Utility testing',()=> {
    // Test if there is an image or not
    it('should find image', async()=> {
        const filePath = path.join(__dirname, '../../images/full/cantfind.jpg')
        await expectAsync(file(filePath)).toBeRejected()
    })
    // test the extention of the tmage
    it('file extention must be jpg',async () => {
        const paramas ={
            name: 'palmtunnel.abc',
            width: '200',
            height: '200'
        }
        await expectAsync(resize(paramas)).toBeRejected()
    })
})