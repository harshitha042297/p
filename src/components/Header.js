import React, { Component } from 'react';
import "../components/Header.css";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav" style={{paddingLeft:"300px",paddingTop:"10px"}}>
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Education</a></li>
               <li><a className="smoothscroll" href="#resume">Work Experience</a></li>
               <li><a className="smoothscroll" href="#resume">Skills</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               {/* <li><a className="smoothscroll" href="#">Certifications</a></li> */}
               {/* <li><a className="smoothscroll" href="#">Student Leadership and Involvement</a></li> */}
               {/* <li><a className="smoothscroll" href="#blog">Blog</a></li> */}
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner" >
            <div className="banner-text">
               <h1 className="responsive-headline">{resumeData.name}</h1>
               <h2 style={{color:'#fff', fontFamily:'sans-serif '}}> {resumeData.role}{resumeData.roleDescription}
               </h2>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p  style={{paddingTop:"-68px"}} className="scrolldown">
            <a style={{paddingTop:"-68px"}} className="smoothscroll" href="#about"><i style={{paddingTop:"-68px"}} className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}