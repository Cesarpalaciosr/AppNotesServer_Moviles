"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./database");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);
console.log(process.env.MONGODB_USER);
console.log(process.env.MONGODB_PASSWORD);
app_1.default.listen(app_1.default.get('port'));
console.log('Server on port', app_1.default.get('port'));
