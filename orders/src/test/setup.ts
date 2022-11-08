import {MongoMemoryServer} from 'mongodb-memory-server'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

declare global{
    var signin: () => string[]
}

let mongo:any;

jest.mock('../nats-wrapper')

beforeAll(async() => {
    jest.clearAllMocks()
    process.env.JWT_KEY = 'asdf'
    mongo = await MongoMemoryServer.create()
    const mongoUri = mongo.getUri()
    await mongoose.connect(mongoUri,{})
})

beforeEach(async()=>{
    const conllections = await mongoose.connection.db.collections()
    for(let collection of conllections){
        await collection.deleteMany({})
    }
})

afterAll(async() =>{
    if(mongo){
        await mongo.stop()
    }
    await mongoose.connection.close()
})

global.signin = () => {
    // Build a JWT payload. { id, email}
    const payload = {id:new mongoose.Types.ObjectId().toHexString(), email:'test@test.com'}
    const token = jwt.sign(payload, process.env.JWT_KEY!)
    const session = {jwt:token}
    const sessionJSON = JSON.stringify(session)
    const base64 = Buffer.from(sessionJSON).toString('base64')
    // {"jwt":"MY_JWT"}
    // Build session object, turn that to json and then encode it to base64


    return [`session=${base64}`];
}