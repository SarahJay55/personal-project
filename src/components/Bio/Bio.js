import React, { Component } from 'react';
import './Bio.css';

class Bio extends Component {
    render() {
        return (
            <div className="bio">
                <div className="bioheader">
                    <h1>Bio</h1>
                </div>
                <div className="bioinfo">
                    <p><img className="bioimg" src="https://photos-1.dropbox.com/t/2/AADk-gIq6RcgTl1fED7mxt7_1G7pLJUlvuTjHm5lcQHyYg/12/148812236/jpeg/32x32/3/1508875200/0/2/DSC_6482.jpg/EOCF53EYgDQgAigC/4bmip9I8gHDJwvr6TsNwKImeLPQrsVVkOqckBnUlBnE%2C2xRoeR4ncNaQd1qd1bupvEZ6TsDlIoYsAEf3zLzddY8%2CKm-GvNI2VfZPrdvzan4nMrntG3kuZULO1GtGnH5EubU?dl=0&size=2048x1536&size_mode=3" alt="Braydon" width="600px" height="400px" align="left" />
                    My love of photography truly came from my fascination of the ins and outs of cameras. Every time I went to grandmas house I would get out her fancy big camera and figure out what all the buttons did. After my technical brain was satisfied I became in love with the art of it. Not only could this camera capture light but it could also capture time. The idea that color and images can express emotion and story fascinates me.<br></br><br></br>
                    Companies I have shot for: Maverik (Full Time), Geigerrig, Aquamira, Teton Sports, ESPN, X-Games, Godfrey Clan, MasterCraft, Sierra Nevada, Black Oak Creative, Switch Belt, One80 Light, Goal Zero.<br></br>
                    Things I Love: Independent films, biking at night, water, Sunday naps, back-country skiing, sitting on the porch with hot chocolate and watching the rain, flying, laughing at meme accounts with my dad, sitting around a fire with friends, strong brands, my 4Runner, small towns.
                    </p>

                </div>
            </div>
        )
    }
}

export default Bio;