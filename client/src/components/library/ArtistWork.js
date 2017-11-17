// import React from 'react';

// const ArtistWork = (props) => {
//     return (
//         <div>
//             {props.artistId}
//             {/* {props.artistry.map(piece => {
//                 {piece.song}
//             })} */}
//         </div>
//     );
// };

// export default ArtistWork;

import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import Artist from './Artist'

// STYLES

class ArtistWork extends Component {

    state = {
        artistId: 0,
        artistType: '',
        artistry: []
    }

    componentWillMount() {
        this.getData()
    }

    getData = async (props) => {
        const a_id = this.props.artist_id

        const res = await axios.get(`/api/artists/${a_id}/artistry`)
        await this.setState({
            artistry: res.data,
            artistId: a_id,
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                {this.state.artistId}
                {this.state.artistry.map(art => {

                    if(art.song == !undefined){
                        return (
                            <div className="visualArt" key={art.id} _id={art.id}>
                                {art.title}
                                {art.visual_url}
                            </div>
                        )} else {
                            return (
                                <div className="audioArt" key={art.id} _id={art.id}>
                                    {art.song}
                                    {art.album}
                                    <audio controls="controls">
                                        <source src={art.audio_url} type="audio/wav" />
                                    </audio>
                                </div>
                        )}
                })}
            </div>
        );
    }
}

export default ArtistWork;