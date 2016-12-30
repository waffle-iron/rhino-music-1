import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {

  handleClick(e) {
    console.log("SOUND TESTS");
  }

  renderAlbums(albumId) {
  	console.log('albumId', albumId);
   
    // const name = albumId
    //  .map((title) => title.name)
    //  .map((names, idx) => (<p key={names.concat(idx + 1)}>{names}</p>));

    // const artist = albumId
    //   .map(title => title.artists[0].name)
    //   .map((artistName, idx) => (<p key={artistName.concat(idx + 1)}>{artistName}</p>)); 
      
    // const album = albumId
    //   .map(title => title.album.album_type)
    //   .map((album, idx) => (<p key={album.concat(idx + 1)}>{album}</p>));

   //For testing purposes only!
  //==========================>
   const name = albumId[0].name;
   const artist = albumId[0].artists[0].name;
   const album = albumId[0].album.album_type;
      
   //==========================>    
    return (
      <tr key={name + artist}>
        <td>{name}</td>
        <td>{artist}</td>
        <td>{album}</td>
        <td><button>Play</button></td>
        <td><button>Favourites</button></td>
      </tr>
   );
  }

  render () {
  console.log("PROPSInIN", this.props)	
    return (
      <table className="table table-hover">
      <thead>
        <tr >
          <th> Title</th>
          <th> Artist </th>
          <th> Album </th>
          <th> Play </th>
          <th> Favourites</th>
        </tr>
      </thead>
      <tbody>
       { console.log("this.props", this.props)}
       {this.props.tracks.map(this.renderAlbums)}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps(state) {
  return {tracks: state.tracks};  //same as tracks: state.tracks
}

export default connect(mapStateToProps)(SearchList);