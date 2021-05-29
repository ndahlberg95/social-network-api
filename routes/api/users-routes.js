const router = require('express').Router()
const User = require('../../models/User');

//GET all users
router.get('/', (req, res) => {
    //     User.findAll()
    //         .then(dbTagData => res.json(dbTagData))
    //         .catch(err => {
    //             console.log(err);
    //             res.status(500).json(err);
    //         });
    User.find().then(
        resp => res.json(resp)
    )
});

//GET  a single user by its _id and populated thought and friend data

//POST a new user
router.post('/', (req, res) => {
    // expects {id: '1', tag-name: 'tag'}
    // Tag.create({
    //     id: req.body.id,
    //     tag_name: req.body.tag_name
    // })
    //     .then(dbTagData => res.json(dbTagData))
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json(err);
    //     });
    res.send('got the post route!')
});

//PUT to update a user by its _id

//DELETE to remove user by its _id

module.exports = router