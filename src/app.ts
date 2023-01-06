import express, {Request, Response, Router} from "express"
import router from "./router/user.router";
import "dotenv/config"

const app = express();
const port = process.env.PORT

app.use(express.json())

app.use("/user",router)

app.listen(port, () => {
    console.log(`le serveur est lancé sur le port ${port}`)
})