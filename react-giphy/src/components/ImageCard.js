import React from 'react';
import './imageCard.css';

class ImageCard extends React.Component {

    render(){
        console.log()
        return(
            <div className="image-container">
                <img src={this.props.url} alt="" className="image-view" />
            </div>
        )
    }
}

export default ImageCard;