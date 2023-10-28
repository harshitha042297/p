import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div style={{paddingLeft:"100px", paddingRight:"45"}} className="three columns">

               <img className="profile-pic"  src="images/me.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>ABOUT ME</h2>
               <p style={{width:"145%",textAlign: "justify"}}>
               {
                 resumeData.aboutme
               }
               </p>

            </div>
         </div>
      </section>
    );
  }
}