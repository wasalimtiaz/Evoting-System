const graphql = require('graphql');
const _ = require('lodash');
const Name = require('../models/name');
const User = require('../models/user')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull} = graphql;

const NameType = new GraphQLObjectType({
    name:'Name',
    fields: ()=> ({
        id: {type:GraphQLID},
        name: {type:GraphQLString},
        location: {type:GraphQLString},
        user:{
            type:UserType,
            resolve(parent,args){
//                console.log(parent);
                return User.findById(parent.userId)
              //  return _.find(authors, {id:parent.authorId})
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name:'User',
    fields: ()=> ({
        id: {type:GraphQLID},
        name: {type:GraphQLString},
        cnic: {type:GraphQLID}, 
        names:{
            type:new GraphQLList(NameType),
            resolve(parent,args){
                return Name.find({userId:parent.id})
           //   return _.filter(books,{authorId:parent.id})
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        name:{
            type:NameType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
               // console.log(typeof(args.id))
                return Name.findById(args.id)
               // return _.find(books,{id:args.id})
            }
        },
        user:{
            type:UserType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
               // console.log(typeof(args.id))
                return User.findById(args.id)
              //  return _.find(authors,{id:args.id})
            }
        },
        names:{
            type: new GraphQLList(NameType),
            resolve(parent, args){
                return Name.find({})
                //return books
            }
        },
        users:{
            type: new GraphQLList(UserType),
            resolve(parent,args){
            return User.find({})
              //  return authors
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addUser:{
            type:UserType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                cnic:{type:new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                let user= new User({
                    name:args.name, 
                    cnic:args.cnic
                });
                return user.save()
            }
        },

        addName:{
            type:NameType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                location:{type:new GraphQLNonNull(GraphQLString)},
                userId:{type:new GraphQLNonNull(GraphQLID)}
            },
            resolve(parents,args){
                let name= new Name({
                    name:args.name,
                    location:args.location,
                    userId:args.userId
                });
                return name.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation: Mutation
})
