/*Herramienta de graphql para unir el typeDefs y resolvers 
makeExecutableSchema = nos permite crear un schema nuevo que une los resolvers y typeDefs */
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

/*Se puede consultar hello pero no devuelve nada , si quiero que devuelva algo , se tendria que
definir en los resolvers */
/*Tipos de datos graphql se le conoce a los type Query */
/*Comparando con Rest api el type Query seria como la ruta del servidor y los query del resolvers seria el controlador */
/*Definiendo el tipo de dato Tareas - type Task */
/*
No solo nos permite consultar datos , tambien se puede
enviar datos y cambiar datos dentro del servidor se utiliza 
mutation ,type Mutation seria el inverso del type Query
*/
const typeDefs = `

type Query {
    hello: String 
    greet(name: String!): String
    tasks:[Task]
    Users:[User]
}

type Task{
    _id:ID
    name:String!
    title:String!
    country:String!
    number:Int
}
type User{
    _id:ID
    firstname:String!
    lastname:String!
    age:Int
}

type Mutation{
    createTask(input: TaskInput):Task
    createUser(input: UserInput):User
    deleteUser(_id:ID):User
    updateUser(_id:ID, input:UserInput):User
}

input TaskInput{
    name:String!
    title:String!
    country:String!
    number:Int
}
input UserInput{
    firstname:String!
    lastname:String!
    age:Int
}


`;

/*
Es una abreviacion de type definitions ,
esto nos permite definir que es lo que podemos consultar desde
un api de graphql
*/

/*
Resolvers = que es lo que vamos hacer cuando llegue la consulta ,
cuando se consulta algo (typeDefs)
*/
//Tengo una schema creado , makeExecutableSchema ->esto devuelve un objeto
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})