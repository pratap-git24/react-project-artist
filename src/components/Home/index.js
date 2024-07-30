import React, { Component } from "react";
import axios from "axios";

import Banner from "./banner"
import ArtistList from "./artistList";

const URL_ARTIST = 'http://localhost:3004/artists';

class Home extends Component{

    state={
        artists:''
    }
    

    componentDidMount(){
        <></>
        axios.get(URL_ARTIST)
        .then(response =>{
            this.setState({artists:response.data})
        })
    }

    render(){
        //console.log(this.state)
        return(
            <>
                <Banner/>
                <ArtistList allartist={this.state.artists}/>
            </>
        )
    }
}

export default Home