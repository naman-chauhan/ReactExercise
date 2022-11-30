import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
function Login() {
  useEffect(() => {
    function start() {
      
    }
    gapi.load("client:auth2", start);
  });

  const clientId =
    "163853759724-uv342junkb8rkrp8pm0l7b5nv5phrc10.apps.googleusercontent.com";
  const nav = useNavigate();

  const onSuccess = async (res) => {
    console.log("Response : ", res.profileObj);
    localStorage.setItem("response", JSON.stringify(res.profileObj));
    if (typeof Storage !== "undefined") {
    } else {
      console.log("failed");
    }
    console.log("LOGIN SUCCESS! Current user:", res.profileObj);
    nav("/home");
  };

  const onFailure = (res) => {
    console.log("LOGIN Failed! res:", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        className="mb-2 w-100 bg bg-danger text-white"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="btn btn-danger btn-lg m-4"
          >
            Sign in with Google
          </button>
        )}
      />
    </div>
  );
}
export default Login;
