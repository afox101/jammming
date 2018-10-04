import React from './react';
import './SearchResults.css'

import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList trackList={this.props.trackList} tracks={this.props.SearchResults.map()} key={this.props.track.id} onAdd={this.props.onAdd} isRemoval={false}/>
          </div>    
        )
    }
}

export default SearchResults