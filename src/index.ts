import app from "./app";
import './database';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' })
console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);
console.log(process.env.MONGODB_USER);
console.log(process.env.MONGODB_PASSWORD);


app.listen(app.get('port'));

console.log('Server on port', app.get('port'));
