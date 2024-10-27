let createUserAuth = async (req, res, next) => {
    if (req.session.username!=undefined) {
        next();
    }
    else {
        res.redirect("/auth/login");
    }
}

module.exports = createUserAuth;