import { GraphQLID, GraphQLList } from "graphql";

import { UserType } from "../typesDefs/User";
import { Users } from "../../entities/users";

export const getAllUsers = {
    type: new GraphQLList(UserType),
    async resolve () {
        const users = await Users.find()
        return users
    }
}

export const getUserById = {
    type : UserType,
    args:{
        id:{type:GraphQLID}
    },
    async resolve (_:any,{id}:any) {
        const result = await Users.findOneBy({ id });

    return result
    }
}