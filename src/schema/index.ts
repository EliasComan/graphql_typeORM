import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import { createUser, deleteUser, updateUser } from './mutations/users';
import { getAllUsers, getUserById } from './queries/user';

import  {greeting}  from './queries/greetin'

const rootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
       greeting,
       getAllUsers,
       getUserById
    }
})
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        createUser,
        deleteUser,
        updateUser
    }
})
export const schema = new GraphQLSchema({
    query:rootQuery,
    mutation:mutation
})
