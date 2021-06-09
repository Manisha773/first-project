import React, { useEffect, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import CommunicationStayPrimaryLandscape from "material-ui/svg-icons/communication/stay-primary-landscape";
import Formats from "./Formats";

const NewEditForm = (props) => {

    var [state, setState] = useState({ })
    var [tempstate, setTempstate] = useState({})
    var [count, setCount] = useState(0)
    var [size, setSize] = useState([])
    var [design, setDesign] = useState('')

    useEffect(async () => {
        await axios.post('http://localhost:8020/app/template-fetch-data', { tempid: props.tempimgid})
            .then(res => {
                setTempstate(tempstate = res.data[0])
                setSize(size = Object.keys(tempstate.form))
                setState(state = tempstate.form[size[count]])
            })
    }, [])

    const incre = () => {
        setCount(count = count + 1)
        setState(state = tempstate.form[size[count]])
        setDesign(design =eval('`' + tempstate.design + '`'))

    }

    const decre = () => {
        setCount(count = count - 1)
        setState(state = tempstate.form[size[count]])
    }
    
    const download = () => {
        axios.post("http://localhost:8020/app/save-temp", { tempid: tempstate.tempid, form: tempstate.form ,useremail:JSON.parse(localStorage.getItem('user')).email});
        axios.post("http://localhost:8020/create-pdf", { tempid: tempstate.tempid, form: tempstate.form })
            .then(() => axios.get("http://localhost:8020/fetch-pdf", { responseType: "blob" }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: "application/pdf" });
                saveAs(pdfBlob, "newpdf.pdf");
            });
        console.log(tempstate.form)
    }

    const handleChange = (input) => (e) => {
        setTempstate((oldvalue) => {
            return {
                ...oldvalue,
                form: {
                    ...oldvalue.form,
                    [size[count]]: {
                        ...oldvalue.form[size[count]],
                        [input]: e.target.value
                    }
                }
            }
        })
        setDesign(design =eval('`' + tempstate.design + '`'))
    }

    if (count < size.length) {
        return (<>
            <div style={{ display: 'flex', minHeight: '100vh' }}>
                <div style={{ width: "50%" }}>
                    <div className="card mt-5 ml-4 align-items-center">
                        <div className="card-body">
                            <h1 className="card-title" style={{ color: 'black' }}>{size[count]}</h1>
                        </div>
                        {
                            Object.keys(state).map((keyname, keyindex) => {
                                return (<>
                                    <div>
                                        <label>{keyname}</label>
                                        <input defaultValue={state[keyname]} type="text" placeholder={keyname} onChange={handleChange(keyname)} />
                                        <br />
                                    </div>
                                </>
                                )
                            }
                            )
                        }
                        <br />
                        <br />
                    </div>
                    <br />
                    <div className='d-flex justify-content-center'>
                        <button onClick={decre}>Back</button>
                        <button onClick={incre}>Next</button>
                    </div>
                </div>
                <div style={{zoom:''}} className="mx-auto mt-5">
                <div dangerouslySetInnerHTML={{ __html: design }} />
                </div>
            </div>
        </>)
    }
    else if(count!=0){
        console.log(tempstate.form)
        return (<>
            <div className='ml-4 mt-4'>
                <h1>Data Entered</h1>
                <br />
                <br />
                <div dangerouslySetInnerHTML={{ __html: design }} />
                <button onClick={decre}>Back</button>
                <button onClick={download}>Download</button>
            </div>
        </>)
    }
    else{
        return(<h1>Start</h1>)
    }
}

export default NewEditForm;