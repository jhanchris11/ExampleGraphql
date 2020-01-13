
//const express = require('express');
//Importacion de EC 6
import express from "express";

import graphqlHTTP from "express-graphql";
//Importar todo el modulo de schema ya que es un objeto
import schema from './schema';
import { connect } from './database';
/*
graphqlHTTP = Es un middelware de express , 
es una funcion que me va a poder ayudar que cuando entre a una ruta va
ser procesada utilizando una heramienta de graphql
*/
connect();
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hola mundo'
    })
})

/*
schema es un objeto que puede consultar desde mi aplicacion cliente , para tester el api ; me define que voy a consultar
*/

//Utiliza graphqlHTTP para procesar esta ruta del servidor
/*El context sirve para pasar datos a los resolvers,
 nos puede servir en el caso que estamos autenticando un usuario ,
 o tambien en una cadena de conexion */

app.use('/graphql', graphqlHTTP({
    graphiql: true, //Nos muestre una herramienta para hacer consultas - show us the tool to make inquiries
    /*Esta herramienta es como un cliente que me permite consultar api de graphql , me permite pedir rutas
    y recibir respuestas */
    schema: schema,
    context: {
        messageId: 'test'
    }

}));

// app.use('/',)



app.listen(5000, () => {
    console.log('Server is running')
});


