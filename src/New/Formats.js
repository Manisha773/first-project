import React, { useState } from 'react'
import img1 from "../components/0001.jpg";
import img2 from "../components/0002.jpg";
import img3 from "../components/0003.jpg";
import img4 from "../components/0004.jpg";
import img5 from "../components/0006.png";
import "tachyons";
import NewEditForm from './NewEditForm';

const Formats = () =>{

    var [id,setid] = useState()

    const imageid = (e) =>{
        setid(id=e.target.id)
    }
    if(id==null)
    {
    return(
        <>
         <h1 className="tc"> RESUME FORMATS </h1>
          <img
            className="grow ma4 tc"
            style ={{height: '450px',width : '500px'}}
            id="5"
        onClick={imageid}
            src={img5}
            alt="number1"
          />
        <img
          className="grow ma4 tc"
          style ={{height: '420px',width : '350px'}}
          id="1"
        onClick={imageid}
          src={img1}
          alt="number2"
        />
        </>
    )
    }
    else{
        return(
        <NewEditForm tempimgid={id} />
        )}
}

export default Formats;