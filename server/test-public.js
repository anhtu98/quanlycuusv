function init(app) {
    app.get('/test/login', (req, res) => {
        res.sendFile('../public/login.html', {root : __dirname} );
    })
}

module.exports = {
    init: init
}
