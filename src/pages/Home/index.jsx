import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import VideoCallMainImg from "../../images/videoCallMainImg.jpeg";

export const HomePage = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <main>
    <section>
     
      <div className="container">
      
        <div className="row main-div">
        <h3 className="text-center">Enter my sweetheart your name to start video call ❤️</h3>
          <div className="col-lg-6">
            <img src={VideoCallMainImg} alt="video-call" className="img-fluid main-img" />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              name="text"
              id="text"
              required
              placeholder="Enter your name to start video call"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="input form-control" 
              
            />
            <div className="text-center">
            <button onClick={handleClick} className="join-btn btn btn-primary mt-5 "> 
              Join
            </button>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  </main>
  
  );
};
