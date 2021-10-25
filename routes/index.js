// Import router: const myRouter = require('./myRoute')
const eventsRouter = require("./events")

// add your middleware route: app.use('url', myRouter)
const setupRoutes = (app) => {
	app.use("/events", eventsRouter)
}

module.exports = { setupRoutes }
