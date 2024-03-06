import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import { jwtDecode } from "jwt-decode";
import {jwtDecode} from "jwt-decode";
import shareVideo from "../assets/share copy.mp4";
// import logo from "../assets/logo.png"
import logo from "../assets/logowhite.png";
import { client } from "../client.js";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);

    // const userResponse = jwtDecode(response.profileObj);
    // console.log(userResponse);
    if (response && response.credential) {
      const userResponse = jwtDecode(response.credential);
      console.log(userResponse);
      localStorage.setItem("user", JSON.stringify(userResponse));
      const { name, sub, picture } = userResponse;

      const doc = {
          _id: sub,
          _type: 'user',
          userName: name,
          image: picture
      }
      client.createIfNotExists(doc).then(() => {
        navigate("/", { replace: true });
      });
    } else {
      console.error("Profile data is missing or incomplete");
    }
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
            <GoogleOAuthProvider
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
            >
              <GoogleLogin
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
