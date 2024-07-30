import React from "react";

const Albumlist = ({albumList}) =>{

    const listalbum = (albumList) =>(
        albumList ?
        albumList.map((item,index)=>(
            <img key={index} alt="" src={`/images/albums/${item.cover}.jpg`}/>
        ))
        :null
    )

   return(
     <div className="album_list">
        {listalbum(albumList)}
    </div>
   )
}

export default Albumlist;