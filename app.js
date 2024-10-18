require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3030

require("./dbConnection").connectionDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require("./routers/userRouter")
app.use("/users", router)

app.listen(PORT, () => {
    console.log(`server is listening on port.....${PORT}`)
})