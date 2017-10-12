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
    },

    getGallery: function(req, res, next) {
        const db = req.app.get('db');
        db.find_gallery()
        .then(gallery => {
            res.status(200).send(gallery);
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }

    
}