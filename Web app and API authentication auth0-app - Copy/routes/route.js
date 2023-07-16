const express = require('express')
const router = express.Router()
const { requiresAuth } = require('express-openid-connect')

router.get('/', (req , res) => {
    console.log(req.oidc.isAuthenticated())
    res.render('index', {
        title: 'Home un-secured page',
        authStatus: req.oidc.isAuthenticated(),
        user: req.oidc.user,
    })
})

router.get('/secured', requiresAuth(), (req , res) => {
    console.log(req.oidc.isAuthenticated(), req.oidc.user)
    res.render('securedPage', {
        title: 'Secure Page authenticated page',
        authStatus: req.oidc.isAuthenticated(),
        user: req.oidc.user,
    })
})

router.get('/profile', requiresAuth(), (req , res) => {
    console.log(req.oidc.isAuthenticated(), req.oidc.user)
    res.render('profile', {
            userProfile: req.oidc.user,
            authStatus: req.oidc.isAuthenticated(),
    })
})

module.exports = router
