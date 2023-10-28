import React, { Component } from "react";
import "../components/Portfolio.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./card_hover.css";
// import CardGroup from 'react-bootstrap/CardGroup';
// import image from '../../public/images';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <span
          className="mywork"
          style={{
            paddingLeft: "107px",
            borderBottom: "None",
            paddingBottom: "35px",
          }}
        >
          PROJECTS
        </span>
        <section id="portfolio">
          {/* <div className="row"> */}
          {/* <div className="twelve columns collapsed">
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              > */}
          <Row xs={1} md={3} className="g-3">
            {resumeData.portfolio &&
              resumeData.portfolio.map((item) => {
                return (
                  // <div className="columns portfolio-item">
                  <div>
                    {/* <div className="item-wrap"> */}

                    {/* <a href={`${item.link}`} target="_blank">
                      <img src={`${item.imgurl}`} className="img item-img"/>
                   
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a> */}
                    {/* <h5>{item.name}</h5>
                          <p>{item.description}</p> */}
                    {/* <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>       */}
                    <Col xs={1} md={3}>
                      <Card
                        style={{
                          width: "30rem",
                          borderRadius: "30px",
                          height: "520px",
                          justifyContent: "center",
                          marginBottom: "36px",
                          textAlign: "center",
                          // transform:"scale(1.05)",
                          // boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",
                          // transition:"transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        className="rounded card-hover"
                      >
                        <Card.Img
                          style={{ width: "30rem", height: "250px" }}
                          variant="top"
                          src={item.imgurl}
                        />
                        <Card.Body style={{ display: "block" }}>
                          <Card.Title
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              justifyContent: "center",
                              textAlign: "center",
                            }}
                          >
                            {item.name}
                          </Card.Title>
                          <Card.Text
                            style={{
                              fontSize: "15px",
                              justifyContent: "center",
                              textAlign: "center",
                            }}
                          >
                            {item.description}
                            </Card.Text>
                            {/* <Card.Text
                            style={{
                              fontSize: "15px",
                              justifyContent: "center",
                              fontWeight:"2px",
                              textAlign: "center",
                            }}
                          > */}
                          <Card.Text
                            style={{
                              fontSize: "15px",
                              fontWeight:"700",
                              // backgroundColor:"#ffefd5",
                              justifyContent: "center",
                              textAlign: "center",
                            }}
                          >
                        {item.tech}                            
                        </Card.Text>
                            
                          
                          <Card.Link
                            style={{ fontSize: "15px" }}
                            href={item.link}
                          >
                            Github Repo
                          </Card.Link>
                        </Card.Body>
                      </Card>
                    </Col>
                    {/* </div> */}
                  </div>
                );
              })}
          </Row>
          {/* </div>
            </div> */}
          {/* </div> */}
        </section>
      </div>
    );
  }
}
