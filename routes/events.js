const eventsRouter = require("express").Router()
const Events = require("../models/events")

// Read All events (route)
eventsRouter.get("/", (req, res) => {
	Events.getEventAll()
		.then((events) => {
			res.status(200).json(events)
		})
		.catch((err) => {
			console.log(err)
			res.status(500).send("Error Server")
		})
})

// Read event by id (route)
eventsRouter.get("/:id", (req, res) => {
	Events.getEventById(req.params.id)
		.then((event) => {
			if (!event) res.status(404).json({ message: `Event not found` })
			else res.status(200).json(event)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json({ message: "Error retrieving event from database" })
		})
})

// Create event (route)
eventsRouter.post("/", (req, res) => {
	const { title, start, end, allDay } = req.body

	if (!title) res.status(401).json({ message: "Event title is required" })
	else {
		console.log("post body", req.body)
		Events.postEvent(title, start, end, allDay)
			.then((createdEvent) =>
				res.status(201).json({
					message: `🎉 Event Created !`,
					event: createdEvent,
				})
			)
			.catch((err) => {
				console.error(err)
				res.status(500).json({ message: "Error saving the event" })
			})
	}
})

// Update event (route)
eventsRouter.put("/:id", (req, res) => {
	const id = req.params.id
	// let validationErrors = null
	Events.getEventById(id).then(
		(existingEvent) => {
			if (!existingEvent) {
				res.status(404).json({ message: `Event with id ${id} not found.` })
			}
			console.log("put body", req.body)
			Events.putEvent(id, req.body)
				.then(() => {
					res
						.status(200)
						.json({ message: "Event updated !", event: { ...req.body } })
				})
				.catch((err) => {
					console.error(err)
					res.status(500).json({ message: "Error updating the event." })
				})
		}
		// })
	)
})

//Delete event (route)
eventsRouter.delete("/:id", (req, res) => {
	const id = req.params.id
	console.log("delete id:", id)
	Events.deleteEvent(id)
		.then((deletedEvent) => {
			if (deletedEvent) res.status(200).json({ message: `🎉 Event deleted!` })
			else res.status(404).json({ message: "Event not found" })
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({ message: "Error deleting the event" })
		})
})

module.exports = eventsRouter
