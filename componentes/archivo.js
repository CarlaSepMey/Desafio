import { useState } from "react";
import {Link } from "react-router-dom";
import "../archivo.css";

function  Archivo ()  {
    
    const [file, setFile] = useState (null)

    const selectedHandler = e =>{
        setFile(e.target.files[0])
    }
    
    const envioHandler = ()=>{
        if(!file){
            alert('Selecciona un archivo')
            return
        }
        const formdata = new FormData()
        formdata.append('file', file)

        fetch('http://localhost:9000/file/post',{
            method: 'POST',
            body:formdata
        })
        .then(res => res.text())
        .then(res=> console.log (res))
        .catch(err=>{
            console.error(err)
        })
//para resetear el boton de seleccionar 
        document.getElementById('fileinput').value = null

        setFile(null)
    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="title">Análisis de csv</h1>
                    <div>
                        <p >
                            Sube el archivo y obtenga la cantidad de registros según país ordenados de mayor a menor
                        </p>
                        <div className="row justify-content-center">
                            <article className="card-container">
                                <h4>Suba su archivo</h4>
                                <p class="card-container__text">Asegúrese de que el archivo contenga una columna llamada "pais".</p>
                                <div className="card p-3">
                                    <div className="row">
                                        <div className="col-10">
                                            <input id="fileinput" onChange={selectedHandler} className="form-control" type="file"></input>
                                        </div>
                                        <div className="col-2">
                                            <button onClick={envioHandler} className="btn btn-primary" type="button">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>     
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Archivo