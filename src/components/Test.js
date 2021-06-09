import React,{useState} from 'react'

const Test = () =>
{
    const [arr,setArr]=useState({
        1:{
        name:'',email:'',password:0
           },
        2:{
            school:'',
            subject:''
        }
        })

    const func = () =>{
        setArr({5:"",6:""})
        console.log(arr)
    }


    return(
    Object.keys(arr).map((i,j)=>{
        return(
        <>
        <h1>{i}</h1>
        {Object.keys(arr[i]).map(function(a,b){
            return(<>
            <h2>{typeof(arr[i][a])}</h2>
            </>)
        })}
        </>
        )
    }))


//     return(
//         <>
//         {/* <div className="iterate-object">
// 	<ul>
//   		{Object.keys(arr).map(function(keyName, keyIndex){
//             Object.keys(keyName).map(function(i,j){
//                 if(typeof(keyName[i])==='string'){
//     		return (
//                 <>
//                 <label>{keyName}</label>
//                 <br/>
//                 <input type='text' />
//                 <br/>
//                 </>
//             )}
//               else{
//                   return(
//                       <>
//                       <label>Password</label>
//                       <br/>
//                           <input type='password' />
//                           <br/>
//                       </>
//                   )
//               }})
// 		})}
// 	</ul>  
// </div>
// <button onClick={func}>Click</button> */}
//         </>
//     )
}

export default Test;