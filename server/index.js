require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , stripe = require('stripe')(process.env.SECRET_KEY)
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , controller = require('./../server/controller.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');

    db.find_user([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            const user = profile._json;
            db.create_user([user.name, user.email, user.identities[0].user_id])
                .then(user => {
                    return done(null, user[0].id)
                })
        }
    })
}))

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/prints',
    failureRedirect: '/auth'
}))

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        return res.status(404).send("User Not Found")
    }
    return res.status(200).send(req.user)
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/#/');
})

passport.serializeUser(function (id, done) {
    done(null, id);
})

passport.deserializeUser(function (id, done) {
    app.get('db').find_current_user([id])
        .then(user => {
            done(null, user[0])
        })
})

app.get('/api/gallery', controller.getGallery);
app.get('/api/prints', controller.getPrints);

// app.get('/api/prints/cart', controller.getCart);
// app.post('/api/prints/cart', controller.addItem);
// app.put('/api/prints/cart', controller.update);
// app.delete('/api/prints/cart', controller.delete);


app.post('/api/payment', function (req, res, next) {
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
        if (amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") {
                pennies.push(amountArray[i + 1]);
            } else {
                pennies.push("0");
            }
            if (typeof amountArray[i + 2] === "string") {
                pennies.push(amountArray[i + 2]);
            } else {
                pennies.push("0");
            }
            break;
        } else {
            pennies.push(amountArray[i])
        }
    }
    const convertedAmt = parseInt(pennies.join(''));

    const charge = stripe.charges.create({
        amount: convertedAmt,
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test charge from react app'
    }, function (err, charge) {
        if (err) return res.sendStatus(500)
        return res.sendStatus(200);
    });
});

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))