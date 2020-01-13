import { Schema, model } from "mongoose";
const schemaUser = new Schema({

    firstname: {
        type: String,
        required:true,
        trim: true
    },
    lastname: String,
    age: Number

});
export default model('User', schemaUser);