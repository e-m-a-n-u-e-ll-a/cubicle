let router = require('express').Router();
let authService = require('../services/authService');
router.get('/register', (req, res) => {
    res.render('auth/register');
});
router.post('/register', async (req, res) => {
    let created = await authService.register(req.body);
    if (created) {
        res.redirect('/auth/login')
    } else {
        res.redirect('404');
    }
    console.log(created);
})
module.exports = router;