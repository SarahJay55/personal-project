module.exports = {
    getPrints: function(req, res, next) {
        const db = req.app.get('db');
        const printsId = req.params.printsId
        db.getPrints([printsId])
        .then(prints => {
            res.status(200).send(prints);
        })
        .catch(err => {
            res.status(500).send(err);
        })
    }

    
}