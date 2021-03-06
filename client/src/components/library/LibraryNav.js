import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// COMPONENTS
import SearchPopout from './SearchPopout'

// STYLES
const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Navigation = styled.div`
display: flex;
width: 100vw;
justify-content: space-between;

button {
    background-color: rgba(0,0,0,0);
    border: none;
}
`
const FormStyle = styled.div`

`

// class SearchWindow extends Component {
//     render() {
//         if (this.props.showPopout === true)
//             return (
//                 <div>
//                     {this.props.searchResults.results.map(result => {
//                         <h1>{result.trackName}</h1>
//                     })}
//                 </div>
//             );
//         return null
//     }
// }

class LibraryNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTrack: '',
            searchResults: {},
            trackData: {
                artistName: '',
                trackName: '',
                collectionName: '',
                artworkUrl100: '',
                previewURL: ''
            },
            showPopout: false,
            searchBarVis: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const input = event.target.value
        this.setState({ searchTrack: input })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const stateTrack = this.state.searchTrack
        const formatSearch = stateTrack.replace(" ", "+")

        const res = await axios.get(`https://itunes.apple.com/search?term=${formatSearch}&media=music&limit=5`)
        await this.setState({ searchResults: res.data.results })

        const [track] = this.state.searchResults
        await this.setState({ trackData: track })
        console.log(this.state)

        // const req = await axios.post(`/api/audio/add`, {
        //     params: {
        //         trackName: this.state.trackData.trackName,
        //         artistName: this.state.trackData.artistName,
        //         collectionName: this.state.trackData.collectionName,
        //         artworkUrl100: this.state.trackData.artworkUrl100,
        //         previewUrl: this.state.trackData.previewURL
        //     }
        // })

        this.openSearchWindow();
    }

    openSearchWindow = () => {
        this.setState({ showPopout: true })
    }

    closeSearchWindow = () => {
        this.setState({ showPopout: false })
    }

    openSearchBar = () => {
        const current = { ...this.state.searchBarVis }
        this.setState({ searchBarVis: !current })
    }

    storeTrack = async (trackID) => {
        console.log(trackID);

        let trackToStore = await this.state.searchResults[`${trackID}`]
        let artistPayload = {
            name: trackToStore.artistName,
            artist_type: 'audio',
            description: trackToStore.artistViewUrl,
            artist_image: trackToStore.artworkUrl100
        }
        console.log(artistPayload);
        
        const req = await axios.post(`/api/artist/${artistPayload}`)
        
        let trackPayload = {
            trackName: '',
            collectionName: '',
            previewURL: '',
            collection_id: '',
            artist_id: '',
            artworkUrl100: '',
            artistName: ''
        }
        console.log(trackToStore);
    }

    render() {

        // if (this.state.showPopout) {
        //     return <SearchPopout isOpen={this.state.showPopout} onClose={this.closeSearchWindow} searchResults={this.state.searchResults} />
        // }


        return (
            <Wrapper>
            <Navigation>
                <button><Link to="/account"><i class="material-icons">keyboard_backspace</i></Link></button>
                {/* <button onClick={this.openSearchBar}><i class="material-icons">add_circle_outline</i></button> */}

                <form onSubmit={this.handleSubmit}>
                    <FormStyle>

                        <label>
                            Track Title:
                            <input type="text" value={this.state.searchTrack}
                                onChange={this.handleChange} />
                        </label>

                        <input type="submit" value="submit" />

                    </FormStyle>
                </form>


            </Navigation>
                {this.state.showPopout ? <SearchPopout isOpen={this.state.showPopout} onClose={this.closeSearchWindow} searchResults={this.state.searchResults} trackData={this.state.trackData} storeTrack={this.storeTrack} /> : null}
            </Wrapper>
        );
    }
}

export default LibraryNav;