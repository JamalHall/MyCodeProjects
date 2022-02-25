module.exports = {
    sendProfile: (req,res) => {
        console.log(req.oidc.isAuthenticated(), req.oidc.user)
        res.render('profilePage.ejs',{authStatus: req.oidc.isAuthenticated(),
            user: req.oidc.user,})
    }
}