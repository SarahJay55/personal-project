import React, { Component } from 'react';
import './Gallery.css';
import { getGallery } from './../../ducks/reducer.js';
import { connect } from 'react-redux';
import ImageZoom from 'react-medium-image-zoom'

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
                <div key={i} className="gallerygrid">
                    {/* <span>whatever</span> */}
                    <ImageZoom image={{ 
                        className:"column", 
                        src: photo.dropbox_url, 
                        alt:"" }} 
                        
                        /> 
                    {/* <span>{photo.photo_name}</span> */}
                    
                </div>
            )
        })
        return (
            <div className="test">
                <h1 className="galleryheader">Gallery</h1>
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