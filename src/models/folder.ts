import { Model, Schema, Document, model } from "mongoose";

//INTERFACE
export interface Folder extends Document {
    owner:string,
    name_folder:string,
}

//EL ESQUEMA DE USUARIO
const FolderSchema = new Schema ({
    owner:{
        type:String,
        unique:false,
        required:true,
        trim:true
    },
    name_folder:{
        type:String,
        unique:false,
        required:true,
        trim:true
    },
});

FolderSchema.pre<Folder>('save', async function(next){
    next();

})


export default model<Folder>('Folder', FolderSchema);