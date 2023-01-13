import express from "express";
import dotenv from "dotenv";

dotenv.config({path: './config/config.env'})

const server = express()

server.listen(process.env.PORT, console.log(`Servidor aberto na ${process.env.PORT}`))