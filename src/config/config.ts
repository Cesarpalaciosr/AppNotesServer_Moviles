import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.PORT);

export default{
    jwtSecret: process.env.JWT_SECRE || 'somesecrettoken',
    DB:{
        URI: process.env.MONGODB_URI||'mongodb://localhost:27017/',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD

    }
}