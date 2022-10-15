
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Archivo from './componentes/archivo';
import Inicio  from './componentes/inicio';
import Credito from './componentes/credito';
import NavbarExample from './layouts/navbar';
import FooterExample from './layouts/navbar';
import {CSVLink} from 'react-csv'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavbarExample /> } >
            <Route index element={ <Inicio />} />
            <Route path='archivo' element={ <Archivo />} />
            <Route path='credito' element={ <Credito />} />

            <Route path='*' element={ <Navigate replace to="/"  />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
