//Crear funciones dentro un objeto
//Tiene que definir bien las propidades
/*
Cuando consulte hello retorne un Hello World with GraphQL
*/
/*En mutation a travez de una entrada se toman los datos y luego
especificamos que datos necesitamos recibir en la respuesta */
import { tasks } from "./sample";
import User from "./models/User";
/*Creamos un nuevo usuario con los datos que le estoy pasando con el input 
User.findByIdAndUpdate(_id, input) = me devuelve el dato no modificado
*/
export const resolvers = {
    Query: {
        hello: () => {
            return "Hello World with GraphQL"
        },
        // greet: (root, args) => {
        greet: (root, { name }, ctx) => {
            // console.log(args);
            // return "Hello "+args.name;
            console.log(ctx);
            return ` Hello ${name}! `;
        },
        tasks() {
            return tasks;
        },
        async Users() {
            return await User.find();
        }
    },
    Mutation: {
        createTask(_, { input }) {

            input._id = tasks.length;
            tasks.push(input);
            console.log(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input);
            // console.log(newUser);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }
    }
};