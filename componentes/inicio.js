import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link } from "react-router-dom";
import  {Nav} from "react-bootstrap"
import "../inicio.css";

const Inicio = () => {
    return(
        <div className="container">
            <h1 className="title">Bienvenid@!</h1>
                <p >Esta aplicación web ha sido creada utilizando React y Nodejs</p>
 
            <div className="row justify-content-center">
                <article className="card-container1">
                    <p className="card-container__text">
                        El objetivo de esta herramienta es generar un analisis sencillo a partir de un archivo csv de registros.
                        Dirigase a <Link as={Link} to="/archivo">archivo</Link>, y suba un archivo de extensión csv para comenzar.</p>
                                
                </article>
            </div>       
        </div>
           
    )
}
export default Inicio