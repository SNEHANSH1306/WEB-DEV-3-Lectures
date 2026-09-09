const isAuthorized = (req, res, next) => {
    let token = req.headers.cookie;

    if ((!token) && (token != 123987)){
        return res.status(401).send("Kon hai bhai tuuu??")
    }
    next()

}


const isLoggedIn = (req, res, next) => {
    let login = true;
    if (!login){
        return res.status(401).send("Login kar le pehle")
    }
    next()
}

module.exports = {isAuthorized, isLoggedIn}