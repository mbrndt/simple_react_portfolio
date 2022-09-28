import React from "react";

import "../styles/ProjectEntries.css";

const portfolio = () => {
  return (
    <div>
      <p>
        In this project I would like to show my creativity and personality. The
        theme is a mix between modern and retro UI. The website can be viewed{" "}
        <a
          href="https://portfolio-mbrndt.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        {" "}
        Of course I can also offer a{" "}
        <a
          href="https://www.canva.com/design/DAE_gc7uL24/tH0sihLYgerd54dnAuAEzg/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>{" "}
        to show insight of the development process.
      </p>
    </div>
  );
};

export default portfolio;
