const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { setupRoutes } = require("./routes")
const connection = require("./db-config.js")
const app = express()

// Declare port
const port = process.env.PORT || 4000

// Test connection MySQL
connection.connect((err) => {
	if (err) {
		console.error("error connecting: " + err.stack)
	} else {
		console.log("connected to database with threadId :  " + connection.threadId)
	}
})

// Route middleware
app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.status(200).send("Salut Witivio ! Welcome home !")
})

setupRoutes(app)

// Test if server is running
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
