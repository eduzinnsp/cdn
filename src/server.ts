import "colors";
import imgSchema from "./schemas/imgSchema";

import { config } from "dotenv";
config();

import express, { Request, Response, NextFunction } from "express";
import { connect } from "mongoose";

import path from "path";
import body from "body-parser";
import multer from "multer";

const app = express();
app.listen(80, () =>  { 
    console.clear() 
    console.log("[Logs] Site & Api Online :)".cyan)
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.set('trust proxy', true);

app.use(body.urlencoded({ extended: true, limit: "50mb" }));
app.use(body.json());

const upload = multer();
connect(process.env.MONGODB as string).then(() => console.log("[Logs] Conectei a MongoDB :)".cyan));

app.route("*").get(async (req: Request, res: Response, next: NextFunction) => {
    console.log(`[Logs IP] Nova Request Recebida: ${req.ip?.replace("::ffff:", "")} | ${req.url}`.yellow);
    return next();
});
app.route("/").get((req: Request, res: Response) => res.render("upload"));
app.route("/images/:code").get(async (req: Request, res: Response) => {
    const { code } = req.params;

    const img = await imgSchema.findById(code);
    if (!img) return res.send(404);
    
    console.log(`[Logs CDN] Imagem requisitada: ${code}`.yellow);
    res.set('Content-Type', img.ext as string);
    return res.status(200).send(Buffer.from(img.buffer, 'base64url'));
}); 

app.route("/images/upload").post(upload.single('imagem'), async (req: Request, res: Response) => {
    const image = req.file;
    const id = gerarSequencia();

    if (!image) return res.send(404);
    if (!image.mimetype.startsWith("image/") || !image.mimetype.startsWith("video/")) return res.send(401);
    
    const img = await imgSchema.create({ _id: id, buffer: image.buffer.toString("base64url"), ext: image.mimetype });
    
    console.log(`[Logs CDN] Imagem upada: ${image.originalname} | ${id}`.yellow);
    await img.save();
    return res.status(200).redirect(`/images/${id}`);
})


function gerarSequencia() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let sequencia = '';

    for (let i = 0; i < 10; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        sequencia += caracteres.charAt(indice);
    }

    return sequencia;
}