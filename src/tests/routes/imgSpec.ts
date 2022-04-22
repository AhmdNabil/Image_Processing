//import the modulles
import supertest from "supertest";
// import the app 
import app from "../../index";
const request = supertest(app);
// Testing the API - url information
describe('Test API',()=>{
    // test if there is a name for the image or not
    it('image should match filename',async () => {
        const res =await request.get('/images?&height=50&width=50')
        expect(res.status).toBe(404) 
    })
    // test is there a hieght or not
    it('image should have height',async () => {
        const res =await request.get('/img?name=palmtunnel.jpg&width=50') 
        expect(res.status).toBe(404) 
    })
    // test is there a width or not
    it('image should have width',async () => {
        const res =await request.get('/img?name=palmtunnel.jpg&height=50')
        expect(res.status).toBe(404) 
    })
    // Test is the value correct or not
    it('width and height should have positive value',async () => {
        const res =await request.get('/img?name=palmtunnel.jpg&height=-50&width=-50')
        expect(res.status).toBe(404) 
    })

})