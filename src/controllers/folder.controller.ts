import { Request, Response } from "express"
import Folder from "../models/folder";
import notes from "../models/notes";
//Crear coleccion
export const newFolder = async (req: Request,res: Response): Promise<Response> =>{

    //Guardar coleccion
    const newfolder = new Folder(req.body);
    await newfolder.save();
    return res.status(201).json(newfolder);
}

export const showFolder = async (req: Request, res:Response): Promise<Response> =>{
    const folder = await Folder.find({owner:req.body.owner});
    if (!folder) {
        return res.status(400).json({msg:"el usuario no existe"});
    }

    return res.status(201).json(folder);
}

export const deleteFolder = async (req: Request, res: Response): Promise<Response> =>{
    const folder = await Folder.findOne({name_folder:req.body.name_folder});
    if (!folder) {
        return res.status(400).json({msg:"la carpeta que busco no existe"});
    }
    await notes.updateMany({folder:req.body.name_folder},{folder:" "});
    await folder.deleteOne({name_folder:req.body.name_folder});
    return res.status(200).json({msg:"La carpeta fue borrada con exito"});
}

