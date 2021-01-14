//deportes
exports.getHome = (req, res) => {
    res.render('home')
}

exports.getQuienes =  (req, res) => {
    res.render('QuienesSomos')
}

exports.getDonde = (req, res) => {
    res.render('DondeEstamos')
}

exports.getHacemos = (req, res) => {
    res.render('QueHacemos')
}

exports.getContacto = (req, res) => {
    res.render('Contacto')
}