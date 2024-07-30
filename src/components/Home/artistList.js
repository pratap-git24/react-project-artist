import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) =>{    
    const list = ({allartist}) => (
        allartist ?
        allartist.map(item=>(
                <Link 
                    key={item.id}
                    to={`/artist/${item.id}`}
                    className="artist_item"
                    style={{
                        background:`url('/images/covers/${item.cover}.jpg') no-repeat`
                    }}
                >
                <div>{item.name}</div>
                </Link>                
            )) 
        
        :null
    )
   // console.log(props);
    return(
        <div className='artists_list'>
            <h4>Browse the artists</h4>
            <div className='artist_container'>
                {list(props)}
            </div>           
        </div>
    )
}

export default ArtistList;