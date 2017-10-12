module.exports = {
    getPrints: function(req, res, next) {
        const db = req.app.get('db');
        // const prints = req.params.printsId
        db.find_prints()
        .then(prints => {
            res.status(200).send(prints);
        })
        .catch(err => {
            res.status(500).send(err);
        })
    }

    
}