const express = require("express")
const router = express.Router()
const User = require("../../models/user")
const passport = require("../../passport")
const loginController = require("../../controllers/loginController");

router.post('/', (res,req) => {
    console.log('======================   user.js Endpoint: /  ==================');
    let login = req.req.body;
    let result = loginController.findById(login,req);
    let _username = login.username;
    let _password = login.password;

    User.findOne({username: _username}, (err, user) => {
        if (err) {
            console.log('======================   user.js Server Error  ==================');
        } else if (user) {
            console.log('======================   user.js Existing Found  ==================');
        } else {
            console.log('======================   user.js Create User  ==================');
            const newUser = new User({
                username: _username,
                password: _password
            })
            newUser.save((err, savedUser) => {
                if (err) {
                    return {error: err};
                }    
                console.log('======================   user.js New User Saved  ==================');
                return {user: savedUser}; 
            })
        }
    });
});

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router