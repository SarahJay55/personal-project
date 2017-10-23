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
                    <p><img className="bioimg" src="https://photos-5.dropbox.com/t/2/AAAfhaoRD3ItoBHEMS25COYfJm-mpLosffKiziAP68ZoWA/12/148812236/jpeg/32x32/3/1508194800/0/2/DSC_9796.jpg/EOCF53EY0DMgAigC/akQ8W8NVN2KCJxf_HG0U8aj6AorbhD0QfX2crc_fI48%2C2ogP0bYELZ481JnHoDxh6ETz7_fiBFc1GXQ3ASIzZn4%2CnzC0CIcM3uEG9b4ymxMinUBd_Cl9HZmN8TAPS1enn2s%2CloGlwLPyO-FXQzNJuJcJWRe11evwPYjChBecVkYPZB8%2CIdl0CjdqCII-Y-IZ8oyKdozG4z5kluBN-b-hvjEb5n4%2CR5ZaRZHi1yV4PoXZx0MDgCxoSz-EX0T9Ef16suZLqjs?dl=0&size=2048x1536&size_mode=3" alt="Braydon" width="600px" height="400px" align="left" />
                    My love of photography truly came from my fascination of the ins and outs of cameras. Every time I went to grandmas house I would get out her fancy big camera and figure out what all the buttons did. After my technical brain was satisfied I became in love with the art of it. Not only could this camera capture light but it could also capture time. The idea that color and images can express emotion and story fascinates me.</p>
                </div>
            </div>
        )
    }
}

export default Bio;