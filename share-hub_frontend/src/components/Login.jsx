import React from "react";
import GoogleLogin from "react-google-login";
// import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share copy.mp4";
// import logo from "../assets/logo.png"
import logo from "../assets/logowhite.png";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };
  };
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="relative h-full w-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="object-cover h-full w-full"
        />
        <div className="absolute flex flex-col justify-center items-center left-0 right-0 top-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" />
                  Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
