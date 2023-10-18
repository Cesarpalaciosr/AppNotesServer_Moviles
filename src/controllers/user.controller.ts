import {Request, Response} from 'express';
import User, {IUser} from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config/config';

function createToken(user:IUser) {
    return jwt.sign({id: user.id,
        username: user.username
    },
    config.jwtSecret,
     {expiresIn: 1296000});
}
export const signUp = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body);
    
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg:'Please. Send your email and password'})
    }

    //Busca coincidencias en la base de datos con el email proporcionado
    const user = await User.findOne({email: req.body.email});
    console.log(user);
    
    if (user) {
        return res.status(400).json({msg:'The user already exist'});
    }

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json(newUser);
}

export const signIn = async (req: Request, res: Response) => {
    if(!req.body.username || !req.body.password){
        return res.status(400).json({msg:'Please. Send your username and password'})
    }

    const user = await User.findOne({username: req.body.username});
    if (!user) {
        return res.status(400).json({msg:'The user does not exist'});
    }

    const isMatch = await user.comparePassword(req.body.password)
    if(isMatch){
        return res.status(200).json({token: createToken(user)})
    }
    return res.status(400).json({
        msg:'Username or password are incorrect'
    });
}