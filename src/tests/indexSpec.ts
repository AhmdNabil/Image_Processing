// Import the module supertest
import supertest from 'supertest'
// Link the app to be testing
import app from '../index'
const request = supertest(app)
// testing the url
describe('test API', ()=> {
    it('root"/"returns(200)', async ()=>{
        const res = await request.get('/')
        expect(res.status).toBe(200)
    })
})