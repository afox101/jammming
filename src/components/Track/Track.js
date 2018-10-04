import React from './react';
import './Track.css'


class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
    }

    addTrack() {
        this.props.onAdd(this.props.track)
    }

    removeTrack() {
        this.props.onRemover(this.props.track)
    }


    renderAction() {
        if(this.props.isRemoval) {
            return <a className="Track-action" onClick= {this.removeTrack}>-</a>
        } 
            return <a className="Track-action" onClick= {this.addTrack}>+</a>
        }
    
    render() {
        return (
            <div className="Track" track={this.state.track}>
            <div className="Track-information">
              <h3>{name}</h3>
              <p>{artist}{album}</p>
            </div>
            <a>{this.renderAction}</a>
          </div>    
        )
    }
}