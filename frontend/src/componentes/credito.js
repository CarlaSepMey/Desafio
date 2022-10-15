import Table from 'react-bootstrap/Table';

import {Link } from "react-router-dom";

const Credito = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="title">Créditos</h1>
                    <div className="">
                        <p >
                        La tabla a continuación muestra los desarrolladores que han participado en la confección de esta aplicación
                        </p>
                        <Table >
                            <thead class="table-secondary">
                                <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>Linkedin</th>
                                <th>Github</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                <td>1</td>
                                <td>Carla Sepúlveda</td>
                                <td>9 66667394</td>
                                <td><a as={Link} href="https://linkedin.com/in/carla-francisca-sepúlveda-meynard">linkedin.com/Carla</a></td>
                                <td><a as={Link} href="https://github.com/CarlaSepMey">@CarlaSepMey</a></td>
                                </tr>
                                
                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Credito