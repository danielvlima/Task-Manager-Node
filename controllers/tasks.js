const getAllTasks = (req, res) => {
    res.send('all items')
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const createTask = (req, res) => {
    res.json(req.body)
}
const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete tak')
}
module.exports = {
    getAllTasks, getTask, createTask, updateTask, deleteTask
}