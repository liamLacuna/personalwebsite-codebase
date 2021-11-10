import React, { Component } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import aboutData from "./aboutData";

export default class About extends Component {
  render() {
    const codeBlocks = [];

    // eslint-disable-next-line 
    for (const [index, value] of aboutData.entries()) {
      codeBlocks.push(
        <CodeBlock key={index}
          text={value}
          theme={dracula}
          language={"JavaScript"}
          showLineNumbers={false}
        />
      );
    }

    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="nine columns main-col">{codeBlocks}</div>
            <div className="three columns download">
              <a
                href="https://github.com/liamLacuna/resume/blob/master/Liam%20Li%20Resume.pdf"
                className="button email"
              >
                Resume PDF
              </a>
              <a href="mailto:liamli1996@gmail.com" className="button email">
                Email Me
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
