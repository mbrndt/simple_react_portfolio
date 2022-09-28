import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <div id="intro">
          <h2> Hi, my name is Mareike</h2>
          <div className="prompt">
            <p>and i am the junior dev you have been looking for.</p>
            <div className="svg">
              <LinkedIn />
              <Email />
              <GitHub />
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJs, HTML, CSS, Tailwind</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJs, Express, MongoDB, Mongoose</span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>Javascript, Korean, German, English</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
