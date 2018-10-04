import React from './react';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
            <Track onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
        </div>    
        )
    }
}

export default TrackList