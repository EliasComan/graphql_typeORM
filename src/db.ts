import { Users } from "./entities/users";
import { createConnection } from "typeorm";

export const createConnect = async  () => {
await createConnection({
    type:'mysql',
    username:'root',
    port:3306,
    host:'localhost',
    database:'usersdb',
    entities:[Users],
    synchronize:true,
    ssl:false
    
})
}