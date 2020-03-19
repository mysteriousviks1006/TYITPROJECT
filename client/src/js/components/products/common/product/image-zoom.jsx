import React, { Component } from 'react';

export default class ImageZoom extends Component {

    render() {
        const {image} = this.props;

        return (
            <img src={`${process.env.PUBLIC_URL}/${image}`} alt="Image not available" className="img-fluid image_zoom_cls-0" />
        );
    }
}