export default{
    jwtSecret: process.env.JWT_SECRE || 'somesecrettoken',
    DB:{
        URI: process.env.MONGODB_URI ||'mongodb://localhost/Notes',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD

    }
}