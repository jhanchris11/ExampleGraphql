
import mongoose from "mongoose";
/*Es un evento asincrono */
export async function connect() {
    try {
            // mongoose.Promise = global.Promise;
        await mongoose.connect('mongodb://localhost/mongodbGraphql', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        /*Para que una vez que este conectado , 
         me muestre el mensaje en la consola */
        console.log('Db is connected');
    } catch (e) {
        console.log(e);
    }
}


