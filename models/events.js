const connection = require("../db-config")
// const Joi = require("joi")
const db = connection.promise()

// Validate Data
// const validate = (data, forCreation = true) => {
// 	const presence = forCreation ? "required" : "optional"
// 	return Joi.object({
// 		id: Joi.number().presence(presence),
// 		title: Joi.string().max(250).presence(presence),
// 		start: Joi.string().max(250).presence(presence),
// 		end: Joi.string().max(250).presence(presence),
// 		allDay: Joi.boolean().presence(presence),
// 	}).validate(data, { abortEarly: false }).error
// }

//Read all events (model)
const getEventAll = () => {
	let sql = "SELECT * FROM event"
	return db.query(sql).then(([results]) => console.log(results) || results)
}

// Read event by id (model)
const getEventById = (id) => {
	let sql = "SELECT * FROM event WHERE id = ?"
	return db.query(sql, [id]).then(([results]) => results[0])
}

// Create new event (model)
const postEvent = (title, start, end, allDay) => {
	let sql = "INSERT INTO event SET ?"
	return db
		.query(sql, {
			title,
			start,
			end,
			allDay,
		})
		.then(([result]) => {
			const id = result.insertId
			return {
				id,
				title,
				start,
				end,
				allDay,
			}
		})
}

// Update event (model)
const putEvent = (id, newAttributes) => {
	let sql = "UPDATE event SET ? WHERE id = ?"
	return db.query(sql, [newAttributes, id])
}

// Destroy event (model)
const deleteEvent = (id) => {
	let sql = "DELETE FROM event WHERE id = ?"
	return db.query(sql, [id]).then(([result]) => result.affectedRows !== 0)
}

module.exports = {
	getEventAll,
	getEventById,
	postEvent,
	putEvent,
	deleteEvent,
	// validate,
}
