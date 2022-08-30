import  express  from "express";
import {graphqlHTTP} from 'express-graphql'
import { schema } from "./schema";

const APP = express()
APP.use('/graphql', graphqlHTTP({
graphiql:true,
schema
}))
APP.get('/', (req, res, next) => {
    res.json('Go to localhost:3000/graphql')
})
 export default APP

