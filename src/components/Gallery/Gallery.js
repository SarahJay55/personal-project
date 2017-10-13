import React, { Component } from 'react';
import './Gallery.css';
import { getGallery } from './../../ducks/reducer.js';
import { connect } from 'react-redux';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gallery: []
        }
    }

    componentDidMount() {
        this.props.getGallery();
    }


    render() {
        const theGallery = this.props.gallery.map((photo, i) => {
            return (
                <div key={i} className="row">
                    <span className="column"><img src={photo.dropbox_url} /></span>
                    {/* <span>{photo.photo_name}</span> */}
                </div>
            )
        })
        return (
            <div>
                <h1>Gallery</h1>
                {theGallery}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gallery: state.gallery
    }
}

export default connect(mapStateToProps, { getGallery })(Gallery);