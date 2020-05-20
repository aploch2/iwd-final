const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await loadProjectsCollection();
    res.send(await projects.find({}).toArray());
    projects.close();
});

router.post('/', async (req, res) => {
    const projects = await loadProjectsCollection();
    await projects.insertOne({
        title: req.body.title,
        deadline: req.body.deadline,
        link: req.body.link,
        todos: [],
        completed: false
    });
    res.status(201).send();
});

// add a todo
router.patch('/:id', async (req, res) => {
    const projects = await loadProjectsCollection();
    let id = {"_id": mongodb.ObjectID(req.params.id)};
    let todo = {todo: req.body.newTodo, completed: false};
    let newTodo = { $push: {"todos": todo}};
    projects.updateOne(id, newTodo);

    return res.status(200).send('todo added');    
})

// remove a todo
router.patch('/:id/edit', async (req, res) => {
    const projects = await loadProjectsCollection();
    let id = {"_id": mongodb.ObjectID(req.params.id)};
    let todo = {todo: req.body.todo};
    let newTodo = { $pull: {"todos": todo}};
    projects.updateOne(id, newTodo);

    return res.status(200).send('todo removed');    
})

// complete or uncomplete a todo
// router.patch('/:id/edit', async (req, res) => {
//     const projects = await loadProjectsCollection();
//     let id = {"_id": mongodb.ObjectID(req.params.id)};
//     let todo = [{todo: req.body.todo, completed: req.body.completed}];
//     let newTodo = { $set: {"todos": todo}};
//     projects.updateOne(id, newTodo);

//     return res.status(200).send('todo modified');    
// })

router.delete('/:id', async (req, res) => {
    const projects = await loadProjectsCollection();
    await projects.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

router.get('/:id', async (req, res) => {
    const projects = await loadProjectsCollection();
    res.send(await projects.findOne({_id: mongodb.ObjectId(req.params.id)}));
    // res.status(200).send();
});

async function loadProjectsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb://mongopm:27017/iwd_final', {
        useNewUrlParser: true
    });

    return client.db('iwd_final').collection('projects');
}


module.exports = router;