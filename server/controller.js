let id = 0;
let items = [];

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
    },

    getDetails: function(req, res, next) {
        const db = req.app.get('db');
        db.details([req.params.printid])
        .then(details => {
            res.status(200).send(details[0]);
        })
    }

    // getCart: function(req, res) {
    //     const { items } = req.body;
    //     const item = { id, size, type, quantity }
    //     res.status(200).send(items);
    // }, 


        
    


// update: (req, res) => {
//     const { item } = req.body;
//     const updateID = req.query.id;
//     const cartItems = cart.findIndex( items => items.id == updateID );
//     let cartItems = cart[cartIndex]
// },

// delete: ( req, res ) => {
//     const deleteID = req.query.id;

// }}
}