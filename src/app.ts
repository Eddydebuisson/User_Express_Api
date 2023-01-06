import express, {Request, Response} from "express"
import "dotenv/config"

const app = express();
const port = process.env.PORT

app.listen(port, () => {
    console.log(`le serveur est lancé sur le port ${port}`)
})