"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//EL ESQUEMA DE USUARIO
const NotesSchema = new mongoose_1.Schema({
    owner: {
        type: String,
        unique: false,
        required: true,
        trim: true
    },
    titulo: {
        type: String,
        unique: false,
        required: true,
        trim: true
    },
    description: {
        type: String,
        unique: false,
        required: false,
        trim: true
    },
    fecha: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    folder: {
        type: String,
        unique: false,
        required: false,
        trim: true,
    }
});
NotesSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        next();
    });
});
exports.default = (0, mongoose_1.model)('Notes', NotesSchema);
