const {Router} = require('express');
const router = Router();

router.get('/users', (req, res) => {
    console.log('ESTO ES UN GET DESDE USER DESDE MI SERVIDOR');
    res.send('ESTO ES UN GET DESDE USER DESDE MI SERVIDOR');
})

router.post('/users', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})


module.exports = router;