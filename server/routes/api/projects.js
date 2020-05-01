const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await loadProjectsCollection();
    res.send(await projects.find({}).toArray());
});

router.post('/', async (req, res) => {
    const projects = await loadProjectsCollection();
    await projects.insertOne({
        title: req.body.title,
        deadline: req.body.deadline,
        link: req.body.link,
        image: req.body.image,
        todo: [],
        completed: "false"
    });
    res.status(201).send();
});

router.delete('/:id', async (req, res) => {
    const projects = await loadProjectsCollection();
    await projects.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadProjectsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb://192.168.1.175:27017/iwd_final', {
        useNewUrlParser: true
    });

    return client.db('iwd_final').collection('projects');
}


module.exports = router;