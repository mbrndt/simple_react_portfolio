import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <div id="intro">
          <h2> Hi, Moin and 안녕!</h2>
          <div className="prompt">
            <p>
              {" "}
              my name is <span className="word">mareike</span>, a software dev
              with a passion for web design
            </p>
            <LinkedIn />
            <Email />
            <GitHub />
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJs, HTML, CSS, Javascript, JQuery, Bootstrap, Material-UI,
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJs, Express, MongoDB, Mongoose, Sequelize, Passport,
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>Javascript, HTML, CSS, SQL, Python, Java, C++, C#,</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
