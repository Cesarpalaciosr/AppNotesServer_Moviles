import { Request, Response } from "express"
import Notes from "../models/notes";
import Folder from "../models/folder";

//Crear Nota
export const newNote = async (req: Request,res: Response): Promise<Response> =>{

    //GUARDAR Nota
    const newnote = new Notes(req.body);
    await newnote.save();
    return res.status(201).json(newnote);
}

export const showNotes = async (req: Request, res: Response): Promise<Response>=>{
    
    const notes = await Notes.find({owner:req.body.owner});
    if (!notes) {
        return res.status(400).json({msg:"el usuario no tiene notas"})
    }
    console.log(notes);
    return res.status(201).json(notes);

}

export const showDetails = async (req: Request, res: Response): Promise<Response>=>{
    
    const note = await Notes.findOne({_id:req.body._id});
    if(!note){
        return res.status(400).json({msg:'La nota que busco no existe'});
    }
    //GUARDAR USUARIO
    return res.status(201).json(note);

}

export const editContent = async (req: Request, res: Response): Promise<Response>=>{
    const notes = await Notes.updateOne({_id:req.body._id},{tittle:req.body.tittle, description:req.body.description});
    if (!notes) {
        return res.status(400).json({msg:"Error al intentar guardar la note (note no encontrada)"});
    }
    console.log(notes);
    return res.status(201).json({msg:"Guardado con exito"});

}

export const deleteNote = async (req: Request, res: Response): Promise<Response>=>{

    const note = await Notes.findOne({_id:req.body._id});
    if(!note){
        return res.status(400).json({msg:'La nota que busco no existe'});
    }

    const notes = await Notes.deleteOne({_id:req.body._id});
    console.log(notes);
    return res.status(201).json({msg:"Nota eliminada con exito"});

}


export const AddtoCarpeta = async (req: Request,res: Response): Promise<Response> =>{
    const folder = await Folder.findOne({name:req.body.namefolder})
    
    if (!folder) {
        return res.status(400).json({msg:"la carpeta que ingreso no existe"})
    }
    await Notes.updateOne({_id:req.body.idnote},{folder:req.body.namefolder});
    return res.status(201).json({msg:"nota agregada con exito"})
    
}

export const shownotesinaCarpeta = async (req: Request, res: Response): Promise<Response>=>{
    
    const notes = await Notes.find({folder:req.body.folder});
    if (!notes) {
        return res.status(400).json({msg:"La caroeta que busco no existe"})
    }
    console.log(notes);
    return res.status(201).json(notes);

}
