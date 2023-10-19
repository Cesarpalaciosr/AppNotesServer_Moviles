import { Model, Schema, Document, model } from "mongoose";

//INTERFACE
export interface Notes extends Document {
    owner:string,
    tittle:string,
    description:string,
    date:string,
    folder:string,
    
}


//EL ESQUEMA DE USUARIO
const NotesSchema = new Schema ({
    owner:{
        type:String,
        unique:false,
        required:true,
        trim:true
    },
    tittle:{
        type:String,
        unique:false,
        required:true,
        trim:true
    },
    description:{
        type:String,
        unique:false,
        required:false,
        trim:true
    },
    date:{
        type:String,
        unique:false,
        required:true,
        trim:true,

    },
    folder:{
        type:String,
        unique:false,
        required:false,
        trim:true,
    }
});

NotesSchema.pre<Notes>('save', async function(next){
    next();

})

export default model<Notes>('Notes', NotesSchema);