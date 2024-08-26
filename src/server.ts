import express from "express";
import { router } from "./routes";
import path from "path";

const app = express();

app.use(express.json());

app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "temp")));

app.listen(3333, () => console.log("Servidor online!"));
