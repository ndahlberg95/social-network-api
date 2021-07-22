const router = require('express').Router();
const usersRoutes = require('./api/users-routes');
const thoughtsRoutes = require('./api/thoughts-routes');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('*', (req, res)=> {
    res.send("It's working!");
});

module.exports = router;