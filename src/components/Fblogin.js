import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const Fblogin = () => {
  const responseFacebook = (response) => {
    console.log("login result", response);
  };
  //   const componentClicked = (data) => {
  //     console.log(data);
  //   };
  return (
    <div>
      <FacebookLogin
        appId="669171887951952"
        autoload={true}
        className="mb-2 h-200"
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="btn btn-primary btn-lg m-4"
          >
            Sign in with Facebook
          </button>
        )}
      />
    </div>
  );
};

export default Fblogin;
