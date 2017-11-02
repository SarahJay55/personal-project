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
                    <p><img className="bioimg" src="http://res.cloudinary.com/dzqg1z7bt/image/upload/v1509636795/BraydonB_lwxe9q.jpg" alt="Braydon" width="600px" height="400px" align="left" />
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