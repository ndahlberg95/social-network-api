const router = require('express').Router()
const User = require('../../models/User');

//GET all users
router.get('/', (req, res) => {
    User.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET  a single user by its _id and populated thought and friend data

//POST a new user
router.post('/', (req, res) => {
    // expects {username: 'myusername', email: 'user@email.com'}
    User.create({
        username: req.body.username,
        email: req.body.email
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    res.send('User created!')
});

//PUT to update a user by its _id
router.put('/:_id', (req, res) => {
    // expects {_id: '1', username: "myusername"}
    User.update(req.username, {
        where: {
            _id: req.params._id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No User found with this _id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//DELETE to remove user by its _id
router.delete('/:_id', (req, res) => {
    User.destroy({
        where: {
            _id: req.params._id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUsertData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;