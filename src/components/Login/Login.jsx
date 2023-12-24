import React from "react";
import './Login.css'

function Login() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <form className=" mt-5 p-3 col-md-4 mx-auto">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email :
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese su Email."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña :
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Ingrese su contraseña."
              />
            </div>
            <button type="button" class="btn btn-outline-light">Inicar sesion</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
