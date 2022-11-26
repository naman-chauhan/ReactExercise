import { GoogleLogout } from "react-google-login";
import React from "react";
import { useNavigate } from "react-router-dom";

const clientId =
  "163853759724-uv342junkb8rkrp8pm0l7b5nv5phrc10.apps.googleusercontent.com";

function Logout() {
  const nav = useNavigate();
  const onSuccess = () => {
    console.log("Log out sucessfull!");
    nav("/");
  };
  return (
    <div id="signInButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default Logout;
