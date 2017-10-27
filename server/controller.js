let id = 0;
let items = [];

module.exports = {
    getPrints: function(req, res, next) {
        const db = req.app.get('db');
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
    },

    getDetails: function(req, res, next) {
        const db = req.app.get('db');
        db.details([req.params.printid])
        .then(details => {
            res.status(200).send(details[0]);
        })
    },

    makeOrder: function(req, res, next) {
        const db = req.app.get('db');
        req.body.cart.forEach((item) => {
            db.post_order([item.id, req.body.email])
            .then(order => {
                res.status(200).send(order)
            })
        }) 
       
    }
}