import React,{useEffect,useState} from 'react'
import "../pages/myResume.css"
import img1 from '../0006.png'
import img2 from '../0001.jpg'
import img3 from '../0002.jpg'
import img4 from '../0003.jpg'
import img5 from '../0004.jpg'
import Temp from '../Temp'
import axios from 'axios'
import { json } from 'body-parser'
// import temp from '../../../../server/Documents/temp'

function MyResume() {
    const loggedinUser=localStorage.getItem('user');
    const ret=(JSON.parse(loggedinUser).temp)
var [result , setResult ] =useState({})

useEffect(()=>{
    fetchdata()
},[]);

async function fetchdata(){
    const res = await axios.post('http://localhost:8020/app/fetch-temp',JSON.parse(loggedinUser))
    setResult(result = res.data[0].temp)
    console.log(result)
}
    return (
        <>
            <div class="w3-container">
                <h3>Created Templates</h3>
                <div style={{zoom:'0.5'}}>
                <div style={{zoom:'0.6'}}>
                <Temp values={result} />
                </div>
                </div>
                <a href='/editform' >Click</a>
                {/* {ret.map((user, index) => (
                    <div>
                    {(()=>{
                        if (user.tempid==1){
                            return(
                                <div><h3 className=" column1" style={{textIndent:'50px',color:"blue"}}>  
                                <img src={img1} style={{height:'200px',width:'200px'}}/>
                                </h3></div>
                            )}
                            else if (user.tempid==2){
                            return(
                                <div><h3 className="column1" style={{textIndent:'50px',color:"blue"}}>  
                                <img src={img2} style={{height:'200px',width:'200px'}}/>
                                </h3></div>
                            )}
                            else if (user.tempid==3){
                            return(
                                <div><h3 className=" column1" style={{textIndent:'50px',color:"blue"}}>  
                                <img src={img3} style={{height:'200px',width:'200px'}}/>
                                </h3></div>
                            )}
                            else if (user.tempid==4){
                            return(
                                <div><h3 className=" column1" style={{textIndent:'50px',color:"blue"}}>  
                                <img src={img4} style={{height:'200px',width:'200px'}}/>
                                </h3></div>
                            )}
                            else if (user.tempid==5){
                            return(
                                <div><h3 className=" column1" style={{textIndent:'50px',color:"blue"}}>  
                                <img src={img5} style={{height:'200px',width:'200px'}}/>
                                </h3></div>
                            )}
                            })()}
                    </div>
                ))} */}
            </div>
        </>
    )
}

export default MyResume
