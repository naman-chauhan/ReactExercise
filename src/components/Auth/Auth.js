import React from "react";
import Login from "./login";
import Fblogin from "./Fblogin";

function Auth() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="display-4 text-center">
            Tech <sub className="display-2 text-primary">X</sub>
          </h3>
          <div class="col-xs-1" align="center">
            <Login />
            <Fblogin />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Auth;
