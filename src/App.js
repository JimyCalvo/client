import React, { Fragment,useState } from "react";
import * as bootstrap from 'bootstrap'
import { createPopper } from '@popperjs/core';
import logoSQF from './img/Logo-SQF.jpg'
import img1 from './img/Quito_Noche.svg'
import img2 from './img/user-avatar.svg'
import marcoB from './img/Marco.svg'
import '../src/css/register.css'
import '../src/css/custom.css'
function App() {
  const [file,setfile]= useState(null)
  const selectdHandler= e=>{
    setfile(e.target.files[0])
  }
  const enviarData=()=>{
    if(!file){
      alert('Completa todo los datos')
      return
    }
    const formdata= new FormData()
    formdata.append('image',file)
    fetch('http://localhost:9000/sql/local',{
      method:'POST',
      body: formdata
    })
    .then(res=> res.text())
    .then(res => console.log(res))
    .catch(err=>{
      console.error(err)
    })
    
    setfile(null)
  }
  const fondoForm = { 'backgroundColor': 'rgba(255, 255, 255, 0.849)' };
  return (
    <Fragment>
       <div className="container-fluid p-0 p-sm-5 "id="register-container">
                <div className="row justify-content-center" style={fondoForm}>
                    {/* <!-- ========== Start img-componente ========== --> */}
                    <div className="col-12 d-sm-none d-md-block col-md-7 m-0 p-0 register-img ">
                        <div className="card rounded-0 border-0 d-sm-none ">
                            <img src={img1} className="card-img rounded-0 " alt="password-img" />
                            <img src={img2}
                                className="card-img-overlay img-fluid p-0 mt-5 position-absolute start-50 translate-middle-x"
                                alt="icono" width="100px" />
                            <img src={marcoB} className="card-img-overlay img-fluid p-0 " id="Marco" />
                        </div>
                    </div>
                    {/* <!-- ========== End img-componente ========== --> */}
                    {/* <!-- ========== Start form-Register ========== --> */}
                    <div className="col-12 col-sm-8 col-md-5 p-3 p-sm-0 p-md-3 ">
                        {/* <!-- ========== Start logo ========== --> */}
                        <div className=" d-none d-sm-block container text-center">
                            <figure className="container pt-5">
                                <img className="img-fluid" src={logoSQF} alt="logo" width="40%" />
                                <h6 className="mt-1 me-3 text-end"><em>Conecta tu Comida .... </em></h6>
                            </figure>
                        </div>
                        {/* <!-- ========== End logo ========== --> */}
                        <div className=" border-0 rounded-0 p-2 ">
                            <h4 className="text-center">Registrar Local</h4>
                            <form method="POST">
                                <div className="row p-2">
                                    <div className="col-12 p-1 mb-2">
                                        <input className="form-control" type="organization" name="nombreLocal" id="nombreLocal"
                                            placeholder="Nombre Local" width="100%" maxLength="40" required />
                                    </div>
                                    <div className="col-12 p-1 mb-2">
                                        <input type="email" name="emailLocal" id="emailLocal" className="form-control"
                                            placeholder="Correo Electrónico - Local" maxLength="80" required />
                                    </div>
                                    <div className="col-12 p-1 mb-2">
                                        <input id="phone" type="tel" name="phone" className="form-control" placeholder="Num. Teléfono" required />
                                    </div>
                                    <div className="col-12 p-1 mb-2">
                                        <input type="url" name="webLocal" id="webLocal" className="form-control"
                                            placeholder="Sitio Web Local" maxLength="80" />
                                    </div>
                                    <div className="col-12">
                                        <h6 className="mb-3">Añadir imagen o logo:</h6>
                                        <input  onChange={selectdHandler} className="form-control" name="logo" id="imagenSubida" type="file" accept='image/*' />
                                    </div>
                                    <img src={'#imagenSubida'} alt="Logo Local" />
                                </div>
                                <label>
                                    <input type="checkbox" /> Acepto las <a href="#">Condiciones del Servicio</a> y politicas
                                    de privacidad
                                    <span className="checkmark"></span>
                                </label>
                                <div className="text-center mt-5 pt-1 mb-5 pb-1">
                                    <button className="btn btn-primary btn-block fa-lg mb-3 rounded-pill" type="button" onClick={enviarData} >Siguiente
                                    </button>
                                    <div>
                                        <a className="text-center" href="#">Cancelar</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  );
}

export default App;
