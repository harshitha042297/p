import React, { Component } from "react";
import "../components/Resume.css";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div style={{ marginTop: "-52px" }} className="row education">
          <div
            style={{ paddingLeft: "127px" }}
            className="three columns header-col"
          >
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div
            style={{ paddingLeft: "118px" }}
            className="nine columns main-col"
          >
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div style={{ width: "161%" }} className="row item">
                    <div style={{ width: "140%" }} className="twelve columns">
                      <img
                        style={{ paddingRight: "7px" }}
                        src={item.logo}
                        alt="logo"
                        width={70}
                        height={70}
                      />

                      <p
                        className="info"
                        style={{ backgroundColor: "#fffff0" }}
                      >
                        <h3 style={{ color: "black" }}>
                          {item.UniversityName}
                        </h3>
                        {item.specialization}
                        {/* <p>{item.Courses}</p> */}
                        <p> </p>
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                        <p> </p>
                        <span>&bull;</span>{" "}
                        <em className="date">{item.Courses}</em>
                      </p>

                      {/* <p>{item.cgpa}</p> */}
                      <p>
                        <p> </p>
                        {/* <span>&bull;</span>{" "} */}
                        <em className="date">
                          <p style={{ paddingLeft: "8px" }}>{item.cgpa}</p>
                        </em>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* ------------------------------ */}

        <div style={{ marginTop: "-52px" }} className="row education">
          <div
            style={{ paddingLeft: "127px", paddingTop: "35px" }}
            className="three columns header-col"
          >
            <h1>
              <span>EXPERIENCE</span>
            </h1>
          </div>

          <div
            style={{ paddingLeft: "118px", paddingTop: "23px" }}
            className="nine columns main-col"
          >
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div style={{ width: "161%" }} className="row item">
                    <div style={{ width: "140%" }} className="twelve columns">
                      <img
                        src={item.logo}
                        alt="logo"
                        width={70}
                        height={70}
                        style={{ paddingRight: "5px" }}
                      />
                      <p
                        className="info"
                        style={{ backgroundColor: "#fff5ee" }}
                      >
                        <h3 style={{ color: "black" }}>{item.CompanyName}</h3>
                        {item.specialization}
                        {/* <p>{item.Courses}</p> */}
                        <p> </p>
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.YearOfLeaving} {item.MonthOfLeaving}
                        </em>
                        <p> </p>
                        <span>&bull;</span>{" "}
                        <em className="date">{item.Achievements}</em>
                      </p>

                      {/* <p>{item.cgpa}</p> */}
                      {/* <p>
                        <p> </p>
                        <span>&bull;</span>{" "}
                        <em className="date">
                          <p>{item.cgpa}</p>
                        </em>
                      </p> */}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* ------------------------------ */}

        {/* 
        <div style={{ marginTop: "10px" }} className="row work">
          <div
            style={{ paddingLeft: "127px" }}
            className="three columns header-col"
          >
            <h1>
              <span>Work experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>

                      <br />
                      <p className="info">
                        {item.specialization}
                        <p> </p>
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing}
                          {item.YearOfPassing}
                        </em>
                      </p>

                      <br />
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div> */}

        <div style={{ marginTop: "-52px" }} className="row skill">
          <div
            style={{ paddingLeft: "127px", paddingTop: "35px" }}
            className="three columns header-col"
          >
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col"> 
          
           
            <div style={{display:"flex"}}>
              <div className="ba" style={{paddingLeft:"44px"}}>
                <ul className="skills">
                  {resumeData.skills &&
                    resumeData.skills.map((item) => {
                      return (
                        <li>
                          <span
                            className={` ${item.skillname.toLowerCase()}`}
                          />
                          <em>{item.skillname}</em>
                          <img src={item.s1} alt="" height={50} width={50}></img>
                          <img src={item.s2} alt="" height={50} width={50}></img>
                          <img src={item.s3} alt="" height={50} width={50}></img>
                          <img src={item.s4} alt="" height={50} width={50}></img>
                        </li>
                      );
                    })}
                </ul>
              </div>

              {/* <div className="six columns main-col">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
              </div> */}
            </div>
          
          </div>
        </div>
      </section>
    );
  }
}
