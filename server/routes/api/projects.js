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
        // image: req.body.image,
        todos: [],
        completed: false
    });
    res.status(201).send();
});


// router.put('/:id', async (req, res) => {
//     let id = {
//         _id: mongodb.ObjectID(req.params.id)
//     };
//     const projects = await loadProjectsCollection();
//     res.send(await projects.updateOne({_id: mongodb.ObjectID(req.params.id), title: 'Project Test W'));
//     // await projects.updateOne(({
//     //     _id: id,
//     //     title: "",
//     // }));
//     // res.status(200).send(await projects.findByIdAndUpdate(({
//     //     _id: id,
//     //     todos: [
//     //         { todo: req.params.todo }
//     //     ]
//     // })));
// });
// router.put('/:id', async (req, res) => {
//     const id = req.params.id;
//     let todo = req.body.todo;
//     const projects = await loadProjectsCollection();
//     const project = await projects.findOneAndUpdate(id, todo);
//     // let project = await projects.findByIdAndUpdate(id, req.body);

//     return res.status(200).send({
//         todo
//     });
// });
// router.put('/:id', async function(req, res){
//     const projects = loadProjectsCollection();
    
//     res.send(await projects.findOneAndUpdate(req.params.id));
// });

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
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/iwd_final', {
        useNewUrlParser: true
    });

    return client.db('iwd_final').collection('projects');
}


module.exports = router;