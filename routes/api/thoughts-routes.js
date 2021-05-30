const router = require('express').Router()
const Thought = require('../../models/Thought');

//GET to get all thoughts
router.get('/', (req, res) => {
    Thought.findAll()
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET to get a single thought by its _id

//POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.post('/', (req, res) => {
    // expects {thoughtText: 'Hahaha!', createdAt: 9:25, username: 'myusername'}
    Thought.create({
        thoughtText: req.body.thoughtText,
        createdAt: req.body.createdAt,
        username: req.body.username
    })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    res.send('Thought created!')
});

//PUT to update a thought by its _id
router.put('/:_id', (req, res) => {
    // expects {_id: '1', thoughtText: "Hahaha!"}
    Thought.update(req.thoughtText, {
        where: {
            _id: req.params._id
        }
    })
        .then(dbThoughtData => {
            if (!dbThoughtData[0]) {
                res.status(404).json({ message: 'No thought found with this _id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//DELETE to remove a thought by its _id
router.delete('/:_id', (req, res) => {
    Thought.destroy({
        where: {
            _id: req.params._id
        }
    })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;