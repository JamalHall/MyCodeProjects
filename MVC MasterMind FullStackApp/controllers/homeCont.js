module.exports = {
    showHome: (req,res) => {
        console.log(req.oidc.isAuthenticated(), req.oidc.user)
        res.render('index.ejs',{
            authStatus: req.oidc.isAuthenticated(),
            user: req.oidc.user,
        })
    }
}