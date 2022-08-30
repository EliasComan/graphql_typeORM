import { GraphQLID, GraphQLObjectType } from "graphql";

import { GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "Usertype",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});
